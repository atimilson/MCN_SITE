"use client"
import React, { useEffect } from 'react';

const ElfsightInstagramFeed = () => {
    useEffect(() => {
        // Adiciona o script do Elfsight ao carregar o componente
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.setAttribute('data-use-service-core', 'true');
        script.defer = true;
        document.body.appendChild(script);

        // Limpeza ao desmontar o componente
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div className="elfsight-app-c7aacdf8-117e-45c0-90ef-681f7f544741" data-elfsight-app-lazy></div>
        </div>
    );
};

export default ElfsightInstagramFeed;
