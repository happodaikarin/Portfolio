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
            description: "I am a Systems Engineer with a passion for software development and problem-solving.",
            aboutMeText: "As a Systems Engineer, I have developed a deep understanding of software development and technology. My hands-on experience with various tools and languages has prepared me to contribute to real-world projects. I am highly motivated and ready to take on new challenges in a professional setting.",
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
            description: "Soy Ingeniero en Sistemas con pasión por el desarrollo de software y la resolución de problemas.",
            aboutMeText: "Como Ingeniero de Sistemas, he desarrollado una profunda comprensión del desarrollo de software y la tecnología. Mi experiencia práctica con diversas herramientas y lenguajes me ha preparado para contribuir en proyectos del mundo real. Estoy altamente motivado y listo para asumir nuevos desafíos en un entorno profesional.",
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
  