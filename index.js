// var searchedCities = ["riverside", "orange", "rialto"];
var searchedCities = [];

function renderButtons() {
  console.log("this is running");
  console.log("this is the array: " + searchedCities);
  $("#buttons-view").empty();

  for (var i = 0; i < searchedCities.length; i++) {
    var a = $("<button>");
    a.text(searchedCities[i]);
    $("#buttons-view").append(a);
  }
}

function displayCityWeather(city) {

  var queryWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=042b537d20004a979ae8274c6d124325";

  var cityView = $("#city-view");

  $.ajax({
    url: queryWeather,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    $("#city-view").empty();
    searchedCities.push(city);
    renderButtons();
    var lon = response.coord.lon;
    var lat = response.coord.lat;
    var temp = response.main.temp;
    // var fTemp = ((temp - 273.15) * 1.8) + 32;
    var pCity = $("<P>").text("city: "+ city);
    cityView.append(pCity);
    var pOne = $("<p>").text("Temperature: " + temp);
    cityView.append(pOne);
    var humidity = response.main.humidity;
    var pTwo = $("<p>").text("Humidity: " + humidity);
    cityView.append(pTwo);
    var windSpeed = response.wind.speed;
    var pThree = $("<p>").text("Wind Speed: " + windSpeed);
    cityView.append(pThree);
    var icon = response.weather[0].icon;
    var queryUVI = "http://api.openweathermap.org/data/2.5/uvi?appid=042b537d20004a979ae8274c6d124325&lat="+lat+"&lon="+lon;
  
    $.ajax({
      url: queryUVI,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var uv = response.value;
      var pFour = $("<p>").text("UV Index: " + uv);
        cityView.append(pFour);
      var pFive = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");
      cityView.append(pFive);
    })

   

  });
}
function displayFiveDayForecast(city) {
  console.log("displayFiveDayForecast");
  var queryFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&cnt=5&appid=042b537d20004a979ae8274c6d124325"

  $.ajax({
    url: queryFiveDay,
    method: "GET"
  }).then(function(response) {
    console.log("fiveday response", response);
    var days = response.list;
    for (var i = 0; i < days.length; i++){
      var dayView = $("#d" + i);
      var date = days[i].dt_txt;
      var icon = days[i].weather[0].icon;
      var temp = days[i].main.temp;
      // var fTemp = ((temp - 273.15) * 1.8) + 32;
      var humidity = days[i].main.humidity;
    
      var pDate = $("<p>").text("Date: " + date);
        dayView.append(pDate);
        var pIcon = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");
        dayView.append(pIcon); 
        var pTemp = $("<p>").text("Temperature: " + temp);
        dayView.append(pTemp);
        var pHumid = $("<p>").text("Humidity: " + humidity);
        dayView.append(pHumid);
    }
  })
}
//onclick function
$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  var search = $("#searchInput").val().trim();
  displayCityWeather(search);
  displayFiveDayForecast(search);

});

$(".cityButton").on("click", function (event) {
  event.preventDefault();
  
});

