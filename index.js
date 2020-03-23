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

  var queryUVI = "http://api.openweathermap.org/data/2.5/uvi?appid=042b537d20004a979ae8274c6d124325&lat=33.787914&lon=-117.853104";
  var queryWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=042b537d20004a979ae8274c6d124325";

  var cityView = $("#city-view");

  $.ajax({
    url: queryWeather,
    method: "GET"
  }).then(function (response) {
    $("#city-view").empty();
    searchedCities.push(city);
    renderButtons();
    var lon = response.coord.lon;
    var lat = response.coord.lat;
    var temp = response.main.temp;
    var pCity = $("<P>").text("city: "+ city);
    cityView.append(pCity);
    var pOne = $("<p>").text("Temperature: " + temp);
    cityView.append(pOne);
    var humidity = response.main.humidity;
    //var pTwo = $("<p>").text("Humidity: " + humidity);
    //searchDiv.append(pTwo);
    var windSpeed = response.wind.speed;
    //var pThree = $("<p>").text("Wind Speed: " + windS);
    //searchDiv.append(pThree);
    // var uv = response.
    // var pFour = $("<p>").text("UV Index: " + uv);
    //   searchDiv.append(pFour);
    console.log(humidity);

   

  });
}

//onclick function
$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  var search = $("#searchInput").val().trim();
  displayCityWeather(search);
  
});

$(".cityButton").on("click", function (event) {
  event.preventDefault();
  
});
