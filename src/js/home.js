import '../css/style.css';

export default function main() {
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

  const h1 = document.createElement('h1');
  h1.classList.add('divh1');
  h1.innerHTML = 'TESTY CAFE';

  const p = document.createElement('p');
  p.classList.add('divp');
  p.innerHTML = 'testy best coffe ever &hearts;';

  const div = document.createElement('div');
  div.appendChild(h1);
  div.appendChild(p);
  div.classList.add('div');

  const content = document.createElement('div');
  content.appendChild(nav);
  content.appendChild(div);
  content.classList.add('content');
  document.body.appendChild(content);
}
