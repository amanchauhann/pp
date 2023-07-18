function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
    document.getElementById('github').style.fill = "black";
    document.getElementById('codesandbox').style.fill = "black";
    document.getElementById('codepen').style.fill = "black";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById('github').style.fill = "white";
    document.getElementById('codesandbox').style.fill = "white";
    document.getElementById('codepen').style.fill = "white";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
    document.getElementById('github').style.fill = "black";
    document.getElementById('codesandbox').style.fill = "black";
    document.getElementById('codepen').style.fill = "black";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    document.getElementById('github').style.fill = "white";
    document.getElementById('codesandbox').style.fill = "black";
    document.getElementById('codepen').style.fill = "white";
  }
  localStorage.setItem("theme", mode);
}

let theme = localStorage.getItem("theme");

// Fetching the theme from the local storage if available
if (theme) setTheme(theme);
else setTheme("light");

let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
  themeDots[theme].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

class Project {
  constructor({
    projectName,
    projectDescription,
    projectImage,
    codeLink,
    demoLink
  }) {
    this.title = this.createHeadingTag({
      headingType: "h6",
      className: "post-title",
      text: projectName
    });

    this.description = this.createParaTag({
      className: "post-intro",
      text: projectDescription
    });

    this.demo = this.createAttributeTag({
      href: demoLink,
      text: "Live Demo"
    });

    this.code = this.createAttributeTag({
      href: codeLink,
      text: "Source Code"
    });

    this.projectImage = this.createImageTag({
      className: "thumbnail",
      src: projectImage,
      alt: projectName
    });

    this.sourceCodeDiv = this.createDiv({
      className: "source-code",
      childElements: [this.demo, this.code]
    });

    this.cardHeaderDiv = this.createDiv({
      className: "post-preview",
      childElements: [this.title, this.description, this.sourceCodeDiv]
    });

    this.cardComponent = this.createDiv({
      className: "post",
      childElements: [this.projectImage, this.cardHeaderDiv]
    });
  }

  createAttributeTag({ href = "", target = "_blank", text }) {
    const tagDocument = document.createElement("a");
    tagDocument.href = href;
    tagDocument.target = target;
    const tagTextElement = document.createTextNode(text);
    tagDocument.appendChild(tagTextElement);
    return tagDocument;
  }

  createParaTag({ className = null, text = "" }) {
    const paraElement = document.createElement("p");
    if (className) paraElement.className = className;

    const paraText = document.createTextNode(text);
    paraElement.appendChild(paraText);
    return paraElement;
  }

  createDiv({ className = null, childElements = [] }) {
    const divElement = document.createElement("div");
    if (className) divElement.className = className;
    childElements.forEach(element => {
      divElement.appendChild(element);
    });
    return divElement;
  }

  createHeadingTag({ headingType = "h1", className = null, text = "" }) {
    const headingTag = document.createElement(headingType);
    if (className) headingTag.className = className;
    const headingText = document.createTextNode(text);
    headingTag.appendChild(headingText);
    return headingTag;
  }

  createImageTag({ className = null, src = "", alt = "" }) {
    const imageTag = document.createElement("img");
    if (className) imageTag.className = className;
    imageTag.src = src;
    imageTag.alt = alt;
    return imageTag;
  }

  createProjectCard() {
    return this.cardComponent;
  }
}

