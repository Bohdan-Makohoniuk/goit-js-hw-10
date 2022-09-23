export function fetchCountries(name) {
    const BASE_URL = 'https://restcountries.com/v3.1';
    return fetch(
    //    Після ${BASE_URL}/name/${name}? перераховуємо властивості полів.
   `${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`
   ).then(response => {
    if (!response.ok){
        throw new Error (response.status);
    }
    return response.json();
   });
}
