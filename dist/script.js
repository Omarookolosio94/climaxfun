/*javascript for toggle menu*/
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');
const links = document.querySelectorAll('.nav-link');


links[0].addEventListener('click', closeToggle);
links[1].addEventListener('click', closeToggle);
links[2].addEventListener('click', closeToggle);
links[3].addEventListener('click', closeToggle);
links[4].addEventListener('click', closeToggle);

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
  if(!showMenu){
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItem.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}

function closeToggle(){
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));

    showMenu = false;
}