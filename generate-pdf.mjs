import fs from 'fs';

const certImg = fs.readFileSync("C:/Users/matta/.gemini/antigravity/scratch/sravya-portfolio/public/certificates/aws-cloud-computing.png");
console.log("Size:", certImg.length, "Magic:", certImg.subarray(0, 4).toString('hex'));

// If it starts with ffd8ffe0 or ffd8ffe1, it is a valid JPEG!
// Let's create a pure PDF embedding this JPEG image directly using DCTDecode
function createPdfFromJpeg(jpegBuffer, width = 842, height = 595) { // A4 Landscape
  // Build basic PDF 1.4
  const objects = [];
  
  // Object 1: Catalog
  objects.push(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`);
  
  // Object 2: Pages
  objects.push(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`);
  
  // Object 3: Page (A4 Landscape: 842 x 595)
  objects.push(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Contents 4 0 R /Resources << /XObject << /Im1 5 0 R >> >> >>\nendobj\n`);
  
  // Object 4: Contents (Draw image to fit page)
  const streamContent = `q\n${width} 0 0 ${height} 0 0 cm\n/Im1 Do\nQ\n`;
  objects.push(`4 0 obj\n<< /Length ${Buffer.byteLength(streamContent)} >>\nstream\n${streamContent}endstream\nendobj\n`);
  
  // Object 5: Image XObject with /DCTDecode
  const imgHeader = `5 0 obj\n<< /Type /XObject /Subtype /Image /Width 1024 /Height 724 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBuffer.length} >>\nstream\n`;
  const imgFooter = `\nendstream\nendobj\n`;
  
  const headerBuf = Buffer.from(imgHeader, 'ascii');
  const footerBuf = Buffer.from(imgFooter, 'ascii');
  const obj5Buf = Buffer.concat([headerBuf, jpegBuffer, footerBuf]);

  // Assemble full PDF
  let pdf = `%PDF-1.4\n%âãÏÓ\n`;
  const offsets = [];
  let currentOffset = Buffer.byteLength(pdf, 'latin1');
  
  const buffers = [Buffer.from(pdf, 'latin1')];

  for (let i = 0; i < 4; i++) {
    offsets.push(currentOffset);
    const buf = Buffer.from(objects[i], 'latin1');
    buffers.push(buf);
    currentOffset += buf.length;
  }
  
  offsets.push(currentOffset);
  buffers.push(obj5Buf);
  currentOffset += obj5Buf.length;

  const xrefOffset = currentOffset;
  let xref = `xref\n0 6\n0000000000 65535 f \n`;
  for (const offset of offsets) {
    xref += offset.toString().padStart(10, '0') + ' 00000 n \n';
  }
  xref += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  
  buffers.push(Buffer.from(xref, 'latin1'));
  return Buffer.concat(buffers);
}

const pdfBuf = createPdfFromJpeg(certImg);
fs.writeFileSync("C:/Users/matta/.gemini/antigravity/scratch/sravya-portfolio/public/certificates/aws-cloud-computing.pdf", pdfBuf);
console.log("Successfully generated aws-cloud-computing.pdf! Size:", pdfBuf.length);
