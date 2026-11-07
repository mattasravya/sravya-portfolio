import fs from 'fs';

// Generate a clean text-based PDF for Matta Sravya's Resume
function generateResumePdf() {
  const content = `BT
/F1 22 Tf
50 780 Td
(MATTA SRAVYA) Tj
/F2 11 Tf
0 -18 Td
(Full-Stack Developer | Java Developer | AI/ML Enthusiast) Tj
/F3 9 Tf
0 -15 Td
(Email: mattasravya2106@gmail.com | Phone: +91 9381509488 | Cuddapah, Andhra Pradesh, India) Tj
0 -12 Td
(LinkedIn: https://www.linkedin.com/in/matta-sravya/ | GitHub: https://github.com/mattasravya/) Tj

/F1 13 Tf
0 -26 Td
(EDUCATION) Tj
/F2 10 Tf
0 -15 Td
(Sri Venkateswara College of Engineering (SVCE), Tirupati) Tj
/F3 9 Tf
0 -13 Td
(B.Tech in Computer Science and Engineering | CGPA: 9.20 / 10.0 | 2023 - 2027) Tj
/F2 10 Tf
0 -16 Td
(Sri Chaitanya Junior College, Tirupati) Tj
/F3 9 Tf
0 -13 Td
(Intermediate (MPC) | Percentage: 93.1% | 2021 - 2023) Tj

/F1 13 Tf
0 -26 Td
(TECHNICAL SKILLS) Tj
/F2 9.5 Tf
0 -14 Td
(Programming Languages:) Tj
/F3 9 Tf
120 0 Td
(Java, Python, JavaScript) Tj
-120 -13 Td
/F2 9.5 Tf
(Frontend Technologies:) Tj
/F3 9 Tf
120 0 Td
(HTML, CSS, React.js, Tailwind CSS) Tj
-120 -13 Td
/F2 9.5 Tf
(Backend & Frameworks:) Tj
/F3 9 Tf
120 0 Td
(JDBC, Spring Boot, Hibernate, REST APIs, Node.js, Express.js) Tj
-120 -13 Td
/F2 9.5 Tf
(Databases:) Tj
/F3 9 Tf
120 0 Td
(MySQL, MongoDB) Tj
-120 -13 Td
/F2 9.5 Tf
(Developer Tools:) Tj
/F3 9 Tf
120 0 Td
(Git, GitHub, Postman, GitHub Copilot, Streamlit, ServiceNow) Tj
-120 0 Td

/F1 13 Tf
0 -26 Td
(INTERNSHIP EXPERIENCE) Tj
/F2 10 Tf
0 -15 Td
(Full Stack Developer Virtual Internship | MERN Stack) Tj
/F3 9 Tf
0 -13 Td
(SmartBridge in collaboration with APSCHE | Duration: June 2026 - August 2026) Tj
0 -12 Td
(- Engineered dynamic web applications leveraging MongoDB, Express.js, React.js, and Node.js) Tj
0 -12 Td
(- Implemented RESTful APIs, asynchronous data flows, and secure CRUD operations) Tj

/F2 10 Tf
0 -16 Td
(ServiceNow Developer Virtual Internship) Tj
/F3 9 Tf
0 -13 Td
(ServiceNow University & SmartBridge | Duration: January 2026 - March 2026) Tj
0 -12 Td
(- Customized ServiceNow platform using Client Scripts, UI Policies, and Workflow Automation) Tj
0 -12 Td
(- Gained hands-on experience in Incident Management, Service Catalog, and ITSM frameworks) Tj

/F2 10 Tf
0 -16 Td
(Competitive Programming & Algorithmic Techniques Internship) Tj
/F3 9 Tf
0 -13 Td
(byteXL at SVCE Tirupati | Duration: May 2026 - July 2026) Tj
0 -12 Td
(- Practiced advanced data structures, algorithmic optimization, and competitive coding) Tj

/F1 13 Tf
0 -26 Td
(FEATURED PROJECTS) Tj
/F2 10 Tf
0 -15 Td
(1. AI Resume Analyzer | Python, NLP, Machine Learning, TF-IDF, Streamlit) Tj
/F3 9 Tf
0 -13 Td
(- Developed an intelligent resume screening tool parsing resumes and matching them with job descriptions) Tj
0 -12 Td
(- Leveraged TF-IDF vectorization and cosine similarity to identify skill gaps and generate actionable feedback) Tj

/F2 10 Tf
0 -16 Td
(2. Student Database Management System | Java, MySQL, JDBC) Tj
/F3 9 Tf
0 -13 Td
(- Built a full-fledged student information system handling academic records, enrollment, and profiles) Tj
0 -12 Td
(- Integrated relational database with robust JDBC connections, prepared statements, and transactional safety) Tj

/F1 13 Tf
0 -26 Td
(CERTIFICATIONS) Tj
/F3 9 Tf
0 -14 Td
(- AWS Cloud Computing - Certificate of Participation (APSSDC Training, Oct 2024)) Tj
0 -12 Td
(- Cisco Certified Network Associate (CCNA) - Introduction to Networks (Apr 2026)) Tj
0 -12 Td
(- ServiceNow Virtual Internship Completion Certificate (ServiceNow University, Apr 2026)) Tj
ET`;

  const objects = [];
  objects.push(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`);
  objects.push(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`);
  objects.push(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R /F3 7 0 R >> >> >>\nendobj\n`);
  objects.push(`4 0 obj\n<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream\nendobj\n`);
  objects.push(`5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`);
  objects.push(`6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`);
  objects.push(`7 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`);

  let pdf = `%PDF-1.4\n%âãÏÓ\n`;
  const offsets = [];
  let currentOffset = Buffer.byteLength(pdf, 'latin1');
  const buffers = [Buffer.from(pdf, 'latin1')];

  for (let i = 0; i < objects.length; i++) {
    offsets.push(currentOffset);
    const buf = Buffer.from(objects[i], 'latin1');
    buffers.push(buf);
    currentOffset += buf.length;
  }

  const xrefOffset = currentOffset;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets) {
    xref += offset.toString().padStart(10, '0') + ' 00000 n \n';
  }
  xref += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  buffers.push(Buffer.from(xref, 'latin1'));

  fs.writeFileSync("C:/Users/matta/.gemini/antigravity/scratch/sravya-portfolio/public/resume.pdf", Buffer.concat(buffers));
  console.log("Successfully generated public/resume.pdf!");
}

generateResumePdf();
