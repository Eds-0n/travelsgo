let navbar = document.querySelector('#cabecalho');

document.addEventListener('scroll' , () => {

    let scroll_top = window.scrollY;

    if (scroll_top > 0) {

        navbar.classList.add('rolar');
        console.log('rolado')
        
    } else {
        navbar.classList.remove('rolar');
        console.log('rolagem removida')
    }

});
