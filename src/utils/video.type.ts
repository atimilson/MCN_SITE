export interface videoProps {
    objects: CategoryObject[];
    total: number;
}

interface CategoryObject {
    slug: string;
    title: string;
    type: string;
    metadata: {
        category_name: string;
        links: VideoLink[];
    }
}

interface VideoLink {
    link_title: string;
    url: string;
}


