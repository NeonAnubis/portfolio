export interface Project {
  id: string;
  title: string;
  category: "web" | "mobile" | "ai";
  shortDescription: string;
  fullDescription: string;
  skills: string[];
  image: string;
  images: string[];
  liveLink: string;
}

export const projects: Project[] = [
  // Web Projects
  {
    id: "web-1",
    title: "Travel Booking System",
    category: "web",
    shortDescription:
      "A modern travel agency management system built with React.js, Django, and PostgreSQL. This comprehensive platform streamlines travel operations by managing reservations, quotes, customers, and financial data in one elegant interface.",
    fullDescription:
      "A modern travel agency management system built with React.js, Django, and PostgreSQL. This comprehensive platform streamlines travel operations by managing reservations, quotes, customers, and financial data in one elegant interface.\n 📊 Dashboard: Real-time overview of key metrics including revenue, active reservations, customer count, and pending quotes,\n 📅 Reservation Calendar: Advanced booking management with day, week, and month views,\n 💰 Quotes Management: Create and track travel quotes for potential customers, 👥 Customer Management: Comprehensive customer database and relationship management",
    skills: ["React.js", "Django", "PostgreSQL", "Shadcn/ui", "Tailwind CSS"],
    image: "/web/travel_booking/1.png",
    images: [
      "/web/travel_booking/2.png",
      "/web/travel_booking/3.png",
      "/web/travel_booking/4.png",
    ],
    liveLink: "https://travelbook-lilac.vercel.app",
  },
  {
    id: "web-2",
    title: "Condominium Management Platform",
    category: "web",
    shortDescription:
      "SINDIPRO is a comprehensive condominium management platform designed to streamline property administration, financial oversight, and community operations. Built with modern web technologies, it provides property managers, administrators, and residents with powerful tools to manage every aspect of condominium life.",
    fullDescription:
      "SINDIPRO is a comprehensive condominium management platform designed to streamline property administration, financial oversight, and community operations. Built with modern web technologies, it provides property managers, administrators, and residents with powerful tools to manage every aspect of condominium life. SINDIPRO isn't just another property management tool – it's a complete ecosystem designed specifically for condominium administration. Whether you're managing a small residential building or a large complex, SINDIPRO scales with your needs while maintaining simplicity and ease of use.",
    skills: ["React.js", "Django", "PostgreSQL", "Shadcn/ui", "Tailwind CSS"],
    image: "/web/sindipro/1.png",
    images: [
      "/web/sindipro/2.png",
      "/web/sindipro/3.png",
      "/web/sindipro/4.png",
      "/web/sindipro/5.png",
      "/web/sindipro/6.png",
      "/web/sindipro/7.png",
    ],
    liveLink: "https://sindipro.com.br",
  },
  {
    id: "web-3",
    title: "Zenith Seller Flow",
    category: "web",
    shortDescription:
      "Zenith Seller Flow is a comprehensive e-commerce management platform designed specifically for Brazilian online sellers who operate across multiple marketplaces. Our mission is to simplify and streamline the complex process of managing multi-channel e-commerce operations by providing a unified, intuitive interface that handles everything from inventory to invoices.",
    fullDescription:
      "Zenith Seller Flow is a comprehensive e-commerce management platform designed specifically for Brazilian online sellers who operate across multiple marketplaces. Our mission is to simplify and streamline the complex process of managing multi-channel e-commerce operations by providing a unified, intuitive interface that handles everything from inventory to invoices. The platform eliminates the need to juggle between different marketplace dashboards, spreadsheets, and accounting tools by centralizing all critical operations in one place. Whether you're selling on Mercado Livre, Shopee, Amazon, or Magalu, Zenith Seller Flow gives you complete visibility and control over your entire business.",
    skills: ["React.js", "Laravel", "My SQL", "WebSocket", "REST API"],
    image: "/web/zenith/1.png",
    images: [
      "/web/zenith/2.png",
      "/web/zenith/3.png",
      "/web/zenith/4.png",
      "/web/zenith/5.png",
      "/web/zenith/6.png",
      "/web/zenith/7.png",
      "/web/zenith/8.png",
    ],
    liveLink: "https://zenith-indol.vercel.app",
  },
  {
    id: "web-4",
    title: "Your Marriage Green Card",
    category: "web",
    shortDescription:
      "Top Green Card guides you through every step of your Marriage Green Card application. Our expert-built platform ensures you complete your filing quickly and correctly.",
    fullDescription:
      "Top Green Card guides you through every step of your Marriage Green Card application. Our expert-built platform ensures you complete your filing quickly and correctly. Filing for a Marriage Green Card is complex, but it doesn’t have to be. Top Green Card (TGC) provides an expertly designed, easy to follow process. We help prepare your entire application package, ensuring nothing is missing or incorrect.",
    skills: ["Vue.js", "Wix", "FastAPI", "PostgreSQL"],
    image: "/web/green_card/1.png",
    images: [
      "/web/green_card/2.png",
      "/web/green_card/3.png",
      "/web/green_card/4.png",
      "/web/green_card/5.png",
      "/web/green_card/6.png",
      "/web/green_card/7.png",
      "/web/green_card/8.png",
      "/web/green_card/9.png",
    ],
    liveLink: "https://www.topgreencard.com",
  },
  {
    id: "web-5",
    title: "AI-Powered FindMyStage",
    category: "web",
    shortDescription: "Online education platform with video streaming",
    fullDescription:
      "Complete LMS platform featuring course management, video streaming, student progress tracking, assignments, quizzes, and certification system. Built for educational institutions and online learning.",
    skills: ["React", "Node.js", "AWS", "MongoDB", "Video.js"],
    image: "/web/findmystage/1.png",
    images: [
      "/web/findmystage/2.png",
      "/web/findmystage/3.png",
      "/web/findmystage/4.png",
      "/web/findmystage/5.png",
      "/web/findmystage/6.png",
    ],
    liveLink: "https://mystage-profiling.vercel.app",
  },
  {
    id: "web-6",
    title: "Nenya Fashion Store",
    category: "web",
    shortDescription: "Elegant online fashion store and booking system",
    fullDescription:
      "Elegant online fashion store with real-time inventory management, product display, online ordering, payment processing, and customer reviews.",
    skills: ["Wordpress", "MySQL", "Responsive Design", "WooCommerce"],
    image: "/web/nenya/1.png",
    images: ["/web/nenya/2.png", "/web/nenya/3.png"],
    liveLink: "https://www.nenya.online",
  },
  {
    id: "web-7",
    title: "Board | HR Platform",
    category: "web",
    shortDescription: "Board is the Enterprise Planning Platform.",
    fullDescription:
      "We’re bringing you a new generation of AI-powered Planner Agents to help you make accurate and confident decisions. Through dynamic self-service exploration (even with massive data sets), continuous planning, and solving real business problems with Analytical and Generative AI, organizations can meet their peak performance.",
    skills: ["Next.js", "Supabase", "Prisma", "PostgreSQL"],
    image: "/web/hr/1.png",
    images: [
      "/web/hr/2.png",
      "/web/hr/3.png",
      "/web/hr/4.png",
      "/web/hr/5.png",
      "/web/hr/6.png",
      "/web/hr/7.png",
      "/web/hr/8.png",
      "/web/hr/9.png",
    ],
    liveLink: "https://www.board.com",
  },
  {
    id: "web-8",
    title: "Ideal Adapt | Education Platform",
    category: "web",
    shortDescription:
      "A modern platform designed to enhance language learning through personalized teaching tools and AI-powered assistance.",
    fullDescription:
      "A modern platform designed to enhance language learning through personalized teaching tools and AI-powered assistance. Our platform adapts to each student's needs, offering a personalized learning experience with cutting-edge tools.",
    skills: ["Next.js", "Supabase", "OpenAI", "Prisma", "Tailwind CSS"],
    image: "/web/ideal-adapt/1.png",
    images: [
      "/web/ideal-adapt/2.jpg",
      "/web/ideal-adapt/3.jpg",
      "/web/ideal-adapt/4.png",
      "/web/ideal-adapt/5.png",
      "/web/ideal-adapt/6.jpg",
      "/web/ideal-adapt/7.jpg",
      "/web/ideal-adapt/8.jpg",
      "/web/ideal-adapt/9.jpg",
      "/web/ideal-adapt/10.jpg",
      "/web/ideal-adapt/11.jpg",
      "/web/ideal-adapt/12.jpg",
      "/web/ideal-adapt/13.jpg",
    ],
    liveLink: "https://ideal-adapt.vercel.app",
  },

  {
    id: "web-9",
    title: "MaryRuth Organics",
    category: "web",
    shortDescription:
      "I offer organic vitamins and supplements. Our extensive and well-organized catalog features filters based on product type, age, and health needs. We also offer integrated subscriptions and bundled products.",
    fullDescription:
      "I offer organic vitamins and supplements. Our extensive and well-organized catalog features filters based on product type, age, and health needs. We also offer integrated subscriptions and bundled products. MaryRuth was inspired to help empower others to take wellness into their own hands after seeing how health issues personally impacted her loved ones. As a health educator, nutritional consultant, culinary chef, and mom to 4 children, MaryRuth was driven to formulate a delicious, easy-to-take multivitamin with quality ingredients for her clients and family. This led to the creation of what is still one of our #1 best-selling liquid multivitamins as well as a growing product line of supplements for all life stages.As a mom of 4 young children, I know that there are many choices when it comes to your and your family’s health. That’s why I started MaryRuth’s: to help others learn how to support their own health by creating morning and nighttime routines to move forward every day. - MaryRuth",
    skills: ["Shopify", "CSS", "Javascript", "Responsive Design"],
    image: "/web/MaryRuth_Organics/1.png",
    images: [
      "/web/MaryRuth_Organics/2.png",
      "/web/MaryRuth_Organics/3.png",
      "/web/MaryRuth_Organics/4.png",
      "/web/MaryRuth_Organics/5.png",
      "/web/MaryRuth_Organics/6.png",
      "/web/MaryRuth_Organics/7.png",
    ],
    liveLink: "https://www.maryruthorganics.com/",
  },
  // Mobile Projects
  {
    id: "mobile-1",
    title: "Food Delivery App",
    category: "mobile",
    shortDescription: "Cross-platform food ordering application",
    fullDescription:
      "Full-featured food delivery mobile app with restaurant browsing, real-time order tracking, payment integration, push notifications, and rider tracking. Supports multiple payment methods and offers personalized recommendations.",
    skills: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    image: "/mobile/restaurant_app/1.png",
    images: [
      "/mobile/restaurant_app/2.png",
      "/mobile/restaurant_app/3.png",
      "/mobile/restaurant_app/4.png",
      "/mobile/restaurant_app/5.png",
      "/mobile/restaurant_app/6.png",
      "/mobile/restaurant_app/7.png",
      "/mobile/restaurant_app/8.png",
      "/mobile/restaurant_app/9.png",
      "/mobile/restaurant_app/10.png",
      "/mobile/restaurant_app/11.png",
    ],
    liveLink: "",
  },
  {
    id: "mobile-2",
    title: "Fitness Tracker",
    category: "mobile",
    shortDescription: "Health monitoring mobile application",
    fullDescription:
      "Comprehensive fitness app with workout tracking, calorie counter, step counter, heart rate monitoring, and progress analytics. Integrates with health devices and provides personalized workout plans.",
    skills: ["Flutter", "Dart", "SQLite", "Health Kit"],
    image: "/mobile/LPF_app/1.png",
    images: [
      "/mobile/LPF_app/1.png",
      "/mobile/LPF_app/2.png",
      "/mobile/LPF_app/3.png",
      "/mobile/LPF_app/4.png",
      "/mobile/LPF_app/5.png",
      "/mobile/LPF_app/6.png",
      "/mobile/LPF_app/7.png",
      "/mobile/LPF_app/8.png",
      "/mobile/LPF_app/9.png",
    ],
    liveLink: "",
  },
  {
    id: "mobile-3",
    title: "Healthcare App",
    category: "mobile",
    shortDescription: "Secure mobile healthcare solution",
    fullDescription:
      "Enterprise-grade mobile healthcare app with patient management, appointment scheduling, telemedicine, and health tracking. Features robust security and seamless user experience.",
    skills: ["React Native", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "/mobile/healthcare_app/1.png",
    images: [
      "/mobile/healthcare_app/2.png",
      "/mobile/healthcare_app/3.png",
      "/mobile/healthcare_app/4.png",
      "/mobile/healthcare_app/5.png",
      "/mobile/healthcare_app/6.png",
      "/mobile/healthcare_app/7.png",
      "/mobile/healthcare_app/8.png",
    ],
    liveLink: "",
  },
  {
    id: "mobile-4",
    title: "Traffic Light App",
    category: "mobile",
    shortDescription:
      "A comprehensive Flutter mobile application for receiving and displaying real-time traffic light data from Raspberry Pi devices.",
    fullDescription:
      "A comprehensive Flutter mobile application for receiving and displaying real-time traffic light data from Raspberry Pi devices. The app connects to a backend server that aggregates traffic light status information from multiple Raspberry Pi units installed at various intersections. Users can monitor traffic light changes, view historical data, and receive notifications about traffic conditions. The application features an intuitive UI with real-time updates, interactive maps, and customizable settings for alerts and data visualization.",
    skills: [
      "Flutter",
      "Raspberry Pi",
      "Dart",
      "Computer Vision",
      "Yolo",
      "Machine Learning",
    ],
    image: "/mobile/traffic_app/1.png",
    images: [
      "/mobile/traffic_app/2.png",
      "/mobile/traffic_app/3.png",
      "/mobile/traffic_app/4.png",
      "/mobile/traffic_app/5.png",
    ],
    liveLink: "",
  },
  {
    id: "mobile-5",
    title: "Education App for kids",
    category: "mobile",
    shortDescription: "This app is educational app for kids",
    fullDescription:
      "Intuitive educational app designed for kids, featuring interactive lessons, quizzes, and progress tracking. Aims to make learning fun and engaging with gamified content.",
    skills: ["React Native", "Redux Toolkit", "Local Notifications"],
    image: "/mobile/kids_app/1.png",
    images: [
      "/mobile/kids_app/2.png",
      "/mobile/kids_app/3.png",
      "/mobile/kids_app/4.png",
      "/mobile/kids_app/5.png",
      "/mobile/kids_app/6.png",
      "/mobile/kids_app/7.png",
      "/mobile/kids_app/8.png",
      "/mobile/kids_app/9.png",
      "/mobile/kids_app/10.png",
      "/mobile/kids_app/11.png",
      "/mobile/kids_app/12.png",
      "/mobile/kids_app/13.png",
    ],
    liveLink: "",
  },

  // AI Projects
  // {
  //   id: "ai-1",
  //   title: "AI Chatbot Assistant",
  //   category: "ai",
  //   shortDescription: "Intelligent conversational AI system",
  //   fullDescription:
  //     "Advanced AI chatbot powered by GPT models for natural language understanding. Provides customer support, answers queries, and handles complex conversations with context awareness. Includes sentiment analysis and multi-language support.",
  //   skills: ["Python", "OpenAI API", "LangChain", "FastAPI", "React"],
  //   image: "/placeholder.svg",
  //   images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  //   liveLink: "https://example.com",
  // },
  // {
  //   id: "ai-2",
  //   title: "Image Recognition System",
  //   category: "ai",
  //   shortDescription: "Deep learning computer vision platform",
  //   fullDescription:
  //     "Sophisticated image recognition system using convolutional neural networks for object detection, classification, and analysis. Capable of processing thousands of images with high accuracy for various use cases.",
  //   skills: ["Python", "TensorFlow", "OpenCV", "Docker", "REST API"],
  //   image: "/placeholder.svg",
  //   images: ["/placeholder.svg", "/placeholder.svg"],
  //   liveLink: "https://example.com",
  // },
  // {
  //   id: "ai-3",
  //   title: "Sentiment Analysis Tool",
  //   category: "ai",
  //   shortDescription: "NLP-based sentiment detection platform",
  //   fullDescription:
  //     "Powerful sentiment analysis tool that processes text data from social media, reviews, and feedback to determine emotional tone. Provides detailed analytics and visualizations with real-time processing capabilities.",
  //   skills: ["Python", "NLTK", "SpaCy", "MongoDB", "React Dashboard"],
  //   image: "/placeholder.svg",
  //   images: [
  //     "/placeholder.svg",
  //     "/placeholder.svg",
  //     "/placeholder.svg",
  //     "/placeholder.svg",
  //   ],
  //   liveLink: "https://example.com",
  // },
  // {
  //   id: "ai-4",
  //   title: "Recommendation Engine",
  //   category: "ai",
  //   shortDescription: "ML-powered personalization system",
  //   fullDescription:
  //     "Advanced recommendation engine using collaborative filtering and deep learning to provide personalized suggestions. Processes user behavior patterns to deliver highly relevant recommendations for e-commerce and content platforms.",
  //   skills: ["Python", "PyTorch", "Redis", "Apache Spark", "Kubernetes"],
  //   image: "/placeholder.svg",
  //   images: ["/placeholder.svg", "/placeholder.svg"],
  //   liveLink: "https://example.com",
  // },
  // {
  //   id: "ai-5",
  //   title: "Content Generator",
  //   category: "ai",
  //   shortDescription: "AI-powered creative writing assistant",
  //   fullDescription:
  //     "Intelligent content generation platform that creates articles, blog posts, product descriptions, and marketing copy using advanced language models. Features tone adjustment, SEO optimization, and multi-format output.",
  //   skills: ["Python", "GPT-4 API", "Next.js", "PostgreSQL", "Vercel"],
  //   image: "/placeholder.svg",
  //   images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  //   liveLink: "https://example.com",
  // },
];
