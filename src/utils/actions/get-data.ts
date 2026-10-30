const COSMIC_BASE =
  process.env.NEXTPUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api.cosmicjs.com/v3/buckets/mcnsite-production";

const READ_KEY =
  process.env.NEXTREAD_KEY ||
  process.env.NEXT_READ_KEY ||
  "";

const DEFAULT_REVALIDATE = 60;

function ensureConfig() {
  if (!READ_KEY) {
    throw new Error(
      "NEXTREAD_KEY não configurada. Defina no arquivo .env.local"
    );
  }
}

async function cosmicFetch(path: string, revalidate = DEFAULT_REVALIDATE) {
  ensureConfig();
  const separator = path.includes("?") ? "&" : "?";
  const url = `${COSMIC_BASE}${path}${separator}read_key=${READ_KEY}`;

  const res = await fetch(url, { next: { revalidate } });

  if (!res.ok) {
    throw new Error(`Cosmic API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function getDataHome() {
  try {
    return await cosmicFetch(
      "/objects/66b80fc9bebd376c873dabfb?depth=1&props=slug,title,metadata"
    );
  } catch {
    throw new Error("Failed to fetch home data");
  }
}

export async function getDataBlog() {
  try {
    const query = encodeURIComponent(JSON.stringify({ type: "noticias" }));
    return await cosmicFetch(
      `/objects?query=${query}&limit=12&depth=1&props=slug,title,metadata,published_at&sort=-created_at`
    );
  } catch {
    throw new Error("Failed to fetch blog data");
  }
}

/** Executa uma busca e devolve um fallback em caso de erro (ex.: Cosmic 404 sem resultados). */
export async function safe<T>(promise: Promise<T>, fallback: T): Promise<T> {
  try {
    return await promise;
  } catch {
    return fallback;
  }
}

export async function getItemBySlug(slug: string) {
  const queryParams = new URLSearchParams({
    query: JSON.stringify({ type: "noticias", slug }),
    props: "slug, title, content, metadata,published_at",
  });

  try {
    return await cosmicFetch(`/objects?${queryParams.toString()}`);
  } catch {
    throw new Error("Failed get item by slug");
  }
}

export async function getDataProduct() {
  try {
    const query = encodeURIComponent(JSON.stringify({ type: "produtos" }));
    return await cosmicFetch(
      `/objects?query=${query}&props=slug,title,metadata&depth=1&sort=-created_at`
    );
  } catch {
    throw new Error("Failed to fetch products");
  }
}

export async function getProductBySlug(slug: string) {
  const queryParams = new URLSearchParams({
    query: JSON.stringify({ type: "produtos", slug }),
    props: "slug, title, content, metadata,published_at",
  });

  try {
    return await cosmicFetch(`/objects?${queryParams.toString()}`);
  } catch {
    throw new Error("Failed get product by slug");
  }
}

export async function getDataApp() {
  try {
    const query = encodeURIComponent(JSON.stringify({ type: "aplicativos" }));
    return await cosmicFetch(
      `/objects?query=${query}&limit=20&depth=1&props=slug,title,metadata&sort=-created_at`
    );
  } catch {
    throw new Error("Failed to fetch apps");
  }
}

export async function getAppBySlug(slug: string) {
  const queryParams = new URLSearchParams({
    query: JSON.stringify({ type: "aplicativos", slug }),
    props: "slug, title, content, metadata,published_at",
  });

  try {
    return await cosmicFetch(`/objects?${queryParams.toString()}`);
  } catch {
    throw new Error("Failed get app by slug");
  }
}

export async function getDataRevenda() {
  try {
    const query = encodeURIComponent(JSON.stringify({ type: "revendas" }));
    return await cosmicFetch(
      `/objects?pretty=true&query=${query}&limit=10&depth=1&props=slug,title,metadata`
    );
  } catch {
    throw new Error("Failed to fetch revendas");
  }
}

export async function getDatavideo() {
  try {
    const query = encodeURIComponent(JSON.stringify({ type: "youtubes" }));
    return await cosmicFetch(
      `/objects?pretty=true&query=${query}&limit=10&skip=0&depth=1&props=slug,title,metadata,type,`
    );
  } catch {
    throw new Error("Failed to fetch videos");
  }
}

export async function getDataCategoriasvideo() {
  try {
    const query = encodeURIComponent(
      JSON.stringify({ type: "categoriavideos" })
    );
    return await cosmicFetch(
      `/objects?pretty=true&query=${query}&limit=10&skip=0&depth=1&props=slug,title,metadata,type,`
    );
  } catch {
    throw new Error("Failed to fetch video categories");
  }
}
