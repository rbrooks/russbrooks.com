// RussBrooks.com LifeSpan Calculators
function addCommas(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

var mm = 7;
var bday = 15;
var byear = 1970;
var year = new Date();
var year2 = year.getFullYear();
thedate = new Date();
mm2 = thedate.getMonth() + 1;
dd2 = thedate.getDate();
yyyy = thedate.getFullYear();
age = yyyy - byear;
if (mm2 < mm) age--;
if ((mm2 == mm) && (dd2 < bday)) age--;
TMonth = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July',
	'August', 'September', 'October', 'November', 'December');
CurMonth = mm - 1;
bmonth = TMonth[CurMonth];
var age2 = age + 1;
var timerID;
var timerRunning = false;
var today = new Date();
var startday = new Date();
var enday = new Date();
var secPerDay = 0;
var minPerDay = 0;
var hourPerDay = 0;
var secsLeft = 0;
var secsRound = 0;
var secsRemain = 0;
var minLeft = 0;
var minRound = 0;
var minRemain = 0;
var timeRemain = 0;

function stopclock() {
	if (timerRunning) clearTimeout(timerID);
	timerRunning = false;
}

function startclock() {
	stopclock();
	showtime();
	showtime1();
}

function showtime() {
	today = new Date();
	enday = new Date('' + bmonth + ', ' + bday + ' ' + year2 + ' 00:00');
	enday.setYear('' + year2 + '');
	secsPerDay = 1000 ;
	minPerDay = 60 * 1000 ;
	hoursPerDay = 60 * 60 * 1000;
	PerDay = 24 * 60 * 60 * 1000;
	secsLeft = (enday.getTime() - today.getTime()) / minPerDay;
	secsRound = Math.round(secsLeft);
	secsRemain = secsLeft - secsRound;
	secsRemain = (secsRemain < 0) ? secsRemain = 60 - ((secsRound - secsLeft) * 60) : secsRemain = (secsLeft - secsRound) * 60;
	secsRemain = Math.round(secsRemain);
	minLeft = ((enday.getTime() - today.getTime()) / hoursPerDay);
	minRound = Math.round(minLeft);
	minRemain = minLeft - minRound;
	minRemain = (minRemain < 0) ? minRemain = 60 - ((minRound - minLeft)  * 60) : minRemain = ((minLeft - minRound) * 60);
	minRemain = Math.round(minRemain - 0.495);
	hoursLeft = ((enday.getTime() - today.getTime()) / PerDay);
	hoursRound = Math.round(hoursLeft);
	hoursRemain = hoursLeft - hoursRound;
	hoursRemain = (hoursRemain < 0) ? hoursRemain = 24 - ((hoursRound - hoursLeft)  * 24) : hoursRemain = ((hoursLeft - hoursRound) * 24);
	hoursRemain = Math.round(hoursRemain - 0.5);
	daysLeft = ((enday.getTime() - today.getTime()) / PerDay);
	daysLeft = (daysLeft - 0.5);
	daysRound = Math.round(daysLeft);
	daysRemain = daysRound;
	if (daysRemain == 1) day_rem = ' day, '
		else day_rem = ' days, '
	if (hoursRemain == 1) hour_rem = ' hour, '
		else hour_rem = ' hours, '
	if (minRemain == 1) min_rem = ' minute, '
		else min_rem = ' minutes, '
	if (secsRemain == 1) sec_rem = ' second'
		else sec_rem = ' seconds'
	timeRemain = daysRemain + day_rem + hoursRemain + hour_rem + minRemain + min_rem + secsRemain + sec_rem;
	document.getElementById('nextBirthday').innerHTML = timeRemain;
	timerID = setTimeout('showtime()', 1000);
	timerRunning = true;
	if (daysRemain < 0) year2 = year2 + 1
}

function showtime1() {
	startday = new Date('' + bmonth + ' ' + bday + ', ' + byear + ' 00:00 EDT');
	startday.setYear('' + byear + '');
	today = new Date();
	secsPerDay = 1000 ;
	minPerDay = 60 * 1000 ;
	hoursPerDay = 60 * 60 * 1000;
	PerDay = 24 * 60 * 60 * 1000;
	secsLeft = (today.getTime() - startday.getTime()) / minPerDay;
	secsRound = Math.round(secsLeft);
	secsRemain = secsLeft - secsRound;
	secsRemain = (secsRemain < 0) ? secsRemain = 60 - ((secsRound - secsLeft) * 60) : secsRemain = (secsLeft - secsRound) * 60;
	secsRemain = Math.round(secsRemain);
	minLeft = ((today.getTime() - startday.getTime()) / hoursPerDay);
	minRound = Math.round(minLeft);
	minRemain = minLeft - minRound;
	minRemain = (minRemain < 0) ? minRemain = 60 - ((minRound - minLeft) * 60) : minRemain = ((minLeft - minRound) * 60);
	minRemain = Math.round(minRemain - 0.495);
	hoursLeft = ((today.getTime() - startday.getTime()) / PerDay);
	hoursRound = Math.round(hoursLeft);
	hoursRemain = hoursLeft - hoursRound;
	hoursRemain = (hoursRemain < 0) ? hoursRemain = 24 - ((hoursRound - hoursLeft) * 24)  : hoursRemain = ((hoursLeft - hoursRound) * 24);
	hoursRemain = Math.round(hoursRemain - 0.5);
	daysLeft = ((today.getTime() - startday.getTime()) / PerDay);
	daysLeft = (daysLeft - 0.5);
	daysRound = Math.round(daysLeft);
	daysRemain = daysRound;
	if (daysRemain == 1) day_rem = ' day, '
		else day_rem = ' days, '
	if (hoursRemain == 1) hour_rem = ' hour, '
		else hour_rem = ' hours, '
	if (minRemain == 1) min_rem = ' minute, '
		else min_rem = ' minutes, '
	if (secsRemain == 1) sec_rem = ' second'
		else sec_rem = ' seconds'
	timeRemain = daysRemain + day_rem + hoursRemain + hour_rem + minRemain + min_rem + secsRemain + sec_rem;
	document.getElementById('beenAlive').innerHTML = addCommas(timeRemain);
	timerID = setTimeout('showtime1()', 1000);
	timerRunning = true;
}

window.onload = function() {
 startclock();
}