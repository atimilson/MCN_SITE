export interface videoProps {
    objects: videoObject[];
}

interface videoObject {
    slug: string;
    title: string;
    metadata: {
        video: string;
    }
}


