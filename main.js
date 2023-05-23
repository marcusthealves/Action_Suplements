const btnMobile = window.document.getElementsByClassName('btn-mobile')[0];
    function toggleMenu(){
    const lista = document.getElementById('nav');
    lista.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu)
