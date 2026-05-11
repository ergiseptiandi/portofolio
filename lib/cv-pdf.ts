import { PDFDocument, StandardFonts, rgb, type PDFFont } from "pdf-lib";

type CVExperience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
};

type CVEducation = {
  degree: string;
  school: string;
  period: string;
  highlights?: string[];
};

type CVProject = {
  title: string;
  tech: string;
  description: string;
};

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN = 44;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const COLOR_TEXT = rgb(0.07, 0.07, 0.1);
const COLOR_MUTED = rgb(0.35, 0.35, 0.4);
const COLOR_RULE = rgb(0.82, 0.82, 0.85);
const COLOR_PRIMARY = rgb(0.15, 0.39, 0.92); // #2563eb
const COLOR_BG_ACCENT = rgb(0.95, 0.97, 1.0);

const cvData = {
  name: "Erghi Septiandi Putra",
  title: "Full Stack Developer",
  subtitle: "Backend Systems · Mobile Apps · DevOps",
  contactLines: [
    "Batam, Indonesia | ergiputra321@gmail.com | +62 852 6391 2536",
    "portfolio.paidev.my.id | github.com/ergiseptiandi | linkedin.com/in/ergi-septiandi-p-05b896275",
  ],
  summary:
    "Full Stack Developer with 2+ years of experience building production web applications, mobile apps, and backend services. Proven track record delivering internal enterprise systems, payment-integrated POS platforms, and SaaS API products. Strong focus on automation, clean architecture, and measurable business impact.",

  experiences: [
    {
      role: "Full Stack Developer & DevOps Engineer",
      company: "PT Persero Batam",
      location: "Batam, Indonesia",
      period: "Feb 2025 - Present",
      bullets: [
        "Delivered 5+ internal production applications across HR, operations, logistics, and event workflows using Laravel, Expo, Flutter, Docker, and GitLab CI/CD",
        "Built HRIS platform — automated payroll, PPh21 tax, BPJS, fingerprint attendance sync, overtime management, email payslips, and a mobile app with GPS attendance & KPI dashboard",
        "Migrated Odoo from cloud to on-premise infrastructure with zero data loss and no downtime",
        "Automated CI/CD pipelines, container recovery policies, and Nginx reverse proxy across 10+ services",
      ],
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Self-employed",
      location: "Remote",
      period: "Sep 2024 - Present",
      bullets: [
        "Smart POS System (Candu Roti Bakar) — Full-stack POS with stock management, P&L reports, COGS tracking, and Midtrans QRIS integration. Android app built with Flutter",
        "ERP-style system (Batam Toteles) — Purchase requests, POs, delivery orders, production flow, UMKM consignment with RBAC and WhatsApp notifications",
        "GPS Attendance App (PT Jala Armada Rinjani) — GPS clock-in/out, cross-day support, leave management, admin monitoring dashboard",
      ],
    },
    {
      role: "Backend Developer (Internship)",
      company: "Folxcode",
      location: "Remote",
      period: "2023 - 2024",
      bullets: [
        "Developed backend systems for 3+ client products (HappyBeauty E-commerce, Tritunas, Grand Batam Mall) using NestJS and PostgreSQL",
        "Built Liszthoven Music School platform with 50+ features: billing, student management, radius-based attendance tracking",
      ],
    },
    {
      role: "Full Stack Developer (Internship — PBL)",
      company: "Tax Center, Politeknik Negeri Batam",
      location: "Batam, Indonesia",
      period: "Aug 2022 - Dec 2022",
      bullets: [
        "Improved tax calculation accuracy and strengthened session security for the e-filing tax system",
        "Implemented recurring payment with Virtual Account integration",
      ],
    },
  ] satisfies CVExperience[],

  projects: [
    {
      title: "Pai Joki",
      tech: "Next.js · Prisma · Midtrans · WhatsApp Gateway",
      description:
        "End-to-end freelance service management platform used by real clients. Features service catalog, ordering, real-time progress tracking, revision system, automated invoicing, WhatsApp OTP & 2FA.",
    },
    {
      title: "WhatsApp API Gateway",
      tech: "Next.js · Baileys · MySQL · Prisma · Webhook",
      description:
        "Multi-device SaaS platform for WhatsApp automation. QR authentication, dynamic API keys, webhooks, contact sync, and role-based access. Self-hosted on Docker.",
    },
    {
      title: "HRIS Platform",
      tech: "Laravel · MySQL · Fingerprint SDK · Flutter",
      description:
        "Enterprise HR system at PT Persero Batam covering full employee lifecycle: payroll, tax, BPJS, attendance, overtime, KPIs. Mobile app with GPS attendance and in-app updates.",
    },
    {
      title: "Smart POS & ERP Systems",
      tech: "Laravel · Flutter · Midtrans · MySQL",
      description:
        "Multiple production systems: POS for Candu Roti Bakar with QRIS payments, ERP-style platform for Batam Toteles covering procurement to production.",
    },
  ] satisfies CVProject[],

  education: [
    {
      degree: "D3 — Informatics Engineering",
      school: "Politeknik Negeri Batam",
      period: "2022 - 2025",
      highlights: [
        "Software engineering, web & mobile development, database systems",
        "Project-Based Learning: Tax Center e-filing system",
      ],
    },
  ] satisfies CVEducation[],

  skills: [
    { category: "Languages", items: "PHP, JavaScript, TypeScript, Dart, SQL, HTML, CSS" },
    { category: "Frontend", items: "Next.js, React, Tailwind CSS, Flutter, Expo" },
    { category: "Backend", items: "Laravel, NestJS, Node.js, REST APIs, WebSockets" },
    { category: "Database", items: "PostgreSQL, MySQL, Oracle Database" },
    { category: "DevOps", items: "Docker, Nginx, GitLab CI/CD, GitHub Actions, Cloudflare" },
    { category: "Payments & Integrations", items: "Midtrans (QRIS, VA), WhatsApp API, OTP/2FA" },
  ],

  languages: [
    { lang: "Indonesian", level: "Native" },
    { lang: "English", level: "Professional working proficiency" },
  ],
};

