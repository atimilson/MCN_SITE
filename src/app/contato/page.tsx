import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { Hero } from "@/components/hero";


export default function Contatos() {
    return (
        <>
            <Hero
                title="Contato"
                banner="/assets/images/banner-contato.jpg"

            />
            <section className="p-md-5 p-3">
                <div className="container">
                    <h1 className="text-center">Fale conosco</h1>
                    <p className="text-center">
                        {" "}
                        Envie-nos um email preenchendo os campos abaixo
                        <br /> e logo retornaremos o seu contato.
                    </p>

                    <form className="row g-3 mt-md-5 mt-3">
                        <div className="col-md-12">
                            <input type="text" className="form-control" placeholder="Nome" />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="e-mail"
                            />
                        </div>

                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o assunto"
                            />
                        </div>

                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Telefone"
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={5}
                                placeholder="Digite sua mensagem"
                            ></textarea>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-dark">
                                Enviar
                            </button>
                        </div>
                    </form>
                    <hr />
                    <div className="row mt-4">
                        <div className="col-md-6 col-12"> <div className="w-100">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7685.424445623094!2d-56.121349!3d-15.607017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db218e70f4ca1%3A0x2fed47d1990b3b11!2sAv.%20Agr%C3%ADcola%20Paes%20de%20Barros%2C%20790%20-%20Cidade%20Alta%2C%20Cuiab%C3%A1%20-%20MT%2C%2078030-100%2C%20Brasil!5e0!3m2!1spt-PT!2spt!4v1723315555854!5m2!1spt-PT!2spt" width="100%" height="400" loading="lazy"></iframe>
                        </div></div>
                        <div className="col-md-6 col-12"> <div className="alert  shadow" role="alert">
                            <h5 className="fw-bold">Contatos</h5>

                            <ul className="list-group">
                                <li className="list-group-item"><FaPhone /> <Link href="tel:6530544338" className="text-decoration-none text-dark">(65) 3054-4338</Link></li>
                                <li className="list-group-item"><FaPhone /> <Link href="tel:6530544339" className="text-decoration-none text-dark">(65) 3054-4339</Link></li>
                            </ul>


                        </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
}
