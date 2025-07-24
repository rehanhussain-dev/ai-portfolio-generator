import JSZip from "jszip";
import { saveAs } from "file-saver";

export async function exportMarkdown(markdown) {
  const zip = new JSZip();
  zip.file("portfolio.md", markdown);

  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, "portfolio.zip");
}