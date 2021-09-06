
var loc = document.getElementById("location");
var tempicon=document.getElementById("logo1");
var tempvalue=document.getElementById("temp-value");
var humidityy=document.getElementById("humidity-value");
var climate=document.getElementById("climate");
var iconfile;
var searchInput=document.getElementById("search-input");
var searchButton=document.getElementById("search-button");




searchButton.addEventListener('click' ,(e)=>{
   e.preventDefault();
    getweather(searchInput.value);
    searchInput.value="";
    });
    
    const getweather=() => {
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchInput.value+'&appid=6123e0c539d0e04c920515ade2d3056d')
        .then(response => response.json())
        .then(data => {
            const cityname=data['name'];
            const temperature=data['main']['temp'];
            const descrip=data['weather'][0]['description'];
        
            const humid= data['main']['humidity'];
            loc.textContent=cityname;
            climate.textContent=descrip;
            tempvalue.textContent=Math.round(temperature-273);
            const id=data['weather'][0]['id'];
            humidityy.textContent=humid;
            if(id<300 && id>=200)
            {
                tempicon.src="./icons/thunderstorm.svg"
            }
            if(id<400 && id>=300)
            {
                tempicon.src="./icons/rainy.svg"
            }
         //    else if(id<500 && id>400)
         //    {
         //        tempicon.src="./icons/thunderstorm.svg"
         //    }
            else if(id<600 && id>=500)
          {
                tempicon.src="./icons/rainy.svg"
            }
            else if(id<700 && id>=600)
            {
                tempicon.src="./icons/snow.svg"
            }
           
            else if(id==800)
            {
                tempicon.src="./icons/sunny.svg"
            }
            else if(id<803 && id>800)
            {
                tempicon.src="./icons/cloudy1.svg"
            }
            else if(id>=803)
            {
                tempicon.src="./icons/cloudy2.svg"
            }
            
            console.log(data);
            
            
        })
    
       .catch(err => alert("wrong city"))
    }



window.addEventListener("load",()=>{

let long;
let lat;

if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition((position)=>
    {
        long=position.coords.longitude;
        lat=position.coords.latitude;
        
        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=6123e0c539d0e04c920515ade2d3056d')
        
        .then(Response => Response.json())

       .then (data =>
        {
            const cityname=data['name'];
            const temperature=data['main']['temp'];
            const descrip=data['weather'][0]['description'];
            const id=data['weather'][0]['id'];
            const humid= data['main']['humidity'];
            loc.textContent=cityname;
            climate.textContent=descrip;
            tempvalue.textContent=Math.round(temperature-273);
           
            humidityy.textContent=humid;
            if(id<300 && id>=200)
            {
                tempicon.src="./icons/thunderstorm.svg"
            }
            if(id<400 && id>=300)
            {
                tempicon.src="./icons/rainy.svg"
            }
         //    else if(id<500 && id>400)
         //    {
         //        tempicon.src="./icons/thunderstorm.svg"
         //    }
            else if(id<600 && id>=500)
          {
                tempicon.src="./icons/rainy.svg"
            }
            else if(id<700 && id>=600)
            {
                tempicon.src="./icons/snow.svg"
            }
           
            else if(id==800)
            {
                tempicon.src="./icons/sunny.svg"
            }
            else if(id<803 && id>800)
            {
                tempicon.src="./icons/cloudy1.svg"
            }
            else if(id>=803)
            {
                tempicon.src="./icons/cloudy2.svg"
            }
           
        })
   
    })
}

})


       