export type InstagramPost = {
  id: string;
  imageUrl: string;
  postUrl: string;
  caption: string;
};

export type InstagramFeedResult = {
  posts: InstagramPost[];
  /** graph = API oficial | fallback = imagens locais do site */
  source: "graph" | "fallback";
};

const USERNAME = "mcnsistemas";
const PROFILE_URL = `https://www.instagram.com/${USERNAME}/`;
const LIMIT = 6;

/**
 * Fallback: posts locais (Instagram não expõe feed público sem autenticação).
 * Substitua as imagens em /public/assets/images quando quiser atualizar manualmente.
 */
const FALLBACK_POSTS: InstagramPost[] = [
  {
    id: "fallback-1",
    imageUrl: "/assets/images/i1.jpg",
    postUrl: PROFILE_URL,
    caption:
      "Descubra por que um ERP com BI pode ser o seu maior aliado nesse momento.",
  },
  {
    id: "fallback-2",
    imageUrl: "/assets/images/i7.jpg",
    postUrl: PROFILE_URL,
    caption:
      "Com o aplicativo de contagem da MCN, você faz tudo pelo celular com rapidez e integração.",
  },
  {
    id: "fallback-3",
    imageUrl: "/assets/images/i3.jpg",
    postUrl: PROFILE_URL,
    caption: "Sua loja de decoração está pronta para crescer?",
  },
  {
    id: "fallback-4",
    imageUrl: "/assets/images/i4.jpg",
    postUrl: PROFILE_URL,
    caption: "Chegou a hora de evoluir — fale com a MCN e descubra como.",
  },
  {
    id: "fallback-5",
    imageUrl: "/assets/images/i5.jpg",
    postUrl: PROFILE_URL,
    caption: "Você ainda está digitando a chave PIX manualmente?",
  },
  {
    id: "fallback-6",
    imageUrl: "/assets/images/i6.jpg",
    postUrl: PROFILE_URL,
    caption:
      "Com a MCN, você gerencia lotes e validades com facilidade e segurança.",
  },
];

type GraphMedia = {
  id: string;
  caption?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
};

/**
 * Busca as últimas postagens do Instagram.
 *
 * Importante: o Instagram **não** permite listar posts públicos de um perfil
 * sem autenticação. Endpoints antigos e scraping retornam login wall / 429.
 *
 * Caminho oficial (recomendado): Instagram Graph API com conta Business/Creator.
 * Variáveis no .env.local:
 *   INSTAGRAM_ACCESS_TOKEN=...   (token de longa duração)
 *   INSTAGRAM_USER_ID=...        (ID do usuário Instagram Business)
 *
 * Sem essas variáveis, retorna o fallback local.
 */
export async function getInstagramPosts(
  limit = LIMIT
): Promise<InstagramFeedResult> {
  const token =
    process.env.INSTAGRAM_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN ||
    "";
  const userId = process.env.INSTAGRAM_USER_ID || "";

  if (token && userId) {
    try {
      const posts = await fetchFromGraphApi(userId, token, limit);
      if (posts.length > 0) {
        return { posts, source: "graph" };
      }
    } catch (error) {
      console.error("[instagram] Graph API falhou, usando fallback:", error);
    }
  }

  return {
    posts: FALLBACK_POSTS.slice(0, limit),
    source: "fallback",
  };
}

async function fetchFromGraphApi(
  userId: string,
  token: string,
  limit: number
): Promise<InstagramPost[]> {
  const fields = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "thumbnail_url",
    "permalink",
  ].join(",");

  // Busca um pouco a mais para ter margem ao filtrar vídeos sem thumbnail
  const url = new URL(`https://graph.facebook.com/v21.0/${userId}/media`);
  url.searchParams.set("fields", fields);
  url.searchParams.set("limit", String(Math.min(limit + 6, 20)));
  url.searchParams.set("access_token", token);

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 }, // cache 1h
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Graph API ${res.status}: ${body.slice(0, 200)}`);
  }

  const data = (await res.json()) as { data?: GraphMedia[] };
  const items = data.data ?? [];

  const posts: InstagramPost[] = [];

  for (const item of items) {
    if (posts.length >= limit) break;

    const imageUrl =
      item.media_type === "VIDEO" || item.media_type === "REELS"
        ? item.thumbnail_url || item.media_url
        : item.media_url || item.thumbnail_url;

    if (!imageUrl) continue;

    posts.push({
      id: item.id,
      imageUrl,
      postUrl: item.permalink || PROFILE_URL,
      caption: (item.caption || "").trim() || "Post no Instagram",
    });
  }

  return posts;
}
