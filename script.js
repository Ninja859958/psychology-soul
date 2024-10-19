var email = prompt("Por favor, insira seu endereço de e-mail:");

if (email === null || email === "") {
    alert("Você não inseriu um endereço de e-mail.");
} else {
    alert("O endereço de e-mail inserido é: " + email);
}


// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const body = document.body;

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
        body.classList.toggle('no-scroll'); // Opcional: Para evitar rolagem quando o menu estiver aberto
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('open');
            body.classList.remove('no-scroll');
        }
    });
});

