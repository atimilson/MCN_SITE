/**
 * Helpers para transformar os textos livres do Cosmic em estrutura visual.
 */

/** "Auto peças: Veículos leves e pesados" -> { main: "Auto peças", sub: "Veículos leves e pesados" } */
export function splitTitle(title: string) {
  const clean = (title || "").replace(/\.+$/, "").trim();
  const colon = clean.indexOf(":");
  if (colon > 0) {
    return {
      main: clean.slice(0, colon).trim(),
      sub: clean.slice(colon + 1).trim(),
    };
  }
  const comma = clean.indexOf(",");
  if (comma > 0 && clean.length > 40) {
    return {
      main: clean.slice(0, comma).trim(),
      sub: clean.slice(comma + 1).trim(),
    };
  }
  return { main: clean, sub: "" };
}

export type ParsedDescription = {
  /** Parágrafos de texto corrido */
  paragraphs: string[];
  /** Itens extraídos de "Módulos: a, b, c" */
  modules: string[];
  /** Itens de listas numeradas "1) ..." ou linhas curtas */
  bullets: string[];
};

const MODULES_RE = /m[oó]dulos?\s*:/i;

export function parseDescription(text?: string | null): ParsedDescription {
  const result: ParsedDescription = { paragraphs: [], modules: [], bullets: [] };
  if (!text) return result;

  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  for (const line of lines) {
    const modMatch = line.match(MODULES_RE);
    if (modMatch && modMatch.index !== undefined) {
      const before = line.slice(0, modMatch.index).trim();
      if (before) result.paragraphs.push(before);
      const list = line
        .slice(modMatch.index + modMatch[0].length)
        .replace(/\s*e muito mais\.*\s*$/i, "")
        .split(/,|;/)
        .map((s) => s.replace(/\.+$/, "").trim())
        .filter(Boolean)
        .map(capitalize);
      result.modules.push(...list);
      continue;
    }

    const numbered = line.match(/^\d+\s*[).-]\s*(.+)$/);
    if (numbered) {
      result.bullets.push(numbered[1].replace(/\.$/, ""));
      continue;
    }

    result.paragraphs.push(line);
  }

  return result;
}

export function capitalize(s: string) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function truncate(text: string | null | undefined, max: number) {
  if (!text) return "";
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  return flat.slice(0, max).replace(/\s+\S*$/, "").trimEnd() + "…";
}

export function formatDate(dateString?: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function isSvg(url?: string) {
  return !!url && /\.svg(\?|$)/i.test(url);
}

export function getYouTubeId(url: string) {
  const match = url.match(
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/
  );
  return match && match[2].length === 11 ? match[2] : null;
}
