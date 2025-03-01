const apiKey='9e51d64fd0f4966c40ec87493301de44'
const url='https://api.openweathermap.org/data/2.5/weather?units=metric'
const input=document.querySelector('input')
const button=document.querySelector('button')
const image=document.querySelector('.weather-icon')
 async function checkWeather(){
    const response=await fetch(url + `&q=${input.value}`+`&appid=${apiKey}`)
    const data= await response.json();
    console.log(data)
    if(response.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }else{

    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp);
    document.querySelector('.humidity').innerHTML=data.main.humidity;
    document.querySelector('.wind').innerHTML=data.wind.speed   ;
if(data.weather[0].main=='Smoke'){
    image.src='images/mist.png'
}else if(data.weather[0].main=='Clouds'){
    image.src='images/clouds.png'
}else if(data.weather[0].main=='Drizzle'){
    image.src='images/drizzle.png'
}else if(data.weather[0].main=='Rain'){
    image.src='images/rain.png'
}else if(data.weather[0].main=='Snow'){
    image.src='images/snow.png'
}else if(data.weather[0].main=='Clear'){
    image.src='images/clear.png'
}
document.querySelector('.weather').style.display='block'
 }}

 button.addEventListener('click',()=>{
    checkWeather(input.value)
 })


