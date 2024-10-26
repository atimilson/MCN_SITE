import { RevendaProps } from '@/utils/revenda';
import Image from "next/image";

export function Revenda({ objects }: RevendaProps) {
    return (
        <>
            {objects.map((object) =>
                object.metadata.revenda.map((item) => (
                    <div className="card mb-3" key={item.empresa}>
                        <div className="row g-0">
                            <div className="col-md-3 shadow">
                                <Image
                                    src={item.image.url}
                                    className="img-fluid rounded-start"
                                    alt={item.empresa}
                                    width={300}
                                    height={200}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.empresa}</h5>
                                    <p className="card-text">{item.contato}</p>
                                    <p className="card-text">{item.email}</p>
                                    <p className="card-text">{item.endereco}</p>
                                    <p className="card-text">{item.site}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}
