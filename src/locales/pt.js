export default {
  // Navegação
  navigation: {
    home: "Início",
    projects: "Projetos",
  },

  // Página inicial
  home: {
    hi_there: "Olá! Eu sou",
    web_developer: "Desenvolvedor Web",
  },

  // Seções comuns
  sections: {
    about_me: "Sobre Mim",
    portfolio: "Portfólio",
    contact: "Contato",
  },

  // Texto sobre mim
  about: {
    description:
      "Minha relação com a tecnologia começou ainda na infância, quando lembro de observar meu pai trabalhando em um computador já amarelado pelo tempo, desenhando no AutoCAD. Aquela cena ficou gravada na minha memória e despertou minha curiosidade em entender como máquinas e programas funcionavam. Anos depois, essa curiosidade se transformou em escolha de carreira. Hoje, sou Desenvolvedor Full-Stack em formação, com experiência em Vue.js, React.js, Quasar Framework, Python, Django e SQL. Já atuei em projetos que vão desde o desenvolvimento de sistemas de gestão até a criação de interfaces responsivas e acessíveis, sempre aplicando boas práticas e explorando o potencial da tecnologia para transformar ideias em soluções reais. Atualmente, curso Análise e Desenvolvimento de Sistemas na UNIVALI, sigo me especializando em tecnologias modernas e busco oportunidades para aprender, evoluir e contribuir com projetos inovadores.",
  },

  // Categorias de projetos
  projects: {
    title: "Projetos",
    categories: {
      frontend: {
        title: "Projetos Front-end",
        description:
          "Aplicações modernas focadas na experiência do usuário, desenvolvidas com tecnologias como React.js e Vue.js. Cada projeto demonstra diferentes aspectos do desenvolvimento front-end, desde interfaces responsivas até componentes reutilizáveis.",
      },
      fullstack: {
        title: "Projetos Full-stack",
        description:
          "Aplicações completas que integram front-end e back-end, demonstrando competências em desenvolvimento web integral. Projetos que abrangem desde a interface do usuário até a gestão de dados e lógica de negócio.",
      },
      academic: {
        title: "Projetos Acadêmicos",
        description:
          "Projetos desenvolvidos durante a graduação em Análise e Desenvolvimento de Sistemas, representando trabalhos colaborativos e aplicação prática dos conhecimentos adquiridos no curso.",
      },
    },
    items: {
      smash_burger: {
        title: "Smash Burger",
        description:
          "Simulador de delivery de hambúrgueres feito com Vue.js, focado em uma experiência de usuário fluida e interativa.",
      },
      login_component: {
        title: "Componente de Login",
        description:
          "Componente de login reutilizável construído com React.js, demonstrando a aplicação de formulários e validação.",
      },
      maos_de_tesoura: {
        title: "Mãos de Tesoura - Vue.js",
        description:
          "Aplicação Front-end de agendamento de serviços e landing page.",
      },
      django_sge: {
        title: "Django SGE - Django",
        description:
          "Sistema de Gerenciamento de Estoque completo com Django, incluindo controle de produtos, categorias e fornecedores.",
      },
      django_cars: {
        title: "Django Cars - Django",
        description: "Aplicação Full Stack de gerenciamento de carros.",
      },
      ads_integrator: {
        title: "Projeto Integrador ADS",
        description:
          "Projeto de um site institucional para uma arquiteta desenvolvido em grupo durante o curso de Análise e Desenvolvimento de Sistemas.",
      },
    },
  },

  // Formulário de contato
  contact: {
    title: "Contato",
    subtitle:
      "Vamos conversar! Estou sempre aberto a novas oportunidades e colaborações.",
    form: {
      labels: {
        name: "Nome",
        email: "Email",
        message: "Mensagem",
      },
      placeholders: {
        name: "Seu nome completo",
        email: "seu.email@exemplo.com",
        message: "Digite sua mensagem aqui...",
      },
      buttons: {
        send: "Enviar Mensagem",
        sending: "Enviando...",
      },
      messages: {
        success:
          "✅ Mensagem enviada com sucesso! Entrarei em contato em breve.",
      },
      validation: {
        name_required: "Nome é obrigatório",
        email_required: "Email é obrigatório",
        email_invalid: "Email inválido",
        message_required: "Mensagem é obrigatória",
        message_min_length: "Mensagem deve ter pelo menos 10 caracteres",
      },
    },
  },
};
