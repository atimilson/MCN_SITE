export interface ProductProps {
    objects: ObjectProduct[]
}

interface ObjectProduct {
    slug: string;
    title: string

    metadata: {


        capa: {

            url: string;

        };

        descricao: string;


    };
}

