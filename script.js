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
            intro: "Hi I'm Ramses",
            description: "I am passionate about software development, although so far, my computer has been my only employer. I have mastered the art of debugging my own errors and am looking for an opportunity to prove that talent doesn't need previous experience. Who needs a work history when you have a great attitude and a desire to learn?",
            aboutMeText: "Hi, I'm a systems engineering student in my final semester. I haven't worked as a software developer yet, but I'm eager to start. I've spent my university years bartending, balancing cocktail mixing with coding.",
            aboutMeText2: "I'm persistent and always open to learning from others. I can code in multiple languages, even though I haven't had the chance to prove it professionally yet. If you're concerned about my experience, don't be—I’m great at researching and finding solutions.",
            aboutMeText3: "If you need someone who can make a mojito while debugging, I’m your guy!",
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
            description: "Soy apasionado por el desarrollo de software, aunque hasta ahora, mi computadora ha sido mi único empleador. He dominado el arte de depurar mis propios errores y estoy buscando una oportunidad para demostrar que el talento no necesita experiencia previa. ¿Quién necesita una experiencia laboral cuando tienes una gran actitud y ganas de aprender?",
            aboutMeText: "Hola, soy un estudiante de ingeniería de sistemas en mi último semestre. Aún no he trabajado como desarrollador de software, pero estoy ansioso por comenzar. He pasado mis años universitarios trabajando como bartender, equilibrando la mezcla de cócteles con la codificación.",
            aboutMeText2: "Soy persistente y siempre estoy abierto a aprender de los demás. Puedo programar en varios lenguajes, aunque no he tenido la oportunidad de demostrarlo profesionalmente. Si te preocupa mi experiencia, no lo hagas, ¡soy excelente investigando y encontrando soluciones!",
            aboutMeText3: "Si necesitas a alguien que pueda hacer un mojito mientras depura errores, ¡soy tu persona!",
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




//EMAIL


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
  