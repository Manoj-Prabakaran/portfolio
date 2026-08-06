/* ============================================================
   EDIT EVERYTHING HERE.
   This is the only file you should need to touch to update your
   name, bio, skills, experience, projects, resume link, or
   contact details. Every page imports from this one object.
============================================================= */

export const DATA = {
  eyebrow: "Available for opportunities",
  name: "Manoj Prabakaran Chelliah",
  role: "Software Engineer",

  // Longer bio shown on the Home page.
  bio: "Full-stack engineer with 3+ years of experience building products end-to-end — from pixel-considered React interfaces to the Node.js APIs and databases running underneath them. I enjoy owning a feature from design through deployment, and lean toward clean, maintainable code over quick hacks.",

  stats: [
    { num: "3+", label: "Years experience" },
    { num: "B.E.", label: "Engineering degree" },
  ],

  // Buttons on the Home page. type: "primary" or "ghost". Internal links start with "/".
  ctas: [
    { label: "View Projects", href: "/projects", type: "primary" },
    { label: "Resume", href: "/resume", type: "ghost" },
    { label: "Contact", href: "/contact", type: "ghost" },
  ],

  // The 3 stack "layers" shown as the signature visual on the Home page.
  stackLayers: [
    { layer: "frontend", title: "Frontend", tech: "HTML · CSS · JavaScript · TypeScript · React · Redux" },
    { layer: "backend", title: "Backend", tech: "Node.js · Express · RESTful APIs" },
    { layer: "database", title: "Database", tech: "MongoDB" },
  ],

  // Single flattened skills list used in the About section.
  // Edit this array to add or remove skills shown on the About page.
  // Skills list with small descriptive icons (emoji used for lightweight icons).
  // Each item has `id`, `name`, and `icon`. Edit `name` to match project tags
  // when you want icons to appear on project cards.
  skills: [
    { id: 'html', name: 'HTML', icon: '📄', image: null },
    { id: 'css', name: 'CSS', icon: '🎨', image: null },
    { id: 'javascript', name: 'JavaScript', icon: '⚡', image: null },
    { id: 'typescript', name: 'TypeScript', icon: '🟦', image: null },
    { id: 'react', name: 'React', icon: '⚛️', image: null },
    { id: 'redux', name: 'Redux', icon: '🔁', image: null },
    { id: 'node', name: 'Node.js', icon: '⬢', image: null },
    { id: 'express', name: 'Express', icon: '🚂', image: null },
    { id: 'rest', name: 'RESTful APIs', icon: '🔗', image: null },
    { id: 'mongodb', name: 'MongoDB', icon: '🍃', image: null },
  ],

  // Timeline on the Experience page — most recent first.
  // EDIT: fill in real company/institution names when ready.
  timeline: [
    {
      title: 'Associate - Frontend Engineer',
      company: 'Cognizant',
      range: 'Jan 2023 — Feb 2026',
      detail: 'Developing full-stack applications using React and Node.js. Collaborating in Agile teams to deliver scalable, high-performance solutions.',
      tags: ['React','Redux', 'Node.js', 'MongoDB', 'Agile'],
      icon: '💼',
    },
  ],

  // Projects page — add/remove cards freely.
  projects: [
    {
      name: "My Chef",
      color: "#7C4DFF",
      desc: "AI recipe generator that suggests recipes from whatever ingredients you have, powered by the Gemini API through a serverless function so the API key never touches the browser.",
      // Add a thumbnail image path (optional). Place files in `public/images/` and set the path like "/images/my-chef.jpg".
      image: null,
      imageAlt: "My Chef — recipe generator",
      tags: ["React", "Gemini API", "Netlify Functions"],
      live: "https://my-chef-gemini.netlify.app/",
      code: "https://github.com/Manoj-Prabakaran/my-chef",
    },
    {
      name: "My Blogosphere",
      color: "#FF6B5E",
      desc: "Full-stack blogging platform with JWT authentication, bcrypt password hashing, and image uploads, built on a React frontend and an Express/MongoDB backend.",
      // Example: `image: '/images/my-blogosphere.jpg'`
      image: null,
      imageAlt: "My Blogosphere — blogging platform",
      tags: ["React", "Express", "MongoDB", "JWT", "Tailwind.css"],
      live: "https://my-blogosphere.netlify.app/",
      code: "https://github.com/Manoj-Prabakaran/my_blog",
    },
    {
      name: "Taskmate",
      color: "#10B3AE",
      desc: "Task management app for organizing to-dos and tracking progress day to day.",
      // If you don't have images yet, keep `null`. When you add images, the Projects page will render them automatically.
      image: null,
      imageAlt: "Taskmate — task management app",
      tags: ["React", "Tailwindcss.css"],
      live: "https://my-task-mate.netlify.app/",
      code: "https://github.com/Manoj-Prabakaran/taskmate",
    },
    {
      name: "Shopping Cart",
      color: "#10B3AE",
      desc: "Developed a responsive shopping cart application using HTML, CSS, JavaScript, React, and Redux. The project includes user-friendly interfaces for browsing, adding, and managing products in the cart.",
      // If you don't have images yet, keep `null`. When you add images, the Projects page will render them automatically.
      image: null,
      imageAlt: "Shopping cart",
      tags: ["React","Redux"],
      live: null,
      code: "https://github.com/Manoj-Prabakaran/shoppingcart",
    },
  ],

  // Resume page. Put your PDF in `public/assets/resume.pdf`
  // and this page will render it directly from the assets folder.
  resume: {
    url: `${import.meta.env.BASE_URL}/assets/resume.pdf`,
    filename: "manojprabakaranchelliah_resume.pdf",
  },

  // Contact page rows. Leave as null to show a placeholder until you fill it in.
  contactDetails: {
    email: "manoj7prabakaran@gmail.com",    // e.g. "manoj@example.com"
    phone: "+91 8072634113",    // e.g. "+91 90000 00000"
    location: "Chennai, India", // e.g. "Chennai, India"
  },

  // Social links used in the nav footer and Contact page.
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Manoj-Prabakaran" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/manojprabakaranchelliah" },
  ],
};
