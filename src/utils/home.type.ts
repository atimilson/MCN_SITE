export interface HomeProps {
  object: {
    slug: string;
    title: string;
    metadata: {
      testimonials: TestimonialProps[];
      slider: SliderProps[];
    };
  };
}

export interface TestimonialProps {
  image: {
    url: string;
  };
  company: string;
  description: string;
}

interface SliderProps {
  image: {
    url: string;
  };
  text: string;
}
