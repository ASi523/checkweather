const apiKey="a4396fa4cde62e5adcaef310354ffd5c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


//const searchbox=document.getElementById("#input").value;
//console.log(searchbox.value);
const searchbtn=document.querySelector(".search button");

async function checkWether(city){
    const response = await fetch(apiUrl + city +'&appid='+apiKey);
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"kmph";

    }
    searchbtn.addEventListener("click",()=>{
        checkWether("germany");
    })
//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=a4396fa4cde62e5adcaef310354ffd5c&units=metric