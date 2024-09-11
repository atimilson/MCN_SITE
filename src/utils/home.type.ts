export interface HomeProps {
    object: {
        slug: string;
        title: string

        metadata: {

            testimonials: {
                map: any;
                image: {
                    url: string;

                };
                company: string;
                description: string
            };

            slider: SliderProps[];
        };
    }

}

interface SliderProps {
    image: {
        url: string;
    };
    text: string
}