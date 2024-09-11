"use client"
import { useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import {
    Instagram,
    MapPin,
    Mail,


} from "lucide-react";
import AOS from 'aos'
import 'aos/dist/aos.css'


export function Footer() {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <footer>
            <div className="bg-light p-md-5 p-3">
                <div className="row text-center d-flex align-items-center gap-4 gap-md-0">
                    <div className="col-md-4 col-12">
                        <Link href="/" className="navbar-brand">
                            <Image
                                src="/assets/images/mcnsistemas-logo.png"
                                alt="Logo do site"
                                quality={100}
                                priority={true}
                                width={245}
                                height={100}
                            />
                        </Link>
                    </div>
                    <div className="col-md-4 col-12">
                        <h4 className="section-subtitle"> <MapPin /> Endereço</h4>
                        <p>Av. Agrícola Paes de Barros
                            Bairro Cidade Alta, CEP: 78030-210
                            Cuiabá - MT</p>
                    </div>
                    <div className="col-md-4 col-12">
                        <h4 className="section-subtitle">Contato</h4>
                        <Link href="mailto:glaucia@mcnsistemas.com.br" className="text-decoration-none text-dark">
                            <p><Mail className="section-subtitle" size={16} /> glaucia@mcnsistemas.com.br</p>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="p-2 bg-dark text-white d-flex align-items-center justify-content-center">
                © MCN Sistemas {`${new Date().getFullYear()}`} - Todos os direitos reservados | Política de Privacidade
            </div>
        </footer >
    )
}