function wrapText(text: string, font: PDFFont, size: number, maxWidth: number) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      current = candidate;
      continue;
    }
    if (current) {
      lines.push(current);
      current = word;
    } else {
      lines.push(word);
    }
  }
  if (current) lines.push(current);
  return lines.length > 0 ? lines : [""];
}

export async function generateCvPdf(): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle("Resume - Erghi Septiandi Putra");
  pdfDoc.setAuthor("Erghi Septiandi Putra");
  pdfDoc.setSubject("ATS-friendly resume");

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - MARGIN;

  const addPage = () => {
    page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    // Draw accent bar on every page
    page.drawRectangle({
      x: 0,
      y: 0,
      width: 6,
      height: PAGE_HEIGHT,
      color: COLOR_PRIMARY,
    });
    y = PAGE_HEIGHT - MARGIN;
  };

  const ensureSpace = (height: number) => {
    if (y - height < MARGIN) addPage();
  };

  const drawCenteredLines = ({
    lines,
    font,
    size,
    color = COLOR_TEXT,
    lineHeight,
    afterGap = 0,
  }: {
    lines: string[];
    font: PDFFont;
    size: number;
    color?: ReturnType<typeof rgb>;
    lineHeight?: number;
    afterGap?: number;
  }) => {
    const lh = lineHeight ?? size * 1.3;
    ensureSpace(lines.length * lh + afterGap);
    for (const line of lines) {
      const width = font.widthOfTextAtSize(line, size);
      page.drawText(line, { x: (PAGE_WIDTH - width) / 2, y: y - size, size, font, color });
      y -= lh;
    }
    y -= afterGap;
  };

  const drawWrappedText = ({
    text,
    font,
    size,
    x = MARGIN,
    width = CONTENT_WIDTH,
    color = COLOR_TEXT,
    lineHeight,
    afterGap = 0,
  }: {
    text: string;
    font: PDFFont;
    size: number;
    x?: number;
    width?: number;
    color?: ReturnType<typeof rgb>;
    lineHeight?: number;
    afterGap?: number;
  }) => {
    const lh = lineHeight ?? size * 1.35;
    const lines = wrapText(text, font, size, width);
    ensureSpace(lines.length * lh + afterGap);
    for (const line of lines) {
      page.drawText(line, { x, y: y - size, size, font, color });
      y -= lh;
    }
    y -= afterGap;
  };

  // ---- Draw accent bar on left ----
  page.drawRectangle({
    x: 0,
    y: 0,
    width: 6,
    height: PAGE_HEIGHT,
    color: COLOR_PRIMARY,
  });

  // ---- HEADER ----
  y -= 8;
  drawCenteredLines({
    lines: [cvData.name],
    font: fontBold,
    size: 26,
    lineHeight: 30,
    afterGap: 2,
    color: COLOR_PRIMARY,
  });
  drawCenteredLines({
    lines: [cvData.title],
    font: fontBold,
    size: 12,
    lineHeight: 15,
    afterGap: 1,
    color: COLOR_TEXT,
  });
  drawCenteredLines({
    lines: [cvData.subtitle],
    font: fontRegular,
    size: 9.5,
    lineHeight: 12,
    afterGap: 4,
    color: COLOR_MUTED,
  });
  drawCenteredLines({
    lines: cvData.contactLines,
    font: fontRegular,
    size: 9,
    lineHeight: 11,
    afterGap: 10,
    color: COLOR_MUTED,
  });

  // ---- SECTION helper ----
  const drawSection = (title: string) => {
    y -= 4;
    ensureSpace(26);
    // Accent line before section
    page.drawRectangle({
      x: MARGIN,
      y: y - 14,
      width: 24,
      height: 2,
      color: COLOR_PRIMARY,
    });
    page.drawText(title.toUpperCase(), {
      x: MARGIN + 32,
      y: y - 14,
      size: 12,
      font: fontBold,
      color: COLOR_PRIMARY,
    });
    y -= 24;
    // faint rule
    page.drawLine({
      start: { x: MARGIN, y },
      end: { x: PAGE_WIDTH - MARGIN, y },
      thickness: 0.4,
      color: COLOR_RULE,
    });
    y -= 10;
  };

  // ---- PROFESSIONAL SUMMARY ----
  drawSection("Professional Summary");
  drawWrappedText({
    text: cvData.summary,
    font: fontRegular,
    size: 10,
    lineHeight: 13.5,
    afterGap: 2,
  });

  // ---- WORK EXPERIENCE ----
  drawSection("Work Experience");

  const drawExperience = (exp: CVExperience) => {
    ensureSpace(34);

    const roleSize = 10.5;
    const dateSize = 9.5;
    const dateWidth = fontBold.widthOfTextAtSize(exp.period, dateSize);

    page.drawText(exp.role, {
      x: MARGIN,
      y: y - roleSize,
      size: roleSize,
      font: fontBold,
      color: COLOR_TEXT,
    });
    page.drawText(exp.period, {
      x: PAGE_WIDTH - MARGIN - dateWidth,
      y: y - dateSize,
      size: dateSize,
      font: fontRegular,
      color: COLOR_MUTED,
    });
    y -= 14;

    const locationText = exp.location ? `${exp.company}, ${exp.location}` : exp.company;
    drawWrappedText({
      text: locationText,
      font: fontRegular,
      size: 9,
      color: COLOR_PRIMARY,
      lineHeight: 11,
      afterGap: 3,
    });

    for (const bullet of exp.bullets) {
      const indent = 14;
      const lines = wrapText(bullet, fontRegular, 9.5, CONTENT_WIDTH - indent);
      const lh = 12.5;
      ensureSpace(lines.length * lh + 2);
      // bullet dot
      page.drawCircle({
        x: MARGIN + 5,
        y: y - 5,
        size: 1.8,
        color: COLOR_PRIMARY,
      });
      for (const line of lines) {
        page.drawText(line, {
          x: MARGIN + indent,
          y: y - 9.5,
          size: 9.5,
          font: fontRegular,
          color: COLOR_TEXT,
        });
        y -= lh;
      }
      y -= 2;
    }
    y -= 4;
  };

  for (const exp of cvData.experiences) {
    drawExperience(exp);
  }

  // ---- KEY PROJECTS ----
  drawSection("Key Projects");

  for (const project of cvData.projects) {
    ensureSpace(28);
    page.drawText(project.title, {
      x: MARGIN,
      y: y - 10,
      size: 10,
      font: fontBold,
      color: COLOR_TEXT,
    });
    y -= 12;
    drawWrappedText({
      text: project.tech,
      font: fontRegular,
      size: 8.5,
      color: COLOR_PRIMARY,
      lineHeight: 10,
      afterGap: 2,
    });
    drawWrappedText({
      text: project.description,
      font: fontRegular,
      size: 9.5,
      lineHeight: 12,
      afterGap: 4,
    });
  }

  // ---- EDUCATION ----
  drawSection("Education");
  for (const edu of cvData.education) {
    ensureSpace(26);
    const dateWidth = fontRegular.widthOfTextAtSize(edu.period, 9);
    page.drawText(edu.degree, {
      x: MARGIN,
      y: y - 10.5,
      size: 10.5,
      font: fontBold,
      color: COLOR_TEXT,
    });
    page.drawText(edu.period, {
      x: PAGE_WIDTH - MARGIN - dateWidth,
      y: y - 9,
      size: 9,
      font: fontRegular,
      color: COLOR_MUTED,
    });
    y -= 14;
    drawWrappedText({
      text: edu.school,
      font: fontRegular,
      size: 9,
      color: COLOR_PRIMARY,
      lineHeight: 11,
      afterGap: 3,
    });
    if (edu.highlights) {
      for (const h of edu.highlights) {
        drawWrappedText({
          text: `- ${h}`,
          font: fontRegular,
          size: 9.5,
          x: MARGIN + 10,
          width: CONTENT_WIDTH - 10,
          lineHeight: 12,
          afterGap: 1,
        });
      }
    }
  }

  // ---- SKILLS ----
  drawSection("Skills");
  ensureSpace(cvData.skills.length * 14 + 4);
  for (const skill of cvData.skills) {
    // Category label
    const catWidth = fontBold.widthOfTextAtSize(skill.category + ": ", 9);
    page.drawText(skill.category + ": ", {
      x: MARGIN,
      y: y - 9,
      size: 9,
      font: fontBold,
      color: COLOR_TEXT,
    });
    // Items
    drawWrappedText({
      text: skill.items,
      font: fontRegular,
      size: 9,
      x: MARGIN + catWidth,
      width: CONTENT_WIDTH - catWidth,
      color: COLOR_MUTED,
      lineHeight: 11,
      afterGap: 2,
    });
  }

  // ---- LANGUAGES ----
  drawSection("Languages");
  for (const lang of cvData.languages) {
    drawWrappedText({
      text: `${lang.lang} — ${lang.level}`,
      font: fontRegular,
      size: 9.5,
      afterGap: 2,
    });
  }

  const bytes = await pdfDoc.save();
  return Buffer.from(bytes);
}
