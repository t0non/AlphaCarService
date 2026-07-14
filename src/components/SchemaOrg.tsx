export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Alpha Car Service",
    "image": "https://alphacarservicebh.com/logo.png", // placeholder if you deploy
    "@id": "https://alphacarservicebh.com",
    "url": "https://alphacarservicebh.com",
    "telephone": "+5531998935665",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Demétrio Ribeiro, 127",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "postalCode": "30285-580",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.917027,
      "longitude": -43.9161833
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/alphacarservicebh/"
    ],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
