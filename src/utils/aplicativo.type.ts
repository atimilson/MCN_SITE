export interface AppProps {
    objects: ObjectApp[]
}

interface ObjectApp {
    slug: string;
    title: string

    metadata: {


        capa: {

            url: string;

        };

        descricao: string;


    };
}

