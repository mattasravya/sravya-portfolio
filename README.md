# Matta Sravya — Personal Developer Portfolio (Pixion-Inspired)

A premium, production-ready developer portfolio for **Matta Sravya** (Full-Stack Developer, Java Developer, and AI/ML Enthusiast) built with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Inspired by the **Pixion Personal Portfolio** aesthetic, featuring a dark forest-green palette, vibrant lime-green accents, rounded card layouts, smooth micro-interactions, an interactive Certificate Gallery with real credentials, and recruiter-focused resume downloads.

---

## 🎨 Visual Identity & Color Palette

- **Primary Background**: `#0B1F1C` (Dark forest green)
- **Secondary Background**: `#102D28` (Deep forest teal)
- **Card Background**: `#163831` (Elevated card surface)
- **Card Hover / Elevation**: `#1A423A` (Subtle glowing highlight)
- **Accent Lime**: `#B8FF65` (Vibrant action buttons, badges & active states)
- **Accent Mint**: `#7DE5A1` (Soft secondary highlights)
- **Primary Text**: `#FFFFFF` (Headings)
- **Secondary Text**: `#B6C8C1` (Readable grey-green body)
- **Border**: `#294B42` (Subtle borders)

---

## 🚀 Key Features

1. **Hero Presentation**:
   - Two-column hero layout with animated role rotator: *Full-Stack Developer*, *Java Developer*, *Software Developer*, *AI/ML Enthusiast*.
   - **Real Professional Portrait**: Matta Sravya's actual photo presented inside a rounded rectangular frame with lime-green accent ring, floating tech pills (`React.js`, `Java & Spring`, `AI/ML`), and entrance animations.
   - **3 Count-Up Statistics**: `9.20 CGPA`, `02 Featured Projects`, `02 Internship Experiences`.

2. **About Me**:
   - Two-column layout integrating Matta Sravya's actual photo and academic details from Sri Venkateswara College of Engineering (SVCE).
   - Personal credentials grid with direct contact links.

3. **Skills & Technologies**:
   - Grouped into: *Programming*, *Frontend*, *Backend & Frameworks*, *Databases*, and *Tools & Platforms*.
   - Filterable pill bar.
   - Distinction between **Core Skills** and **Internship Exposure**.

4. **Featured Projects**:
   - **01. AI Resume Analyzer**: Python, NLP, Machine Learning, TF-IDF, Streamlit. Includes a realistic interactive Streamlit UI mockup with TF-IDF match score and keyword gap analysis.
   - **02. Student Database Management System**: Java, MySQL, JDBC. Features an enterprise database records preview with JDBC connection indicator and SQL queries.
   - Interactive deep-dive modal for each project.

5. **Certifications & Achievements Gallery (Data-Driven)**:
   - Dedicated section powered by `src/data/certificates.js`.
   - Features actual uploaded credentials:
     1. **ServiceNow Virtual Internship Program** (ServiceNow University & SmartBridge)
     2. **Full Stack Developer MERN Stack Internship** (SmartBridge & APSCHE)
     3. **Competitive Programming & Advanced Algorithmic Techniques** (byteXL & SVCE)
     4. **CCNA: Introduction to Networks** (Cisco Networking Academy)
     5. **AWS-Cloud Computing** (APSSDC Certificate of Participation)
   - **Interactive Lightbox Modal**: Click to view high-resolution certificate without cropping, download original files, or open AWS PDF document.

6. **Internship Experience & Education**:
   - Modern vertical timeline with lime-green markers.
   - Education cards for B.Tech CSE (9.20 CGPA) and Intermediate (93.1%).

7. **Contact & Resume System**:
   - Contact form with client-side validation, error states, and automatic mailto integration.
   - Recruiter-ready **Resume Modal** with full preview, print capability, and direct download of `resume.pdf`.

---

## 📁 Project Structure

```
sravya-portfolio/
├── public/
│   ├── certificates/
│   │   ├── aws-cloud-computing.pdf
│   │   ├── aws-cloud-computing.png
│   │   ├── bytexl-internship.png
│   │   ├── cisco-introduction-to-networks.png
│   │   ├── mongodb-mern-internship.png
│   │   └── servicenow-certificate.png
│   ├── favicon.svg
│   ├── profile.png
│   └── resume.pdf
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── profile.png
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ResumeModal.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   ├── certificates.js
│   │   └── portfolioData.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Running Locally

1. Open a terminal and navigate to the project directory:
   ```bash
   cd "C:\Users\matta\.gemini\antigravity\scratch\sravya-portfolio"
   ```

2. Start the Vite development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

3. To build for production:
   ```bash
   npm run build
   ```

4. To preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Install Vercel CLI (optional) or push code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Pixion-inspired portfolio for Matta Sravya"
   git remote add origin https://github.com/mattasravya/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), import your `portfolio` repository.
3. Build command: `npm run build`, Output directory: `dist`.
4. Click **Deploy**.

### Deploy to Netlify
1. Drag and drop the `dist` folder directly onto the [Netlify Drop](https://app.netlify.com/drop) page, OR
2. Connect your GitHub repository with build command `npm run build` and publish directory `dist`.
