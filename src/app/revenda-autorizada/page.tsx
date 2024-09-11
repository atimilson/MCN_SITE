import Image from "next/image"
import { Hero } from "@/components/hero"

export default function revendaAutorizada() {
    return (
        <>
            <Hero
                title="Revenda Autorizada"
                banner="/assets/images/banner-revenda.jpg"

            />
            <section className="p-md-5 p-3 container">
                <h1 className="section-title mb-5">Revenda Autorizada</h1>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-3 shadow">

                            <Image src="/assets/mcnsistemas-revenda-autorizada-kasterweb.jpg" className="img-fluid rounded-start" alt="" width={300} height={200} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">KASTERWEB TECNOLOGIA</h5>
                                <p className="card-text">  (65) 3359-4502 / (65) 2127-1459</p>
                                <p className="card-text">(65) 99202-6267</p>
                                <p className="card-text">  meajuda@kasterweb.com</p>
                                <p className="card-text"> Endereço: Av. Agrícola Paes de Barros, Nº 790, Bairro Verdão, Sala 01, Cuiabá - MT, CEP: 78030-210</p>
                                <p className="card-text"> Site: kasterweb.com</p>                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-3 shadow">

                            <Image src="/assets/consult.jpg" className="img-fluid rounded-start" alt="" width={300} height={200} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">ICONSULT TECNOLOGIA</h5>
                                <p className="card-text"> (21) 2391-6413 / (65) 99221-3533</p>
                                <p className="card-text">(21) 2391-6413</p>
                                <p className="card-text"> iconsult@iconsult.com.br</p>
                                <p className="card-text"> Endereço: Av. Ayrton Senna, Bloco 02, Sala 326, Barra da Tijuca, Rio de Janeiro – RJ, Cep: 22775-003</p>
                                <p className="card-text">Site: iconsult.com.br</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}