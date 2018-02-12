$(document).ready(function() {
    var submitButton = $("#weatherSubmit");

    $("#weatherSubmit").click(function(e) {
        var value = $("#weatherInput").val();
        e.preventDefault();
        console.log(value);
        var myurl= "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=28f3a0e66ccd223c0d59d7f03f706698";
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(json) {

                var results = "";
                results += '<h2>Weather in ' + json.name + "</h2>";
                for (var i=0; i<json.weather.length; i++) {
                    results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
                }
                results += '<h2>' + json.main.temp + " &deg;F</h2>"
                results += "<p>"
                for (var i=0; i<json.weather.length; i++) {
                    results += json.weather[i].description
                    if (i !== json.weather.length - 1)
                    results += ", "
                }
                results += "</p>";
                $("#weatherResults").html(results);

            console.log(json);
            }
        });
    });  
    $("#stackSubmit").click(function(e) {
        e.preventDefault();
        var value = $("#stackInput").val();
    
        var myurl= "https://api.stackexchange.com/2.2/search?pagesize=10&order=desc&sort=activity&tagged=" + 
            value + "&site=stackoverflow";
        $.ajax({
            url : myurl,
            dataType : "json",
            success : function(json) {
    
            console.log(json);
            var results = "";
            results += '<h2>Here\'s what we found about ' + value + "</h2>";
                
            for (var i = 0; i < json.items.length; i++) {
                results += "<br>" + "<p>" + "<img src= '" + json.items[i].owner.profile_image + "'/>" + 
                    "<a href = '" + json.items[i].link + "'>" + json.items[i].owner.display_name + 
                    "</a>" + "<br>" + "<a href = '" + json.items[i].owner.link + "'>"  + json.items[i].title + "</a>" + "<br>";
            }

            $("#stackResults").html(results);
 
            }
        });
    });

});


//'<img src="api.stackexchange.com/img/w/' + json.item[i]


// $("#weatherSubmit").click(function(e) {
// 	e.preventDefault();
// 	var value = $("#weatherInput").val();
//         console.log(value);
//     });//find "weatherSubmit" store in weatherInput


//.val() = getValue();














// var readyToRun = function() {
//     console.log("I am so ready!!");
// }

// $(document).ready(readyToRun);

// $(document).ready(function() {
//     console.log("Hello Class :)");
// });//called an "anonymous function" only here
// You can either separate it like above or do it 
//like it is here.
