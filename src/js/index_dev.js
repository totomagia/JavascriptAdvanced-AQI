import "../css/styles.css";
import _ from 'lodash';


let btnSearch = document.getElementById('search');
let btnGeo = document.getElementById('gpsNavigation');
const apiKey = process.env.apiKey;

btnSearch.onclick = function(){
  let cityInput= document.getElementById ('cityName').value;
  let uri = "https://api.waqi.info/feed/" + cityInput + "/?token=" + apiKey;
  
  const axios = require('axios');

  
    axios.get(uri)
  .then(function (response) {
    // handle success
    const result = response.data;
      const cityName =  _.get(result.data.city,'name','-'); 
      console.log(result); 
      let city = document.getElementById ('city');
      city.innerHTML= result.data.city.name;
    console.log(response);
    
    const fgdNumber = _.get(result.data.iaqi.pm25.v,'0');
    console.log(result);
    let fineDustGrade = document.getElementById ('fgd');
    fineDustGrade.innerHTML=result.data.iaqi.pm25.v;

    const airQuality = _.get(result.data,'aqi','0'); 
    let aqi = document.getElementById ('aqi');  
    aqi.innerHTML = result.data.aqi;
     

    let healt = document.getElementById ('healt');
        
    if (airQuality <=50){     
    healt.innerHTML="Air quality is considered satisfactory";
    aqi.style.backgroundColor = "#019701";
    } else if (airQuality >50 &&airQuality <=100){
    healt.innerHTML="Air quality is acceptable";
    aqi.style.backgroundColor = "#ffee00";} 
    else if (airQuality >100 && airQuality <=150){
    healt.innerHTML="Members of sensitive groups may experience health effects";
    aqi.style.backgroundColor = "#f08903";
          } 
    else if (airQuality >150 && airQuality <=200){
    healt.innerHTML="Everyone may begin to experience health effects";
    aqi.style.backgroundColor = "	#ff0000";
          } 
    
    else if (airQuality >200 && airQuality <=300){
    healt.innerHTML="Health warnings of emergency conditions";
    aqi.style.backgroundColor = "#800080";
          }
    
    else if (airQuality >300){
    healt.innerHTML="Health alert";
    aqi.style.backgroundColor="#800000";
          }

  })
  .catch(function (error) {
    // handle error
    alert ("Sorry we cannot find the city!") 
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

btnGeo.onclick = function(){
  let uri= "https://api.waqi.info/feed/here/?token=" + apiKey;
  
 const axios = require('axios');
 
  axios.get(uri)
    .then(function (response) {
      const result = response.data;
      const cityName =  _.get(result.data.city,'name','-'); 
      console.log(result); 
      let city = document.getElementById ('city');
      city.innerHTML= result.data.city.name;
    console.log(response);
    
    const fgdNumber = _.get(result.data.iaqi.pm25.v,'0');
    console.log(result);
    let fineDustGrade = document.getElementById ('fgd');
    fineDustGrade.innerHTML=result.data.iaqi.pm25.v;

    const airQuality = _.get(result.data,'aqi','0'); 
    let aqi = document.getElementById ('aqi');  
    aqi.innerHTML = result.data.aqi;
     

    let healt = document.getElementById ('healt');
        
    if (airQuality <=50){     
    healt.innerHTML="Air quality is considered satisfactory";
    aqi.style.backgroundColor = "#019701";
    } else if (airQuality >50 && airQuality <=100){
    healt.innerHTML="Air quality is acceptable";
    aqi.style.backgroundColor = "#ffee00";} 
    else if (airQuality >100 && airQuality <=150){
    healt.innerHTML="Members of sensitive groups may experience health effects";
    aqi.style.backgroundColor = "#f08903";
          } 
    else if (airQuality >150 && airQuality <=200){
    healt.innerHTML="Everyone may begin to experience health effects";
    aqi.style.backgroundColor = "	#ff0000";
          } 
    
    else if (airQuality >200 && airQuality <=300){
    healt.innerHTML="Health warnings of emergency conditions";
    aqi.style.backgroundColor = "#800080";
          }
    
    else if (airQuality >300){
    healt.innerHTML="Health alert";
    aqi.style.backgroundColor="#800000";
          } 
 
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      
      console.log(error);
    })
    .then(function () {
      // always executed
    });
   }