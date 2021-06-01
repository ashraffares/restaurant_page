export default function nav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  const ul = document.createElement('ul');
  ul.classList.add('ul');

  const links = ['Home', 'Menu', 'Contact'];
  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = links[i];
    li.classList.add('li');
    ul.appendChild(li);
  }

  nav.appendChild(ul);
  document.body.getElementsByTagName('div')[0].prepend(nav);
}