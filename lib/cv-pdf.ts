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
  bullets: string[];
};

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN = 44;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const COLOR_TEXT = rgb(0.06, 0.06, 0.06);
const COLOR_MUTED = rgb(0.28, 0.28, 0.28);
const COLOR_RULE = rgb(0.55, 0.55, 0.55);

const cvData = {
  name: "Erghi Septiandi Putra",
  title: "Full Stack Developer | Backend Systems | Mobile Apps | DevOps",
  contactLines: [
    "Batam, Indonesia | ergiputra321@gmail.com | +62 852 6391 2536",
    "portfolio.paidev.my.id | github.com/ergiseptiandi | linkedin.com/in/ergi-septiandi-p-05b896275",
  ],
  summary:
    "Full Stack Developer with 3+ years of experience delivering production web applications, mobile apps, backend services, and deployment workflows. Strong hands-on experience across Laravel, Next.js, NestJS, Flutter, Expo, PostgreSQL, Docker, and CI/CD, with a focus on internal systems, operational tools, responsive user experience, and reliable business process automation.",
  experiences: [
    {
      role: "Full Stack Developer and DevOps Engineer",
      company: "PT Persero Batam",
      location: "Batam, Indonesia",
      period: "February 2025 - Present",
      bullets: [
        "Delivered 5+ internal production applications across HR, operations, logistics, and event workflows using Laravel, Expo, Flutter, Docker, and GitLab CI/CD.",
        "Built an HRIS platform covering payroll, PPh21 tax, BPJS, fingerprint attendance, overtime management, email payslips, and a mobile app with GPS attendance, KPI dashboard, and in-app updates.",
        "Developed a meeting room management system with real-time room status, scheduling, participant planning, meal tracking, and WhatsApp notifications.",
        "Automated deployment and recovery workflows using GitLab CI/CD, GitHub Actions, Docker restart policies, and Nginx Proxy Manager.",
        "Migrated Odoo from cloud infrastructure to on-premise server without data loss and delivered operational mobile tools including airport cargo QR workflows.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Batam Toteles Application",
      location: "Batam, Indonesia",
      period: "February 2025",
      bullets: [
        "Built an ERP-style Laravel application covering purchase requests, purchase orders, delivery orders, production flow, and UMKM consignment management.",
        "Implemented role-based access control, WhatsApp Gateway notifications, and operational reporting features.",
      ],
    },
    {
      role: "Full Stack Developer (Laravel and Flutter)",
      company: "Candu Roti Bakar",
      location: "Batam, Indonesia",
      period: "September 2024 - October 2024",
      bullets: [
        "Built a full-stack POS and operational system for stock management, sales reporting, profit and loss, and COGS tracking.",
        "Developed an Android POS application with Midtrans QRIS integration and real-time sales analytics.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "PT Jala Armada Rinjani",
      location: "Remote",
      period: "Project-based",
      bullets: [
        "Built an attendance application with GPS-based clock-in and clock-out, cross-day attendance support, leave requests, and admin monitoring.",
        "Delivered employee and admin workflows for attendance history, approvals, and operational reporting.",
      ],
    },
    {
      role: "Backend Developer (Internship)",
      company: "Folxcode",
      location: "Remote",
      period: "2023 - 2024",
      bullets: [
        "Developed backend systems for multiple client products including HappyBeauty, Tritunas, and Grand Batam Mall using NestJS and PostgreSQL.",
        "Built the Liszthoven Music School platform with 50+ features including billing, student management, and radius-based attendance.",
      ],
    },
    {
      role: "Full Stack Developer (Internship)",
      company: "Tax Center - PBL Project",
      location: "Batam State Polytechnic",
      period: "August 2022 - December 2022",
      bullets: [
        "Improved tax calculation accuracy, strengthened session security, and enhanced performance for the e-filing tax system.",
        "Implemented recurring payment support with Virtual Account integration.",
      ],
    },
  ] satisfies CVExperience[],
  skills: [
    "Languages: PHP, JavaScript, TypeScript, Dart, SQL, HTML, CSS",
    "Frameworks: Laravel, Next.js, React, NestJS, Node.js, Flutter, Expo, Tailwind CSS, Bootstrap",
    "Databases and Infrastructure: PostgreSQL, MySQL, Oracle Database, Docker, Nginx, Nginx Proxy Manager, GitLab CI/CD, GitHub Actions, Cloudflare",
    "Integrations and Tools: REST APIs, WebSockets, Midtrans, QRIS, Virtual Account, WhatsApp API, Git, GitLab, GitHub, Postman, Figma",
  ],
  education: [
    {
      degree: "D3 - Informatics Engineering",
      school: "Batam State Polytechnic (Politeknik Negeri Batam)",
      period: "2022 - 2025",
      bullets: [
        "Focused on software engineering, web development, mobile development, and database systems.",
        "Completed Project-Based Learning through the Tax Center e-filing system.",
      ],
    },
  ] satisfies CVEducation[],
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

  if (current) {
    lines.push(current);
  }

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
    y = PAGE_HEIGHT - MARGIN;
  };

  const ensureSpace = (height: number) => {
    if (y - height < MARGIN) {
      addPage();
    }
  };

  const drawCenteredLines = ({
    lines,
    font,
    size,
    color = COLOR_TEXT,
    lineHeight = size * 1.3,
    afterGap = 0,
  }: {
    lines: string[];
    font: PDFFont;
    size: number;
    color?: ReturnType<typeof rgb>;
    lineHeight?: number;
    afterGap?: number;
  }) => {
    ensureSpace(lines.length * lineHeight + afterGap);

    for (const line of lines) {
      const width = font.widthOfTextAtSize(line, size);
      page.drawText(line, {
        x: (PAGE_WIDTH - width) / 2,
        y: y - size,
        size,
        font,
        color,
      });
      y -= lineHeight;
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
    lineHeight = size * 1.35,
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
    const lines = wrapText(text, font, size, width);
    ensureSpace(lines.length * lineHeight + afterGap);

    for (const line of lines) {
      page.drawText(line, {
        x,
        y: y - size,
        size,
        font,
        color,
      });
      y -= lineHeight;
    }

    y -= afterGap;
  };

  const drawSectionHeading = (title: string) => {
    y -= 8;
    ensureSpace(28);
    page.drawText(title.toUpperCase(), {
      x: MARGIN,
      y: y - 13,
      size: 13,
      font: fontBold,
      color: COLOR_TEXT,
    });
    y -= 18;
    page.drawLine({
      start: { x: MARGIN, y },
      end: { x: PAGE_WIDTH - MARGIN, y },
      thickness: 0.8,
      color: COLOR_RULE,
    });
    y -= 10;
  };

  const drawBullet = (text: string, indent = 12) => {
    drawWrappedText({
      text: `- ${text}`,
      font: fontRegular,
      size: 10,
      x: MARGIN + indent,
      width: CONTENT_WIDTH - indent,
      lineHeight: 13.5,
      afterGap: 2,
    });
  };

  const drawExperience = (experience: CVExperience) => {
    ensureSpace(32);

    const roleSize = 11;
    const dateSize = 10;
    const dateWidth = fontBold.widthOfTextAtSize(experience.period, dateSize);

    page.drawText(experience.role, {
      x: MARGIN,
      y: y - roleSize,
      size: roleSize,
      font: fontBold,
      color: COLOR_TEXT,
    });

    page.drawText(experience.period, {
      x: PAGE_WIDTH - MARGIN - dateWidth,
      y: y - dateSize,
      size: dateSize,
      font: fontBold,
      color: COLOR_TEXT,
    });

    y -= 16;

    drawWrappedText({
      text: experience.location
        ? `${experience.company}, ${experience.location}`
        : experience.company,
      font: fontBold,
      size: 10,
      color: COLOR_MUTED,
      lineHeight: 12.5,
      afterGap: 3,
    });

    for (const bullet of experience.bullets) {
      drawBullet(bullet);
    }

    y -= 4;
  };

  const drawEducation = (education: CVEducation) => {
    ensureSpace(28);

    const dateWidth = fontBold.widthOfTextAtSize(education.period, 10);

    page.drawText(education.degree, {
      x: MARGIN,
      y: y - 11,
      size: 11,
      font: fontBold,
      color: COLOR_TEXT,
    });

    page.drawText(education.period, {
      x: PAGE_WIDTH - MARGIN - dateWidth,
      y: y - 10,
      size: 10,
      font: fontBold,
      color: COLOR_TEXT,
    });

    y -= 16;

    drawWrappedText({
      text: education.school,
      font: fontBold,
      size: 10,
      color: COLOR_MUTED,
      lineHeight: 12.5,
      afterGap: 3,
    });

    for (const bullet of education.bullets) {
      drawBullet(bullet);
    }
  };

  drawCenteredLines({
    lines: [cvData.name],
    font: fontBold,
    size: 24,
    lineHeight: 28,
    afterGap: 2,
  });

  drawCenteredLines({
    lines: [cvData.title],
    font: fontBold,
    size: 11,
    color: COLOR_MUTED,
    lineHeight: 14,
    afterGap: 4,
  });

  drawCenteredLines({
    lines: cvData.contactLines,
    font: fontRegular,
    size: 9.5,
    color: COLOR_MUTED,
    lineHeight: 12,
    afterGap: 8,
  });

  drawSectionHeading("Professional Summary");
  drawWrappedText({
    text: cvData.summary,
    font: fontRegular,
    size: 10.5,
    lineHeight: 14,
  });

  drawSectionHeading("Work Experience");
  for (const experience of cvData.experiences) {
    drawExperience(experience);
  }

  drawSectionHeading("Education");
  for (const education of cvData.education) {
    drawEducation(education);
  }

  drawSectionHeading("Skills");
  for (const skillLine of cvData.skills) {
    drawBullet(skillLine, 0);
  }

  const bytes = await pdfDoc.save();
  return Buffer.from(bytes);
}
