export interface BlogProps {
    objects: ObjectPost[]
}

interface ObjectPost {
    slug: string;
    title: string
    published_at: string
    metadata: {


        capa: {

            url: string;

        };

        posts: {
            descricao: string;
            autor: string
        }

    };

}

