import './css/styles.css';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
var debounce = require('lodash.debounce');
import Notiflix from 'notiflix';
// Затримка на відповідь після вводу в стрічку inputRibbon
const DEBOUNCE_DELAY = 300;


const refs = {
  inputRibbon: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};
// Отримали посилання на стрічку вводу, вкл. слухача input, та покет debounce для сповіщень. 
refs.inputRibbon.addEventListener('input', debounce(onInputValue, DEBOUNCE_DELAY));


// Функція для вводу 
function onInputValue() {
    const name = refs.inputRibbon.value.trim();
    // Перевірка на чи це не пуста стрічка
  if (name === '') {
    return (refs.countryList.innerHTML = ''), (refs.countryInfo.innerHTML = '');
  }
// Функція запиту на сервер
  fetchCountries(name)
    .then(r => {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';
      if (r.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      else if (response.length < 10 && response.length >= 2) {
        refs.countryList.insertAdjacentHTML(
          'beforeend',
          renderCountryList(response)
        );
      }
       else {
        refs.countryInfo.insertAdjacentHTML(
          'beforeend',
          renderCountryInfo(response)
        );
      }
    })
    //  catch обробник помилок у випадку якщо  then поверне помилку
    .catch(() => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      return [];
    });
}

// function renderCountryList(countries) {
//   return countries
//     .map(({ flags, name }) => {
//       return `
//     <li class="country-list__item">
//         <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 50px height = 50px>
//         <h2 class="country-list__name">${name.official}</h2>
//     </li>
//     `;
//     })
//     .join('');
// }

// function renderCountryInfo(countries) {
//   return countries.map(({ flags, name, capital, population, languages }) => {
//     return `
//     <img width="100px" height="100px" src='${flags.svg}' 
//     alt='${name.official} flag' />
//       <ul class="country-info__list">
//           <li class="country-info__item">
//           <p><b>Name: </b>${name.official}</p></li>
//           <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
//           <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
//           <li class="country-info__item"><p><b>Languages: </b>${Object.values(
//             languages
//           )}</p></li>
//       </ul>
//       `;
//   }).join();
// }




