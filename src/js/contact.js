export default function contact() {
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

  const mapouter = document.createElement('div');
  mapouter.classList.add('mapouter');

  const gmapCanvas = document.createElement('div');
  gmapCanvas.classList.add('gmap_canvas');

  const iframe = document.createElement('iframe');
  iframe.classList.add('gmap_iframe');
  iframe.width = '100%';
  iframe.src = 'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tivoli%20Dome%20alexandria+(Testy%20cafe)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;&output=embed';
  iframe.frameBorder = '0';
  iframe.scrolling = 'no';
  iframe.marginHeight = '0';
  iframe.marginWidth = '0';

  const mapa = document.createElement('a');
  mapa.href = 'https://www.fridaynightfunkin.net/';
  mapa.innerHTML = 'Friday Night Funkin';

  gmapCanvas.appendChild(iframe);
  gmapCanvas.appendChild(mapa);
  mapouter.appendChild(gmapCanvas);

  const info = document.createElement('div');
  info.classList.add('info');

  const detail = document.createElement('div');
  detail.classList.add('detail');

  const dh1 = document.createElement('h1');
  dh1.innerHTML = 'Contact Details';
  dh1.classList.add('bg_h1');

  const detailDiv = document.createElement('div');
  const detailarr = [
    'Address: Alexadria sidi Gabar tivoli Dome Testy',
    'Phone: (02) 01121603394',
    'Email: Testy@gmail.com',
    'we are open: Mo-Fr from 8am to 1am',
  ];

  const dlen = detailarr.length;
  for (let i = 0; i < dlen; i += 1) {
    const item = document.createElement('p');
    item.innerHTML = detailarr[i];
    detailDiv.appendChild(item);
  }
  detail.appendChild(dh1);
  detail.appendChild(detailDiv);

  const form = document.createElement('div');
  form.classList.add('form');

  const formh1 = document.createElement('h1');
  formh1.classList.add('bg_h1');
  formh1.innerHTML = "Let's Get in Touch";

  const forminputs = document.createElement('form');

  const nameField = document.createElement('input');
  nameField.classList.add('input');
  nameField.placeholder = 'Enter your Name *';
  nameField.type = 'text';

  const email = document.createElement('input');
  email.classList.add('input');
  email.placeholder = 'Enter your Email *';
  email.type = 'email';

  const textarea = document.createElement('textarea');
  textarea.classList.add('input');
  textarea.cols = '50';
  textarea.rows = '10';

  const btn = document.createElement('button');
  btn.classList.add('input', 'button');
  btn.innerHTML = 'Submit';

  const inputsarr = [nameField, email, textarea, btn];
  const inputslen = inputsarr.length;

  for (let i = 0; i < inputslen; i += 1) {
    forminputs.appendChild(inputsarr[i]);
  }

  form.appendChild(formh1);
  form.appendChild(forminputs);

  info.appendChild(detail);
  info.appendChild(form);

  const h = document.createElement('div');
  h.classList.add('h');
  h.appendChild(nav);
  h.appendChild(mapouter);
  h.appendChild(info);

  document.body.appendChild(h);
}