// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    devIndicators: false, // 🔴 desactiva el botón flotante de Dev Tools
    output: 'export',        // <- crea 'out/' al hacer build
    images: { unoptimized: true }, // necesario si usas <Image/> en export
    trailingSlash: true, // <-- importante
};

export default nextConfig;
