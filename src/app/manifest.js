import { SITE_NAME } from "@/lib/constants";

export default function manifest() {
    return {
        name: SITE_NAME,
        short_name: SITE_NAME,
        description: 'Líderes en construcción y mantenimiento de piscinas en Costa Rica.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0000CC',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
    }
}
