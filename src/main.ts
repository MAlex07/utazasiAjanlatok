import 'bootstrap/dist/css/bootstrap.min.css';
import type {Ajanlatok} from './Ajanlatok.js';

document.addEventListener('DOMContentLoaded', () => {loadData()},
);
document.addEventListener('submit', (e)=>{
    newData();
  })

const URL_LINK = 'https://petrik-utazas-default-rtdb.europe-west1.firebasedatabase.app/travelDestinations.json';

async function loadData() {
  const response = await fetch(URL_LINK);
  const data: Ajanlatok[] = await response.json();

  const cardHelye = document.getElementById('kartyak');
  for (const item of data) {

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item.title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text')
    cardText.textContent = item.content;

    const cardIMG = document.createElement('img');
    cardIMG.src = item.img;
    cardIMG.classList.add('card-img-top');

    cardHelye?.appendChild(card);
    card.appendChild(cardIMG);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

  }
}

async function newData(e: Event) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData= new FormData(form);
  
  

}