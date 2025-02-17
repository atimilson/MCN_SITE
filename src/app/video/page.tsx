'use client'
import { useEffect, useState } from 'react';
import { getDatavideo } from '@/utils/actions/get-data';
import { videoProps } from '@/utils/video.type';

export default function Videos() {
    const [videos, setVideos] = useState<videoProps | null>(null);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const data = await getDatavideo();
                console.log(data);
                setVideos(data);
            } catch (error) {
                console.error("Erro ao buscar vídeos:", error);
            }
        }
        fetchVideos();
    }, []);
  // https://www.youtube.com/embed/-Zt-h-l6vPA?feature=shared
    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Videos</h1>
            <div className="text-center mb-4">
                <a
                    href="https://www.youtube.com/@McnSoftware1731"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger"
                >
                    Visite nosso canal no YouTube
                </a>
            </div>
            <div className="row">
                {videos?.objects.map((video) => {
                    // Supondo que video.metadata.video contém o ID do vídeo
                    const embedUrl = `https://www.youtube.com/embed/${video.metadata.video}`;
                    return (
                        <div key={video.slug} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm border-1 rounded-3 overflow-hidden">
                                <div className="card-body p-0">
                                    <h5 className="card-title p-3">{video.title}</h5>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            className="embed-responsive-item"
                                            src={embedUrl}
                                            width="100%"
                                            height="300"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
