import main from './js/home';
import menu from './js/menu';
import contact from './js/contact';

function free() {
  const item = document.querySelector('body');
  while (item.firstChild) {
    item.removeChild(item.firstChild);
  }
}

function navbar() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  const ul = document.createElement('ul');
  ul.classList.add('ul');

  const links = ['Home', 'Menu', 'Contact'];
  links.forEach((link) => {
    const btn = document.createElement('buttton');
    btn.innerHTML = link;
    btn.classList.add('li', link);
    btn.addEventListener('click', (e) => {
      if (e.target.classList[1] === 'Home') {
        free();
        main();
        navbar();
      } else if (e.target.classList[1] === 'Menu') {
        free();
        menu();
        navbar();
      } else {
        free();
        contact();
        navbar();
      }
    });

    ul.appendChild(btn);
  });
  nav.appendChild(ul);
  document.body.getElementsByTagName('div')[0].prepend(nav);
}

main();
navbar();