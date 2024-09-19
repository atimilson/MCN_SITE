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
            <div className="elfsight-app-9728513b-4bba-4e36-a73c-33d3d8b5bbe7" data-elfsight-app-lazy></div>
        </div>
    );
};

export default ElfsightInstagramFeed;
