let btn_menu_mobile = document.getElementById('btn-menu-mobile');
let line1 = document.querySelector('.line-menu-mobile-1');
let line2 = document.querySelector('.line-menu-mobile-2');
let menu_mobile = document.querySelector('#menu-mobile'); 
let body = document.querySelector('body');

btn_menu_mobile.addEventListener('click', () => {

    // o metodo toggle() verifica se existe uma classe com o nome
    // ativo, para apos adicao ou remocao caso axista
    line1.classList.toggle('ativo1');
    line2.classList.toggle('ativo2');

    menu_mobile.classList.toggle('abrir-menu');

    body.classList.toggle('no-overflow');

});