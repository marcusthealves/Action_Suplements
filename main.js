const btnMobile = window.document.getElementsByClassName('btn-mobile')[0];
    function toggleMenu(){
    const lista = document.getElementById('nav');
    lista.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu)


// Função para scroll suave
function scrollSuave(event) {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    const element = document.querySelector(target);
    const offsetTop = element.offsetTop;
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
}

// Adicionar evento de clique suave para cada link na lista de navegação
const navLinks = document.querySelectorAll(".nav_link");
navLinks.forEach(link => {
    link.addEventListener("click", scrollSuave);
});
