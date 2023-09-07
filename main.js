const currentDayOfTheWeek = document.getElementById("currentDayOfTheWeek");
const timeInUTCInMilliseconds = document.getElementById("currentUTCTime");

const daysOfTheWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

function getTime() {
	let date = new Date();
	let dayOfTheWeek = date.getDay();
	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDate();
	let hour = date.getHours();
	let mins = date.getMinutes();
	let secs = date.getSeconds();
	let milliSecs = date.getMilliseconds();

	let milliSecsInUTC = Date.UTC(year, month, day, hour, mins, secs, milliSecs);

	return { dayOfTheWeek, milliSecsInUTC };
}

const { dayOfTheWeek, milliSecsInUTC } = getTime();

currentDayOfTheWeek.innerHTML = daysOfTheWeek[dayOfTheWeek];
timeInUTCInMilliseconds.textContent = milliSecsInUTC;
