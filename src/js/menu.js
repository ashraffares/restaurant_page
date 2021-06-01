import ristretto from '../img/ristretto.jpg';
import espresso from '../img/espresso.jpg';
import espressoMacchiato from '../img/espresso_macchiato.jpg';
import americano from '../img/americano.jpeg';
import latte from '../img/latte.jpeg';
import cappuccino from '../img/cappuccino.jpeg';
import flatWhite from '../img/flat_white.jpg';
import glasse from '../img/glasse.jpg';
import irish from '../img/irish.jpeg';

const coffee = [
  { name: 'Ristretto', price: '2', src: ristretto },
  { name: 'Espresso', price: '4', src: espresso },
  { name: 'Espresso Macchiato', price: '6', src: espressoMacchiato },
  { name: 'Americano', price: '5', src: americano },
  { name: 'Latte', price: '7', src: latte },
  { name: 'Cappuccino', price: '8', src: cappuccino },
  { name: 'Flat white', price: '6', src: flatWhite },
  { name: 'Glasse', price: '7', src: glasse },
  { name: 'Irish', price: '5', src: irish },
];

export default function menumenu() {
  const div = document.createElement('div');
  div.classList.add('menu');

  coffee.forEach((val) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('img');
    img.src = val.src;

    const imgcontent = document.createElement('div');
    imgcontent.classList.add('imgcontent');

    const name = document.createElement('p');
    name.classList.add('name');
    name.innerHTML = val.name;

    const price = document.createElement('span');
    price.classList.add('price');
    price.innerHTML = val.price;

    const cur = document.createElement('span');
    cur.innerHTML = '.00 $';

    imgcontent.appendChild(name);
    imgcontent.appendChild(price);
    imgcontent.appendChild(cur);

    card.appendChild(img);
    card.appendChild(imgcontent);

    div.appendChild(card);
  });

  const content = document.createElement('div');
  content.classList.add('content');
  content.appendChild(div);

  document.body.appendChild(content);
}
