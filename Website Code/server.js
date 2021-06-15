const express = require ('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));

app.use(express.urlencoded({
  extended: true
}));

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.post('/submit-bike-form',jsonParser, (req, res) => {
		// creating variables for the form inputs
	const UserName = req.body.username;
	const BikeStationName = req.body.bikeStation;
	const DayChosen = req.body.daychoise;
	const TimeSlot = req.body.timeslot;

		// creating a object
	response = {
		Users_Name: UserName,
		Closest_Station: BikeStationName,
		Chosen_Day: DayChosen,
		Chosen_Timeslot: TimeSlot,
	}
		// adding the above object to the file in string form
	fs.writeFile('BikeRentData.json', JSON.stringify(response), err =>{
		if (err) return console.log(err);
		console.log('file saved')
	});
	return res.redirect('/confirmationPage.html');
});

app.post('/submit-bus-form',jsonParser, (req, res) => {
		// creating variables for the form inputs
	const UserName = req.body.username;
	const BusStationStart = req.body.busStationStart;
	const BusStationDestination = req.body.busStationEnd;
	const DayChosen = req.body.daychoise;
	const TimeSlot = req.body.timeslot;

		// creating a object
	response = {
		Users_Name: UserName,
		Closest_Station: BusStationStart,
		Destination_Station:BusStationDestination,
		Chosen_Day: DayChosen,
		Chosen_Timeslot: TimeSlot,
	}
		// adding the above object to the file in string form
	fs.writeFile('BusTicketData.json', JSON.stringify(response), err =>{
		if (err) return console.log(err);
		console.log('file saved')
	});
	return res.redirect('/confirmationPage.html');
});

app.post('/submit-car-form',jsonParser, (req, res) => {
		// creating variables for the form inputs
	const UserName = req.body.username;
	const CarStart = req.body.Start;
	const CarDestination = req.body.Destination;
	const DayChosen = req.body.daychoise;
	const TimeSlot = req.body.timeslot;

		// creating a object
	response = {
		Users_Name: UserName,
		Closest_Station: CarStart,
		Destination_Station:CarDestination,
		Chosen_Day: DayChosen,
		Chosen_Timeslot: TimeSlot,
	}
		// adding the above object to the file in string form
	fs.writeFile('CarShareData.json', JSON.stringify(response), err =>{
		if (err) return console.log(err);
		console.log('file saved')
	});
	return res.redirect('/confirmationPage.html');
});

		// listening to port 3000, logs this
app.listen(3000, function(){
	console.log('server listening on port 3000');
});