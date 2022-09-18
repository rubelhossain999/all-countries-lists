const getCountryList = async() => {
    const url = await fetch('https://restcountries.com/v3.1/all');
    const data = await url.json();
    allCountry(data);
}
const allCountry = alldata => {
    const singleData = alldata.map(datas => getSingleData(datas));
    const divID = document.getElementById('allCountry');
    divID.innerHTML = singleData.join(' ');
}

const getSingleData = (allcountry) => {
 return `
 
 <div class="single-country">
 <img src="${allcountry.flags.png}" alt="">
 <h3>${allcountry.name.common}</h3>
 <p><b>Capital:</b>${allcountry.capital}</p>
 <p><b>Region:</b>${allcountry.region}</p>
</div>
 
 `;
}

getCountryList();