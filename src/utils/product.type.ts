export interface ProductProps {
  objects: ObjectProduct[];
}

export interface ObjectProduct {
  slug: string;
  title: string;
  published_at?: string;
  metadata: {
    capa: {
      url: string;
    } | null;
    descricao: string | null;
  };
}
