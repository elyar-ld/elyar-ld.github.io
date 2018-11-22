var currentDate = new Date();
var launchingDate = new Date(2018,11,9,0,0);

var secs = parseInt((launchingDate - currentDate)/1000);
var days = parseInt(secs / (60*60*24));
secs %= (60*60*24);
var hours = parseInt(secs / (60*60));
secs %= (60*60);
var mins = parseInt(secs / 60);
secs %= 60;
		
var daysTag = document.getElementById("days-value");
var hoursTag = document.getElementById("hours-value");
var minsTag = document.getElementById("mins-value");
var secsTag = document.getElementById("secs-value");

var timer = setInterval(() => {
	secs -=1;
	if(secs < 0){
		secs = 59;
		mins -= 1;
		if(mins < 0){
			mins = 59;
			hours -= 1;
			if(hours < 0){
				hours = 23;
				days -= 1;
				if(days < 0){
					days = 0;
					hours = 0;
					mins = 0;
					secs = 0;
					clearTimer();
				}
			}
		}
	}
	secsTag.innerHTML = secs;
	minsTag.innerHTML = mins;
	hoursTag.innerHTML = hours;
	daysTag.innerHTML = days;
}, 1000);

function clearTimer(){
	clearInterval(timer);
}