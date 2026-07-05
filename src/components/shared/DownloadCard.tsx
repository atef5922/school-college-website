import { Download, FileText } from "lucide-react";
import type { DownloadItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DownloadCard({ item }: { item: DownloadItem }) {
  return (
    <Card className="flex h-full flex-col p-5 hover:-translate-y-1 hover:border-gold-300 hover:shadow-premium">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-md bg-navy-900 text-gold-500">
          <FileText className="h-6 w-6" />
        </div>
        <Badge tone="green">{item.fileType}</Badge>
      </div>
      <h3 className="mt-5 font-display text-lg font-extrabold text-navy-900">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        {item.category} - {item.size}
      </p>
      <Button asChild variant="outline" className="mt-5 w-full">
        <a href={`/api/downloads/${item.id}`} download>
          <Download className="h-4 w-4" />
          Download
        </a>
      </Button>
    </Card>
  );
}
