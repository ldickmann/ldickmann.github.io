export default {
  // Navigation
  navigation: {
    home: "Home",
    projects: "Projects",
  },

  // Home page
  home: {
    hi_there: "Hi there! I'm",
    web_developer: "Web Developer",
  },

  // Common sections
  sections: {
    about_me: "About Me",
    portfolio: "Portfolio",
    contact: "Contact",
  },

  // About text
  about: {
    description:
      "My relationship with technology began in childhood, when I remember watching my father work on a computer, already yellowed by time, drawing in AutoCAD. That scene stuck in my memory and sparked my curiosity to understand how machines and programs worked. Years later, that curiosity turned into a career choice. Today, I am a Full-Stack Developer in training, with experience in Vue.js, React.js, Quasar Framework, Python, Django, and SQL. I have worked on projects ranging from the development of management systems to the creation of responsive and accessible interfaces, always applying good practices and exploring the potential of technology to turn ideas into real solutions. Currently, I am studying Systems Analysis and Development at UNIVALI, continue to specialize in modern technologies, and seek opportunities to learn, evolve, and contribute to innovative projects.",
  },

  // Project categories
  projects: {
    title: "Projects",
    categories: {
      frontend: {
        title: "Front-end Projects",
        description:
          "Modern applications focused on user experience, developed with technologies like React.js and Vue.js. Each project demonstrates different aspects of front-end development, from responsive interfaces to reusable components.",
      },
      fullstack: {
        title: "Full-stack Projects",
        description:
          "Complete applications that integrate front-end and back-end, demonstrating skills in integral web development. Projects that range from the user interface to data management and business logic.",
      },
      academic: {
        title: "Academic Projects",
        description:
          "Projects developed during the undergraduate course in Systems Analysis and Development, representing collaborative work and practical application of the knowledge acquired in the course.",
      },
    },
    items: {
      smash_burger: {
        title: "Smash Burger",
        description:
          "A hamburger delivery simulator made with Vue.js, focused on a fluid and interactive user experience.",
      },
      login_component: {
        title: "Login Component",
        description:
          "Reusable login component built with React.js, demonstrating the application of forms and validation.",
      },
      maos_de_tesoura: {
        title: "Mãos de Tesoura - Vue.js",
        description:
          "Front-end application for service scheduling and landing page.",
      },
      django_sge: {
        title: "Django SGE - Django",
        description:
          "Complete Inventory Management System with Django, including control of products, categories, and suppliers.",
      },
      django_cars: {
        title: "Django Cars - Django",
        description: "Full Stack application for car management.",
      },
      ads_integrator: {
        title: "ADS Integrator Project",
        description:
          "Project for an institutional website for an architect, developed in a group during the Systems Analysis and Development course.",
      },
    },
  },

  // Contact form
  contact: {
    title: "Contact",
    subtitle:
      "Let's talk! I'm always open to new opportunities and collaborations.",
    form: {
      labels: {
        name: "Name",
        email: "Email",
        message: "Message",
      },
      placeholders: {
        name: "Your full name",
        email: "your.email@example.com",
        message: "Type your message here...",
      },
      buttons: {
        send: "Send Message",
        sending: "Sending...",
      },
      messages: {
        success: "✅ Message sent successfully! I'll get back to you soon.",
      },
      validation: {
        name_required: "Name is required",
        email_required: "Email is required",
        email_invalid: "Invalid email",
        message_required: "Message is required",
        message_min_length: "Message must be at least 10 characters long",
      },
    },
  },
};
