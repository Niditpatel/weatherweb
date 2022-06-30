const cityname = document.getElementById('CityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp =document.getElementById('temp');
const temp_realval =document.getElementById('temp_realval');
const datahide = document.querySelector('.middle_layer');
const getInfo = async(event) =>{
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&units=matrics&appid=d8960400b354ece1a9481f23087e328e`
    let cityval = cityname.value; 
    if(cityval === ''){
        city_name.innerHTML= "write before you search";
        datahide.classList.add('data_hide');
        

     }
     else{
       try{
        const response = await fetch(url);
        const data =await response.json;
        const arrdata=[data];
        city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
        temp_realval.innerText=arrdata[0].main.temp;
    
        const tempmod = arrdata[0].weather[0].main;
        if(tempmod="Clear"){
            temp_status.innerHTML = "<i fas fa-sun style=`color:#e6668;`></i>";
        }else if(tempmod="Clouds"){
            temp_status.innerHTML = "<i fas fa-cloud style=`color:#f1f2f6;`></i>";
        }else if(tempmod="Rain"){
            temp_status.innerHTML = "<i fas fa-cloud-rain style=`color:#a4b0be;`></i>";
        }else{
            temp_status.innerHTML = "<i fas fa-cloud style=`color:#1f2f6;`></i>";
        }
        datahide.classList.remove('data_hide');
     }catch{
        city_name.innerHTML="plz entrer city name properly";
        datahide.classList.add('data_hide');
     }
    }

    
}


submitBtn.addEventListener('click',getInfo);