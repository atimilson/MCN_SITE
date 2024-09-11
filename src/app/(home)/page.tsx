
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
import ElfsightInstagramFeed from "@/components/instagram";
import Link from "next/link";


export default async function Home() {

  const { object }: HomeProps = await getDataHome();

  return (
    <main>
      <Carousel
        object={object}
      />
      <section className="p-md-5 p-3 container-fluid">
        <h2 className="section-title mb-5">SEGMENTOS ATENDIDOS</h2>
        <div className="row gap-3 d-flex justify-content-center">
          <div className="col-md-3 col-12 shadow p-3" data-aos="fade-up"
            data-aos-delay="150">
            <div className="text-center mb-3">

              <BrickWall size={40} className="section-title mb-3" />
              <h3 className="section-subtitle">Materiais para Construção</h3>
            </div>

            <p>O segmento de materiais para construção necessita de particularidades específicas em seus sistemas. A MCN traz funcionalidades de fácil manuseio que agilizam o processo de venda e gerenciamento da empresa.

            </p>
          </div>
          <div className="col-md-3 col-12 shadow p-3" data-aos="fade-up"
            data-aos-delay="250">
            <div className="text-center mb-3">
              <Truck size={40} className="section-title mb-3" />
              <h3 className="section-subtitle">Distribuidora</h3>
            </div>

            <p>A Venda por atacado ou distribuidora necessita de um Fluxo seguro e ágil nas vendas, a MCN Sistemas tem o ERP ideal para esse segmento pois conta com um sistema de venda extremamente fácil, facilitando a entrega rápida pelo setor de expedição.

            </p>
          </div>
          <div className="col-md-3 col-12 shadow p-3" data-aos="fade-up"
            data-aos-delay="400">
            <div className="text-center mb-3">
              <Car size={40} className="section-title mb-3" />
              <h3 className="section-subtitle">Auto Peças</h3>

            </div>
            <p>A venda e distribuição de auto peças é um setor em constante movimentação e ter um sistema ágil e centralizado, além de conter funções específicas para o segmento, são extremamente necessários.</p>
          </div>
        </div>
      </section>
      <div className="background-blue d-flex justify-content-center">
        <div className="row container p-md-5 p-3">
          <div className="col-md-9 col-12">
            <h3>Construa com confiança!</h3>
            <p>Descubra como nossos softwares especializados em materiais de construção e autopeças <br /> podem impulsionar seu negócio.</p>

          </div>
          <div className="col-md-3 col-12 text-md-end mt-3 mt-md-0">
            <a href="#" type="button" className="btn btn-outline-light" data-aos="flip-left">SOLICITE UM ORÇAMENTO</a>
          </div>
        </div>
      </div>
      <section className="p-md-5 p-3 container">
        <h2 className="section-title mb-5" data-aos="fade-down">DEPOIMENTOS</h2>
        <Testimonials

          object={object}

        />
      </section>
      <section className="p-md-5 p-3 bg-light">
        <h2 className="section-title" data-aos="fade-up">INSTAGRAM</h2>
        <Link href="https://www.instagram.com/mcnsistemas/" target="_blank" className="text-decoration-none text-dark fw-bold">
          <p className="text-center mb-5 fw-bold">@mcnsistemas</p>
        </Link>
        <div className="container ">

          <ElfsightInstagramFeed />
          <div className="text-center">
            <Link href="https://www.instagram.com/mcnsistemas/" target="_blank" className="btn btn-outline-dark">
              <Instagram className="me-2" />
              Siga-nos no Instagram
            </Link>
          </div>

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



