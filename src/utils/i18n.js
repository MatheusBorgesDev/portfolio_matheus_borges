import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      projects: "Projects",
      my: "My",
      aboutMe: "About me",
      contact: "Contact",
      greeting: "Hello, I'm Matheus Borges! 👋",
      developer: "Front-end Developer",
      seeProjects: "See projects",
      featuredProjects: "Featured Projects",
      seeAllProjects: "See all projects",
      aboutMeFirstDescription:
        "About a year and a half ago, I began to take my first steps into the world of programming, and from the first lines of code, I discovered my true vocation.",
      aboutMeSecondDescription:
        "Today, I'm passionate about the art of programming and I'm looking for the first opportunity to start my career.",
      workTogether: "Let's work together",
      sendMessage:
        "Send me an email, a WhatsApp message or call me on social media!",
      name: "Name",
      email: "Email",
      writeYourMessage: "Write your message here",
      sendYourMessage: "Send your message",
      code: "Code",
    },
  },
  br: {
    translation: {
      projects: "Projetos",
      my: "Meus",
      aboutMe: "Sobre mim",
      contact: "Contato",
      greeting: "Olá, Matheus Borges aqui! 👋",
      developer: "Desenvolvedor Front End",
      seeProjects: "Veja os projetos",
      featuredProjects: "Projetos em destaque",
      seeAllProjects: "Veja todos os projetos",
      aboutMeFirstDescription:
        "Há mais ou menos um ano e meio, comecei a dar os primeiros passos no mundo da programação, e desde as primeiras linhas de código, fui descobrindo a minha verdadeira vocação.",
      aboutMeSecondDescription:
        "Hoje, sou apaixonado pela arte de programar e busco a primeira oportunidade para iniciar a minha carreira.",
      workTogether: "Vamos trabalhar juntos?",
      sendMessage:
        "Envie um e-mail, mande uma mensagem pelo WhatsApp ou me chama nas redes sociais!",
      name: "Nome",
      email: "E-mail",
      writeYourMessage: "Escreva sua mensagem aqui",
      sendYourMessage: "Envie sua mensagem",
      code: "Código"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
