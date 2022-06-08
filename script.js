var button=document.querySelector('.submit')
var input=document.querySelector('.inputCity')
var city1=document.querySelector('.cityName1')
var city2=document.querySelector('.cityName2')
var temperature1=document.querySelector('.temperature1')
var temperature2=document.querySelector('.temperature2')
var desc1=document.querySelector('.desc1')
var desc2=document.querySelector('.desc2')
var icon1=document.querySelector('.icon1')
var icon2=document.querySelector('.icon2')
var cont1=document.querySelector('.cont1')
var cont2=document.querySelector('.cont2')



var apiKey='64e13edbc77d37b5d9799b88f68d933a';

function locationWeather(){
navigator.geolocation.getCurrentPosition(success=>{
    let {latitude,longitude}= success.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        showData1(data)
    })
})
}
locationWeather();

button.addEventListener('click',function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`)
    .then(response=>response.json())
    .then(data=>{
        
        console.log(data);
        showData2(data)
    })
    
})

   function showData1(data){
//    var {name,country,temp,icon,description} =data.current;
    var name=data['name']
    var temp=data.main.temp
    var icon=data.weather[0].icon;
    var desc=data.weather[0].description;
    var country=data.sys.country;
    console.log(name);
    city1.innerHTML=`${name}`;
    cont1.innerHTML=country;
    temperature1.innerHTML=`${temp}°<span class="celcius">C</span>`;
    icon1.innerHTML=`<img src="https://openweathermap.org/img/w/${icon}.png">`;
    desc1.innerHTML=`${desc}`
   }

   function showData2(data){
    //    var {name,country,temp,icon,description} =data.current;
        var name=data['name']
        var temp=data.main.temp
        var icon=data.weather[0].icon;
        var desc=data.weather[0].description;
        var country=data.sys.country;
        console.log(name);
        city2.innerHTML=name;
        cont2.innerHTML=country;
        temperature2.innerHTML=`${temp}° <span class="celcius">C</span>`;
        icon2.innerHTML=`<img src="https://openweathermap.org/img/w/${icon}.png">`;
        desc2.innerHTML=`${desc}`
       }