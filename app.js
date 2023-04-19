const express = require('express');
const https = require('https')

const app = express();

app.get("/", function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Aracaju&appid=726cb9c8acecb5aa724e02629b337d09&units=metric"
    https.get(url, function(response){
        console.log(response.statusCode);

    response.on("data", function(data){
        const weatherData = JSON.parse(data)
        const temperature = weatherData.main.temp
        const weatherDescription = weatherData.weather[0].description

        console.log(weatherDescription);
    })
    })
})


app.listen(2048, function(){
    console.log("Working!")
})