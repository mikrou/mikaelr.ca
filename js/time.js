function startTime() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var month = date.getMonth();
	var dayOfMonth = date.getDate();
	var dayOfWeek = date.getDay();
	switch(month){
		case 0: month = "Jan";
		break;
		case 1: month = "Feb";
		break;
		case 2: month = "Mar";
		break;
		case 3: month = "Apr";
		break;
		case 4: month = "May";
		break;
		case 5: month = "Jun";
		break;
		case 6: month = "Jul";
		break;
		case 7: month = "Aug";
		break;
		case 8: month = "Sept";
		break;
		case 9: month = "Oct";
		break;
		case 10: month = "Nov";
		break;
		case 11: month = "Dec";
		break;
	}
	switch(dayOfWeek) {
		case 0: dayOfWeek = 'Sunday';
		break;
		case 1: dayOfWeek = 'Monday';
		break;
		case 2: dayOfWeek = "Tuesday";
		break;
		case 3: dayOfWeek = "Wednesday";
		break;
		case 4: dayOfWeek = "Thursday";
		break;
		case 5: dayOfWeek = "Friday";
		break;
		default: dayOfWeek = "Saturday";
	}

if (hours < 10){
     hours = '0'+ hours;
}
if (minutes < 10){
	minutes = '0' + minutes;
}
if (seconds < 10){
    seconds = '0' + seconds;
}
	document.getElementById('timebox').innerHTML = '<div class="time">' + dayOfWeek + ', ' + month + ' ' + dayOfMonth + ', ' + hours + ':' + minutes + ':' + seconds +'</div>';
	window.setTimeout(function(){update()}, 1000);
}

function update() {
    console.log('update..');
    startTime();
}
