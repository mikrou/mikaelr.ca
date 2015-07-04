$(document).ready(function() {
    showData('Edmonton, AB', '');
})

function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(passPosition);
    } else {
        $('.weather data').html('Geolocation not supported on this browser');
    }
}
function passPosition(position){
    console.log('got here');
showData(position.coords.latitude+','+position.coords.longitude);
}

function showData(location, woeid) {
    $.simpleWeather({
    	location: location,
    	unit: 'c',
    	success: function(weather){
            html = '<p class="city">' + weather.city + ', ' + weather.region + '</p>';
    	    html += '<img src="'+weather.thumbnail+'"/>'+ '<p class="temp">' + weather.temp + '&deg;' + weather.units.temp + '</p>';
            
    	    $('.weather .data').html(html);
    	},
    	error: function(error){
    		$('.weather .data').html('<p>' + error + '</p>');
    	}
    });
}