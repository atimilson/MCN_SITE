import {
  PhoneCall,
  BrickWall,
  Truck,
  Car,
  Instagram
} from "lucide-react";
import { Carousel } from "@/components/carousel";
import { Testimonials } from "@/components/testimonials";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
// import InstagramFeed from "@/components/instagram";
import CTASection from "@/components/cta-section";
import SegmentsSection from "@/components/segments-section";
import SimpleInstagramFeed from "@/components/instagram/simple";

export default async function Home() {

  const { object }: HomeProps = await getDataHome();

 

  return (
    <main>
      <Carousel
        object={object}
      />
      <SegmentsSection />
      <CTASection />
      <section className="p-md-5 p-3 container">
        <h2 className="section-title mb-5" data-aos="fade-down">DEPOIMENTOS</h2>
        <Testimonials

          object={object}

        />
      </section>
      <section className="p-md-5 p-3 bg-light">
        <h2 className="section-title" data-aos="fade-up">INSTAGRAM</h2>
        <div className="container">
          <SimpleInstagramFeed />
        </div>
      </section>


      <section className="p-md-5 p-3">
        <h2 className="section-title mb-5">FALE CONOSCO</h2>
        <div className="container text-center d-flex justify-content-center flex-column flex-md-row gap-3">
          <button type="button" className="btn btn-primary" data-aos="flip-left"><PhoneCall size={20} /> (65) 3054-4338</button>
          <button type="button" className="btn btn-primary" data-aos="flip-left"><PhoneCall size={20} /> (65) 3054-4339</button>

        </div>
      </section>
    </main>
  );
}



