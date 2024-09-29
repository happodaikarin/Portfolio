document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.add('show');
});

document.getElementById('close-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.remove('show');
});

document.addEventListener("DOMContentLoaded", function () {
    const langEn = document.getElementById("change-lang-en");
    const langEs = document.getElementById("change-lang-es");

    // Traducciones en inglés y español
    const translations = {
        en: {
            aboutMe: "About Me",
            skills: "Skills",
            education: "Education",
            projects: "Projects",
            contact: "Contact Me",
            intro: "Hello, I'm Ramses",
            description: "I am a Systems Engineer with a passion for software development and problem-solving. While I am currently seeking my first professional role, I have dedicated my time to mastering key skills in programming, system architecture, and debugging. I am eager to contribute my knowledge and determination to a forward-thinking team that values innovation and learning.",
            aboutMeText: "I am a recent graduate in Systems Engineering, currently seeking opportunities to apply my technical skills in a professional setting. Although I do not yet have formal work experience as a software developer, I have spent my university years working on personal projects, improving my coding skills, and exploring various technologies.",
            aboutMeText2: "I have a solid understanding of programming in multiple languages and frameworks, and I am highly capable of researching, learning, and applying new technologies as needed. My perseverance and ability to adapt ensure that I can tackle any challenge with confidence and commitment.",
            aboutMeText3: "I am eager to join a dynamic team where I can grow, contribute, and develop my professional career.",
            mySkills: "My Skills",
            educationSection: "Education",
            contactSection: "Contact Me",
            sendButton: "Send Message",
            projectTitle: "My Projects"
        },
        es: {
            aboutMe: "Sobre Mí",
            skills: "Habilidades",
            education: "Educación",
            projects: "Proyectos",
            contact: "Contáctame",
            intro: "Hola, soy Ramses",
            description: "Soy Ingeniero en Sistemas con pasión por el desarrollo de software y la resolución de problemas. Actualmente, estoy buscando mi primer rol profesional, pero he dedicado tiempo a dominar habilidades clave en programación, arquitectura de sistemas y depuración. Estoy ansioso por aportar mi conocimiento y determinación a un equipo que valore la innovación y el aprendizaje.",
            aboutMeText: "Soy un recién graduado en Ingeniería de Sistemas, buscando oportunidades para aplicar mis habilidades técnicas en un entorno profesional. Aunque no tengo experiencia formal como desarrollador de software, he pasado mis años universitarios trabajando en proyectos personales, mejorando mis habilidades de codificación y explorando diversas tecnologías.",
            aboutMeText2: "Tengo una comprensión sólida de la programación en varios lenguajes y marcos, y soy altamente capaz de investigar, aprender y aplicar nuevas tecnologías según sea necesario. Mi perseverancia y capacidad de adaptación aseguran que puedo abordar cualquier desafío con confianza y compromiso.",
            aboutMeText3: "Estoy deseoso de unirme a un equipo dinámico donde pueda crecer, contribuir y desarrollar mi carrera profesional.",
            mySkills: "Mis Habilidades",
            educationSection: "Educación",
            contactSection: "Contáctame",
            sendButton: "Enviar Mensaje",
            projectTitle: "Mis Proyectos"
        }
    };

    // Cambia el idioma según la selección
    langEn.addEventListener("click", function (e) {
        e.preventDefault();
        changeLanguage('en');
    });

    langEs.addEventListener("click", function (e) {
        e.preventDefault();
        changeLanguage('es');
    });

    function changeLanguage(lang) {
        document.querySelector('a[href="#aboutme"]').textContent = translations[lang].aboutMe;
        document.querySelector('a[href="#skills"]').textContent = translations[lang].skills;
        document.querySelector('a[href="#education"]').textContent = translations[lang].education;
        document.querySelector('a[href="#projects"]').textContent = translations[lang].projects;
        document.querySelector('a[href="#contact"]').textContent = translations[lang].contact;
        document.querySelector('.container-description-home h1').textContent = translations[lang].intro;
        document.querySelector('.container-description-home p').textContent = translations[lang].description;
        document.querySelector('.aboutme h2').textContent = translations[lang].aboutMe;
        document.querySelectorAll('.aboutme-content p')[0].textContent = translations[lang].aboutMeText;
        document.querySelectorAll('.aboutme-content p')[1].textContent = translations[lang].aboutMeText2;
        document.querySelectorAll('.aboutme-content p')[2].textContent = translations[lang].aboutMeText3;
        document.querySelector('.my-skills-title h2').textContent = translations[lang].mySkills;
        document.querySelector('.my-projects-title h2').textContent = translations[lang].projectTitle;
        document.querySelector('.section-education h2').textContent = translations[lang].educationSection;
        document.querySelector('.contact h2').textContent = translations[lang].contactSection;
        document.querySelector('button[type="submit"]').textContent = translations[lang].sendButton;
    }
});



//EMAILL


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    
    // Muestra un mensaje de carga
    const formStatus = document.createElement('p');
    formStatus.textContent = "Sending...";
    this.appendChild(formStatus);
  
    // Envía el formulario usando EmailJS
    emailjs.sendForm('service_2o99u0e', 'template_nuwddub', this)
      .then(function() {
        formStatus.textContent = "Message Sent Successfully!";
      }, function(error) {
        formStatus.textContent = "Failed to send message. Please try again.";
        console.error('Error sending the message: ', error);
      });
  });
  