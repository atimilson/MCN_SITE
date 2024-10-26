export interface RevendaProps {
    objects: RevendaObject[];
}

interface RevendaObject {
    slug: string;
    title: string;
    metadata: {
        revenda: {
            image: {
                url: string;
            };
            empresa: string;
            contato: string;
            email: string;
            endereco: string;
            site: string;
        }[];
    };
}
