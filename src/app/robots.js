export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/preview/', '/api/', '/_next/'],
            },
        ],
        sitemap: 'https://www.piscinas-costarica.com/sitemap.xml',
        host: 'https://www.piscinas-costarica.com',
    }
}
