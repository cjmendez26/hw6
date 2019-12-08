//function to display current city
var citySearch = 0;

 function displayCurrentCity() {

    var city = $(this).attr("data-name");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "042b537d20004a979ae8274c6d124325";
///ajax call to get information from the weather api
    $.ajax({
        url: queryURL,
        method: "GET"
        //function to create a div with in the div there will be:
        //image
        //temperature
        //humidity
        //uv index
      }).then(function(response) {
        var searchDiv = $("<div class='search'>");
        //here would be located the call for icon image///

        // temperature call placed as paragraph
        var temp = response.main.temp;
        var pOne = $("<p>").text("Temperature: " + temp);
        searchDiv.append(pOne);
        // humidity
        var humidity = response.main.humidity;
        var pTwo = $("<p>").text("Humidity: " + humidity);
        searchDiv.append(pTwo);
        //wind speed
        var windS = response.wind.speed;
        var pThree = $("<p>").text("Wind Speed: " + windS);
        searchDiv.append(pThree);
        // uv index
        var uv = response.main.uv;
        var pFour = $("<p>").text("UV Index: " + uv);
        searchDiv.append(pFour);

        $("#city-view").prepend(searchDiv);
      });

    }

 //function to render from buttons-view
 function renderButtons() {
    //this clears the field for new search
   $("#buttons-view").empty();

    for (var i = 0; i < citySearch.length; i++) {

      var a = $("<button>");
      a.addClass("city-btn");
      a.attr("data-name", citySearch[i]);
      a.text(citySearch[i]);
      $("#buttons-view").append(a);
    }
  }
//onclick function
 $("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var city = $("#city:").val().trim();
    citySearch.push(city);
    renderButtons();
  });

  
  $(document).on("click", ".city-btn", displayCurrentCity);

  renderButtons();


// icon function with a switch function to go with the main city search
//function IconGen(desc) {
  //var desc = desc.toLowerCase()
  //switch (desc) {
    //case 'drizzle':
      //addIcon(desc)
      //break;
    //case 'clouds':
      //addIcon(desc)
      //break;
    //case 'rain':
      //addIcon(desc)
      //break;
    //case 'snow':
      //addIcon(desc)
      //break;
    //case 'clear':
      //addIcon(desc)
      //break;
    //case 'thunderstorm':
      //addIcon(desc)
      //break;
    //default:
      //$('div.clouds').removeClass('hide');
 // }
//}
//5 day forecast 
//function addIcon(desc) {
  //$('div.' + desc).removeClass('hide');
//}
//$.ajax({
  //  url: 'http://api.openweathermap.org/data/2.5/forecast', //API Call
  //  dataType: 'json',
  //  type: 'GET',
  //  data: {
  //  q: city,
  //    appId: key,
  //    units: 'metric',
  //    cnt: '10'
  //  },
  //  success: function(data) {
  //    var wf = '';
  //    $.each(data, function(index, val) {
  //      wf += '<p><b>' + data.city.name + '</b><img src=http://openweathermap.org/img/w/' + data.list[0].weather.icon + '.png></p>' + data.list[0].main.temp + '&deg;C' + ' | ' + data.list[0].weather.main + ", " + data.list[0].weather.description
  //    });
 //     $("#showWeatherForecast").html(wf);
  //  }
 // });