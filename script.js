'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData=function(country){
const request=new XMLHttpRequest();

request.open('GET',`https://restcountries.com/v2/name/${country}`);

request.send();

request.addEventListener('load',function(){
  let data=null
  if(country==='india')
   data=JSON.parse(this.responseText)[1]
  else 
   data=JSON.parse(this.responseText)[0]
  console.log(data);


const html=`
<article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">"${data.name}"</h3>
    <h4 class="country__region">${data.region}"</h4>
    <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} M people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`

countriesContainer.insertAdjacentHTML('beforeend',html);
countriesContainer.style.opacity=1;

})

}

getCountryData("india");
getCountryData("usa")
getCountryData("pakistan")
getCountryData("argentina")