const projects = [
  {
    projectName: "Loop: Social Media",
    projectDescription:
      "CRUD functionality, Debouncer, JWT authentication and Reducer for state management.",
    projectImage: "images/loop.jpeg",
    codeLink: "https://github.com/amanchauhann/Loop",
    demoLink: "https://loop-rouge.vercel.app/"
  },
  {
    projectName: "Rones: E-commerce for drones",
    projectDescription:
      "Designed and built Ecommerce using ContextAPI, local storage, Auth, Pagination and responsive.",
    projectImage: "images/rones.jpeg",
    codeLink: "https://github.com/amanchauhann/my-app",
    demoLink: "https://my-app-pi-eosin.vercel.app/"
  },
  {
    projectName: "GitSafe",
    projectDescription:
      "Chrome extension that let you open any github repository directly in developer enviornment rather than cloning it.",
    projectImage: "images/gitsafe.png",
    codeLink: "https://github.com/amanchauhann/GitSafe",
    demoLink: "https://twitter.com/phantomthread_d/status/1654179430594387968"
  },
  {
    projectName: "NAILS",
    projectDescription:
      "Small Mails App with features filters, spam, trash, star etc. Built with react reducer and hooks.",
    projectImage: "images/nails.jpeg",
    codeLink: "https://codesandbox.io/s/react-ex10-neog-edy3be",
    demoLink: "https://edy3be.csb.app/"
  },
  {
    projectName: "Food Ordering",
    projectDescription:
      "Mini food ordering app with features filters, sort, add to cart, discount etc.",
    projectImage: "images/food.jpeg",
    codeLink: "https://codesandbox.io/s/3-4-react-ex9-neog-forked-djjsif",
    demoLink: "https://djjsif.csb.app/"
  },
  {
    projectName: "Quizzical",
    projectDescription:
      "Designed and built the application using react hooks and session storage using OTDB API.",
    projectImage: "images/quizzical.jpeg",
    codeLink: "https://github.com/amanchauhann/Quizzical-aman",
    demoLink: "https://quizzicalbyaman.netlify.app/"
  }, 
  {
    projectName: "FavMovie",
    projectDescription:
      "This application allows to search and explore and add to favorites using Local storage using Vanilla Javascript.",
    projectImage: "images/imagedock.png",
    codeLink: "https://github.com/amanchauhann/S-Movie",
    demoLink: "https://frabjous-babka-8fc1bf.netlify.app/"
  }, {
    projectName: "Lead Tracker Chrome Extension",
    projectDescription:
      "Its a browser extension which can be used to save active tab's link in the local storage.",
    projectImage: "images/leadtracker.jpeg",
    codeLink: "https://github.com/amanchauhann/LeadTracker-extension",
    demoLink: "https://twitter.com/phantomthread_d/status/1523740161057513473"
  }, {
    projectName: "RoboFriends",
    projectDescription:
      "Fun project built using react and tachyon library and filter method.",
    projectImage: "images/robofriends.jpg",
    codeLink: "https://github.com/amanchauhann/Robo-friends",
    demoLink: "https://amanchauhann.github.io/robofriends/"
  },
  {
    projectName: "Color Scheme",
    projectDescription:
      "It let you send Seed Color & type, then return color scheme along with HEX code using Color API.",
    projectImage: "images/color.jpg",
    codeLink: "https://github.com/amanchauhann/Solo-challenge",
    demoLink: "https://clinquant-paprenjak-de13b2.netlify.app/"
  },
  {
    projectName: "Tesla Clone",
    projectDescription:
      "Clone of Tesla Motors to fresh up UI and CSS skills using Styled Components in react.",
    projectImage: "images/tesla.jpg",
    codeLink: "https://github.com/amanchauhann/tesla",
    demoLink: "https://teslaa-motors.netlify.app/"
  },
  {
    projectName: "Background Generator",
    projectDescription:
      "Built using HTML, CSS and Vanilla JS to generate background gradient along with color code.",
    projectImage: "images/backgroundGenerator.jpg",
    codeLink: "https://github.com/amanchauhann/background-genererator",
    demoLink: "https://radiant-dieffenbachia-3d1ebc.netlify.app/"
  },
  {
    projectName: "BlackJack Game",
    projectDescription:
      "Built famous BlackJack Game during my early JavaScript learnings.",
    projectImage: "images/blackjack.jpg",
    codeLink: "https://github.com/amanchauhann/BlackJack",
    demoLink: "https://playblackjackgame.netlify.app/"
  },
  {
    projectName: "3 idiots quiz",
    projectDescription:
      "My first App, a CLI app quiz for 3 idiots movie.",
    projectImage: "images/cli.jpeg",
    codeLink: "https://github.com/amanchauhann/3idiots",
    demoLink: "https://replit.com/@amanchauhann/3idiots"
  },
];

const createCards = () => {
  projects.map(project => {
    const projectCard = new Project({
      projectName: project.projectName,
      projectDescription: project.projectDescription,
      projectImage: project.projectImage,
      codeLink: project.codeLink,
      demoLink: project.demoLink
    }).createProjectCard();
    document.getElementById("post-wrapper-id").appendChild(projectCard);
  }
  );
};
createCards();

