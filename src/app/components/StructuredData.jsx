import { SITE_NAME, CONTACT_INFO } from "@/lib/constants";

export default function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": SITE_NAME,
        "image": "https://piscinascr.com/logo.png",
        "@id": "https://piscinascr.com",
        "url": "https://piscinascr.com",
        "telephone": CONTACT_INFO.phone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "La Palmera",
            "addressLocality": "San Carlos",
            "addressRegion": "Alajuela",
            "addressCountry": "CR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.3233, // Approximate for San Carlos
            "longitude": -84.4272
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "07:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/PiscinasCR",
            "https://www.instagram.com/piscinas_cr"
        ],
        "description": "Líderes en construcción, mantenimiento y remodelación de piscinas en Costa Rica. Especialistas en concreto y fibra de vidrio con acabados premium."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
