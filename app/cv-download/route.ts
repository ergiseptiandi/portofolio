import { generateCvPdf } from "@/lib/cv-pdf";

export const runtime = "nodejs";

export async function GET() {
  const pdfBuffer = await generateCvPdf();

  return new Response(new Uint8Array(pdfBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Erghi-Septiandi-Putra-CV.pdf"',
      "Cache-Control": "no-store",
      "Content-Length": pdfBuffer.length.toString(),
    },
  });
}
