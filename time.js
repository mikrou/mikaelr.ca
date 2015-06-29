function startTime() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
if (hours < 10){
     hours = '0'+ hours;
}
if (minutes < 10){
	minutes = '0' + minutes;
}
if (seconds < 10){
    seconds = '0' + seconds;
}
	document.getElementById('timebox').innerHTML = '<div class="time">' + (hours + ':' + minutes + ':' + seconds) + '</div>';
	window.setTimeout(function(){update()}, 1000);
}

function update() {
    console.log('update..');
    startTime();
}
