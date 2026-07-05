type PdfTableColumn = {
  label: string;
  width: number;
};

function escapePdfText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function text(value: string, x: number, y: number, size = 10, font = "F1") {
  return `BT /${font} ${size} Tf ${x} ${y} Td (${escapePdfText(value)}) Tj ET`;
}

function line(x1: number, y1: number, x2: number, y2: number) {
  return `${x1} ${y1} m ${x2} ${y2} l S`;
}

function rect(x: number, y: number, width: number, height: number, fill = false) {
  return `${x} ${y} ${width} ${height} re ${fill ? "f" : "S"}`;
}

function wrap(value: string, maxChars: number) {
  const words = value.split(/\s+/);
  const lines: string[] = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

function createPdf(stream: string) {
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return Buffer.from(pdf, "ascii");
}

export function createRoutinePdf({
  title,
  subtitle,
  columns,
  rows,
  footer
}: {
  title: string;
  subtitle: string;
  columns: PdfTableColumn[];
  rows: string[][];
  footer: string;
}) {
  const content: string[] = [];
  const startX = 38;
  const tableWidth = columns.reduce((total, column) => total + column.width, 0);
  let y = 752;

  content.push("0.02 w");
  content.push("0 0 0 rg");
  content.push("0 0 0 RG");
  content.push(text(title, startX, y, 20, "F2"));
  y -= 20;
  content.push(text(subtitle.slice(0, 96), startX, y, 9));
  y -= 28;

  content.push("0.03 0.11 0.27 rg");
  content.push(rect(startX, y - 22, tableWidth, 28, true));
  content.push("1 1 1 rg");
  content.push("0.85 0.89 0.95 RG");

  let x = startX;
  columns.forEach((column) => {
    content.push(text(column.label, x + 6, y - 10, 8.5, "F2"));
    content.push(line(x, y + 6, x, y - 22));
    x += column.width;
  });
  content.push(line(startX + tableWidth, y + 6, startX + tableWidth, y - 22));
  content.push(line(startX, y + 6, startX + tableWidth, y + 6));
  content.push(line(startX, y - 22, startX + tableWidth, y - 22));
  content.push("0 0 0 rg");
  content.push("0.75 0.79 0.86 RG");
  y -= 22;

  rows.forEach((row, rowIndex) => {
    const wrappedCells = row.map((cell, index) => {
      const chars = Math.max(10, Math.floor(columns[index].width / 5.2));
      return wrap(cell, chars);
    });
    const rowLines = Math.max(...wrappedCells.map((cell) => cell.length));
    const rowHeight = Math.max(28, rowLines * 11 + 14);

    if (rowIndex % 2 === 0) {
      content.push("0.95 0.97 1 rg");
      content.push(rect(startX, y - rowHeight, tableWidth, rowHeight, true));
    }

    content.push("0 0 0 rg");
    content.push("0.75 0.79 0.86 RG");
    x = startX;
    columns.forEach((column, colIndex) => {
      content.push(line(x, y, x, y - rowHeight));
      wrappedCells[colIndex].forEach((lineText, lineIndex) => {
        content.push(text(lineText, x + 6, y - 15 - lineIndex * 11, 8.6, colIndex === 0 ? "F2" : "F1"));
      });
      x += column.width;
    });
    content.push(line(startX + tableWidth, y, startX + tableWidth, y - rowHeight));
    content.push(line(startX, y - rowHeight, startX + tableWidth, y - rowHeight));
    y -= rowHeight;
  });

  content.push("0 0 0 rg");
  content.push(text(footer.slice(0, 110), startX, 42, 8));
  return createPdf(content.join("\n"));
}
