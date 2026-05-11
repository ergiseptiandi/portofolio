export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Erghi Septiandi Putra",
    alternateName: ["Ergi Septiandi", "Ergi Septiandi Putra"],
    givenName: "Erghi",
    familyName: "Septiandi Putra",
    jobTitle: "Freelance Full-Stack Developer",
    url: "https://portfolio.paidev.my.id",
    image: "https://portfolio.paidev.my.id/ergi.jpg",
    sameAs: [
      "https://github.com/ergiseptiandi",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Laravel",
      "Go",
      "NestJS",
      "Flutter",
      "TypeScript",
      "Docker",
      "MySQL",
      "PostgreSQL",
      "DevOps",
      "Cloudflare",
    ],
    worksFor: {
      "@type": "Organization",
      name: "PT Persero Batam",
    },
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Batam",
        addressCountry: "Indonesia",
      },
    },
    description:
      "Freelance full-stack developer open for projects. Web, mobile, backend & DevOps.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
