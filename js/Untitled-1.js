const getTheCountryAPI = async() => {
    const rec = await fetch('https://restcountries.com/v3.1/all');
    const data = await rec.json();
    displayCountry(data);
}
const displayCountry = coutries => {
    const allCountries = coutries.map( country => singleCountry(country) );
    const divCountrylist = document.getElementById('allCountry');
    divCountrylist.innerHTML = allCountries.join(" ");
}

const singleCountry = allcountry => {
     console.log(allcountry.region); 
    return `
    
    <div class="single-country">
      <img src="${allcountry.flags.png}" alt="">
      <h3>${allcountry.name.common}</h3>
      <p><b>Capital:</b>${allcountry.capital}</p>
      <p><b>Region:</b>${allcountry.region}</p>
    </div>
    
    `;
}
getTheCountryAPI();