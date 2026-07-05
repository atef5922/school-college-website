import { downloads } from "@/data/downloads";
import { examRoutine, classRoutine } from "@/data/routines";
import { siteInfo } from "@/data/site";
import { createRoutinePdf } from "@/lib/pdf";

function slugToFileName(value: string) {
  return `${value.replace(/[^a-z0-9-]/gi, "-").toLowerCase()}.pdf`;
}

function documentPayload(id: string) {
  if (id === "class-routine") {
    return {
      columns: [
        { label: "Day", width: 74 },
        { label: "1st Period", width: 86 },
        { label: "2nd Period", width: 86 },
        { label: "3rd Period", width: 86 },
        { label: "4th Period", width: 86 },
        { label: "5th Period", width: 116 }
      ],
      rows: classRoutine
    };
  }

  if (id === "exam-routine") {
    return {
      columns: [
        { label: "Date", width: 82 },
        { label: "Subject", width: 210 },
        { label: "Time", width: 140 },
        { label: "Venue", width: 98 }
      ],
      rows: examRoutine
    };
  }

  const item = downloads.find((download) => download.id === id);
  return {
    columns: [
      { label: "Field", width: 130 },
      { label: "Details", width: 400 }
    ],
    rows: [
      ["Document", item?.title ?? "Academic Document"],
      ["Category", item?.category ?? "General"],
      ["Description", item?.description ?? "Prepared for school document download."],
      ["File Type", item?.fileType ?? "PDF"],
      ["File Size", item?.size ?? "Generated PDF"]
    ]
  };
}

export function GET(request: Request) {
  const id = new URL(request.url).pathname.split("/").filter(Boolean).pop() ?? "document";
  const item = downloads.find((download) => download.id === id);
  const title = item?.title ?? (id === "class-routine" ? "Class Routine" : "Exam Routine");
  const payload = documentPayload(id);
  const pdf = createRoutinePdf({
    title,
    subtitle: `${siteInfo.name} | ${siteInfo.location}`,
    columns: payload.columns,
    rows: payload.rows,
    footer: `Contact: ${siteInfo.phone} | ${siteInfo.email}`
  });

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${slugToFileName(id)}"`,
      "Cache-Control": "no-store, max-age=0"
    }
  });
}
