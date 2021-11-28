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
    alert("Sorry we cannot find your city. Please insert another city!");
    console.log(error);
  })
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
   
   }

   btnGeo.addEventListener('click', () => {
    const successCallback = async function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let uri =(`https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${apiKey}`)
    };
    const errorCallback = function (error) {
        alert(error.message);
    }
    const options = {enableHighAccuracy: true, timeout: 5000};
      
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
});
 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ80B36u1dZ8FFrrOZjWgvSZfgbxm7iOc",
  authDomain: "airpollutionjavascriptadvaced.firebaseapp.com",
  projectId: "airpollutionjavascriptadvaced",
  storageBucket: "airpollutionjavascriptadvaced.appspot.com",
  messagingSenderId: "67259163923",
  appId: "1:67259163923:web:c1c3b24e16bbb49dc866e6",
  measurementId: "G-KTPB3MPR17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);