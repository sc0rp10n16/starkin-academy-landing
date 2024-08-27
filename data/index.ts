

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Courses", link: "#courses" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Go ahead with your Professional training ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Land Your Dream Job at Leading MNCs",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our Expertise",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Persue Your Dream Job",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to Start Your Learning Journey with Us?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const courses = [
  {
    id: 1,
    title: "Cyber Security: Beginner to PRO",
    des: "Cyber Security: Beginner to PRO takes you from the fundamentals to advanced techniques in protecting digital assets. Learn to identify threats, secure systems, and safeguard data in today's ever-evolving cyber landscape.",
    img: "/cybersec.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Flutter Fullstack Mastery: From Frontend to Backend",
    des: "Flutter Fullstack Mastery equips you with the skills to develop complete applications, from frontend design to backend functionality. Learn to build seamless, cross-platform apps with a unified codebase using Flutter and Dart.",
    img: "/flutter.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "WordPress Development: Build and Manage Professional Websites",
    des: "You'll learn to build and manage professional websites with ease. You'll master themes, plugins, and customization, enabling you to create dynamic, responsive sites for any purpose.",
    img: "/wordpress.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Mastering Prompt Engineering: Crafting Effective AI Interactions",
    des: "We teach you to craft precise prompts for AI models, ensuring accurate and effective responses. Master this skill to optimize AI interactions for various applications, from content creation to automation.",
    img: "/prompt.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Starkin Academy transformed my career! The hands-on projects and expert guidance helped me land a job at TechCorp. I highly recommend their courses to anyone looking to excel in tech.",
    name: "Michael Johnson",
    title: "Fullstack Developer at TechCorp",
  },
  {
    quote:
      "The Figma UI/UX course was a game-changer for me. Starkin Academy provided real-world training that made me confident in my skills and prepared me for a top design role.",
    name: "Michael Johnson",
    title: "UI/UX Designer at Creative Minds",
  },
  {
    quote:
      "I never imagined I could build complete apps until I joined Starkin Academy. The Flutter Fullstack course gave me everything I needed to succeed in the industry.",
    name: "Michael Johnson",
    title: "Flutter Developer at AppSolutions",
  },
  {
    quote:
      "Starkin Academy's WordPress Development course was fantastic! I went from knowing nothing to managing professional websites for clients. Their support and resources are top-notch.",
    name: "Michael Johnson",
    title: "WordPress Developer at WebDynamics",
  },
  {
    quote:
      "The Cyber Security course took me from a beginner to a pro. The in-depth knowledge and practical skills I gained at Starkin Academy have made a huge difference in my career.",
    name: "Michael Johnson",
    title: "Cyber Security Specialist at SecureNet",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/insta.svg",
    link: "https://www.instagram.com/starkinacademy/"
  },
  {
    id: 2,
    img: "/wha.svg",
    link: ""
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/company/starkinacademy/"
  },
];