/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.cosmicjs.com',
        },
      ],
    },
    async headers() {
      return [
        {
          source: '/(.*)', // Aplica para todas as rotas
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'ALLOWALL', // ou remova completamente esse cabeçalho
            },
            // Opcional: remover bloqueio por Content-Security-Policy
            {
              key: 'Content-Security-Policy',
              value: "frame-ancestors *", // ou use 'self https://www.facebook.com'
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  