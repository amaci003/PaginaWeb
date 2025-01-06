document.addEventListener('DOMContentLoaded', () => {
   
    const isOfAge = () => {
        const birthDate = prompt("Por favor, ingresa tu fecha de nacimiento (ano mes dia):");
        if (!birthDate) {
            alert("Debes ingresar una fecha para continuar.");
            return isOfAge();
        }

        const birthDateObj = new Date(birthDate);
        const today = new Date();
        const age = today.getFullYear() - birthDateObj.getFullYear();
        const isBirthdayPassed = (today.getMonth() > birthDateObj.getMonth() || (today.getMonth() === birthDateObj.getMonth() && today.getDate() >= birthDateObj.getDate()));

        if (age > 18 || (age === 18 && isBirthdayPassed)) {
            alert("Bienvenido a nuestra cervecería.");
        } else {
            alert("Lo sentimos, debes ser mayor de 18 años para acceder.");
            window.location.href = "https://www.google.com"; /* puse una pagina de google como redireccionamiento si user < 18 (edad) */
        }
    };

    isOfAge();

   
    const imageWrappers = document.querySelectorAll('.image-wrapper');
    
    imageWrappers.forEach(imageWrapper => {
        imageWrapper.addEventListener('mouseenter', () => {
            const img = imageWrapper.querySelector('img');
            img.style.transform = 'scale(1.1)'; 
        });

        imageWrapper.addEventListener('mouseleave', () => {
            const img = imageWrapper.querySelector('img');
            img.style.transform = 'scale(1)'; 
        });

    
        imageWrapper.addEventListener('click', () => {
            imageWrapper.classList.toggle('expanded');
        });
    });
});
