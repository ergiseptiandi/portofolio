# 🔍 SEO Audit Plan — Portfolio (Erghi Septiandi Putra)

> Target: Muncul di halaman 1 Google untuk keyword **"Erghi Septiandi Putra"**
> URL: https://portfolio.paidev.my.id
> Status saat ini: ❌ Belum ada robots.txt, sitemap.xml, atau structured data

---

## ✅ Phase 1 — Teknis Dasar (wajib)

### 1. robots.txt
Buat `/public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://portfolio.paidev.my.id/sitemap.xml
```

### 2. Sitemap XML
Buat `app/sitemap.ts` (Next.js 16 built-in generator):
- Halaman utama (https://portfolio.paidev.my.id)
- CV download page jika relevan

### 3. Canonical URL + Metadata Upgrade di `layout.tsx`
- Tambah `metadataBase` (wajib biar Next.js generate URL absolute)
- Tambah `alternates.canonical`
- Tambah `verification.google` (Google Search Console)
- Tambah `robots` index, follow
- Tambah `creator`, `publisher` meta
- Perbaiki `openGraph.images` dengan absolute URL

---

## ✅ Phase 2 — Structured Data (JSON-LD)

### 4. Person Schema di halaman utama
Google butuh struktur data biar muncul **Knowledge Panel** / rich snippet:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Erghi Septiandi Putra",
  "alternateName": ["Ergi Septiandi", "Ergi"],
  "jobTitle": "Freelance Full-Stack Developer",
  "url": "https://portfolio.paidev.my.id",
  "sameAs": [
    "https://github.com/ergiseptiandi",
    "https://linkedin.com/in/ergiseptiandi"
  ],
  "knowsAbout": ["Next.js", "Laravel", "Go", ...]
}
```

Buat komponen `<StructuredData />` dan inject di layout.

### 5. WebSite + WebApplication schema
Biar Google ngerti ini portfolio website.

---

## ✅ Phase 3 — On-Page Optimization

### 6. Internal anchor links
Semua section punya id (`#about`, `#projects`, `#skills`, `#contact`) — ✅ sudah. Pastikan link nav menggunakan ini.

### 7. Title tag optimization
Current: `Erghi Septiandi Putra — Freelance Full-Stack Developer`
→ Pastiin keyword "Erghi Septiandi Putra" di depan. ✅ sudah.

### 8. Meta description
Current: sudah relevan ✅, tapi bisa ditambah "portfolio" keyword.

### 9. Heading structure
Pastikan cuma 1 `<h1>` (Hero section), sisanya `<h2>`/`<h3>`.

### 10. Image alt text
Semua image harus punya `alt` proper deskriptif.

---

## ✅ Phase 4 — Performance & Core Web Vitals

### 11. Image optimization
Udah pakai `next/image` ✅. Pastiin format WebP/AVIF.

### 12. LCP / FCP
Periksa Lighthouse. Kalau lambat, tambah `priority` di hero image.

### 13. Mobile responsiveness
Udah mobile-first ✅.

---

## ✅ Phase 5 — Google Search Console & Indexing

### 14. Submit ke Google Search Console
- Verifikasi domain via meta tag
- Submit sitemap.xml
- Request indexing manual

### 15. Pastikan tidak ada duplicate content
Canonical tag ✅ setelah implementasi.

---

## ✅ Phase 6 — External Signals

### 16. GitHub profile
Update GitHub bio & pinned repo → tambah link portfolio.

### 17. LinkedIn
Profile + link ke portfolio.

### 18. Freelance platform
Upwork / Sribulancer / Fiverr → link ke portfolio.

---

## 📋 Estimasi Pengerjaan

| Item | Waktu |
|------|-------|
| robots.txt | ⚡ 2 menit |
| sitemap.ts | ⚡ 5 menit |
| Metadata upgrade layout.tsx | ⚡ 10 menit |
| JSON-LD structured data | ⚡ 15 menit |
| Deploy ulang Docker | ⚡ 5 menit |
| Google Search Console setup | ⚡ 10 menit |
| **Total** | **~45 menit** |

> ✅ **Prioritas tertinggi**: robots.txt + sitemap + canonical + JSON-LD
> 🚀 Setelah deploy, Google bisa butuh 1-7 hari untuk indexing.

Mau langsung execute plan ini? Gas 🚀
