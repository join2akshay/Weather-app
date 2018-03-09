

var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var currentTempInCelsius;



$(document).ready(function(){
  
    $("#bt1").click(function()
                    {
         if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
     // $("#p1").html(lon+"  "+lat);
      
      //
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
    });
  
   $("#tempunit").click(function () {
    var currentTempUnit = $("#tempunit").text();
    var newTempUnit = currentTempUnit == "C" ? "F" : "C";
    $("#tempunit").text(newTempUnit);
    if (newTempUnit == "F") {
      var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
      $("#temp").text(fahTemp + " " + String.fromCharCode(176));
    } else {
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
    }
  });
  
});



function getWeather(lat, lon) {
  var urlString = api + lat + "&" + lon;
  $.ajax({
    url: urlString, success: function (result) {
      $("#city").text(result.name + ", ");
      $("#country").text(result.sys.country);
      currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
      $("#tempunit").text(tempUnit);
      $("#desc").text(result.weather[0].main);
      IconGen(result.weather[0].main);
    }
  });
}

function IconGen(desc) {
  var desc = desc.toLowerCase()
  console.log(desc);
  switch (desc) {
    case 'drizzle':
    $("body").css('background-image','url(https://media.giphy.com/media/3o7at59KDANvJrUDbG/giphy.gif)')
      break;
    case 'clouds':
      $("body").css('background-image','url(https://media.giphy.com/media/dfjRNbF6bc4j6/giphy.gif)')
      break;
    case 'rain':
     $("body").css('background-image','url(https://media.giphy.com/media/3o6YfWvDokAcsmUfni/giphy.gif)')
      break;
    case 'snow':
     $("body").css('background-image','url(https://media.giphy.com/media/qz7Tae3RxDqQ8/giphy.gif)')
      break;
    case 'clear':
      $("body").css('background-image','url(https://media.giphy.com/media/3oz8xwT20ApeHadTlS/giphy.gif)')
      break;
    case 'thunderstom':
      $("body").css('background-image','url(https://media.giphy.com/media/bsB2lSU73P6tG/giphy.gif)')
      break;
    case 'haze':
      console.log("foggy");
     $("body").css('background-image','url(https://media.giphy.com/media/RI42LtoMA5mxi/giphy.gif)')
      case 'smoke':
      console.log("foggy");
     $("body").css('background-image','url(https://media.giphy.com/media/RI42LtoMA5mxi/giphy.gif)')
    default:
      $('div.clouds').removeClass('hide');
  }
}

//.css('background-image','img/1.jpg');
