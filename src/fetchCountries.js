export function fetchCountries(name){
   return fetch (
   `${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`
   ).then(r => {
    if (!r.ok){
        throw new Error (r.status);
    }
    return response.json();
   });
}
const BASE_URL = 'https://restcountries.com/v3.1';