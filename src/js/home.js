import '../css/style.css';

export default function main() {
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
  content.appendChild(div);
  content.classList.add('content');
  document.body.appendChild(content);
}
