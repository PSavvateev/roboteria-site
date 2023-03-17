// ********* fixed navbar ************************************
const navbar = document.querySelector('.navbar');
const linksContainer = document.querySelector('.links-container');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-navbar');
    } else {
        navbar.classList.remove('fixed-navbar');
    };

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    };
});

// ******** smooth scroll **********
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        // prevent default
        e.preventDefault();
        // navigate to specific spot

        const id = e.currentTarget.getAttribute('href');
        const element = document.querySelector(id);

        // calculate the heights

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-navbar');
        let position = element.offsetTop - navHeight;
        console.log("Section top:" , element)
        console.log(element.offsetTop)
        console.log(position)
        console.log(navHeight)
        
        if (!fixedNav) {
            position = position - navHeight;
            console.log(position)

        }
        if (navHeight > 96) {
            position = position + containerHeight;
            console.log(position)
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        linksContainer.style.height = 0;


    });
});

// **************** set date **************
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();




// *************** gallery of projects ********************

const projects = [
    {
        id: 1,
        name: "names classifier",
        info: "AI-based web application classifying gender by a given name.",
        img: "./img/robo-tile-x25.svg",
        link: "https://gender-app.roboteria.io",
        stack: ["python", "flask", "html", "css"],
        git: ""
    },
    {
        id: 2,
        name: "project #2",
        info: "another AI-based application. Here should be some short description.",
        img: "./img/robo-tile-x25.svg",
        link: "#",
        stack: ["python", "flask", "html", "css"],
        git: ""
    },
    {
        id: 3,
        name: "project #3",
        info: "another AI-based application. Here should be some short description.",
        img: "./img/robo-tile-x25.svg",
        link: "#",
        stack: ["python", "flask", "html", "css"],
        git: ""
    },
    {
        id: 4,
        name: "project #4",
        info: "another AI-based application. Here should be some short description.",
        img: "./img/robo-tile-x25.svg",
        link: "#",
        stack: ["python", "flask", "html", "css"],
        git: ""
    },
    {
        id: 5,
        name: "project #5",
        info: "another AI-based application. Here should be some short description.",
        img: "./img/robo-tile-x25.svg",
        link: "#",
        stack: ["python", "flask", "html", "css"],
        git: ""
    },
    {
        id: 6,
        name: "project #6",
        info: "another AI-based application. Here should be some short description.",
        img: "./img/robo-tile-x25.svg",
        link: "#",
        stack: ["python", "flask", "html", "css"],
        git: ""
    }
];

const gallery = document.querySelector(".gallery")

// load gallery

window.addEventListener("DOMContentLoaded", function() {
    displayGallery(projects);
});

// displaying projects function

function displayGallery(projects) {
    let displayProjects = projects.map( project => {
        return `<a href="${project.link}">
                    <article class="project">                   
                        <header>
                            <h3 class="name">${project.name}</h3>
                            <p class="info">${project.info}</p>
                        </header>
                        <img src=${project.img} alt=${project.name}>                    
                    </article>
                </a>`
    });

    displayProjects = displayProjects.join("");
    gallery.innerHTML = displayProjects;
};
