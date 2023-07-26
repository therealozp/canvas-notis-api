const express = require('express');
const cors = require('cors');
const canvasAPI = require('./src/canvasAPI/index.js');
const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

app.use(cors());

app.get('/', (req, res) => {
	res.status(404).send('Hello World!');
});

app.get('/assignments', (req, res) => {
	res.send('You are running the assignments endpoint');
});

app.get('/courses', (req, res) => {
	const jsonData = canvasAPI.getCourses();
	jsonData
		.then((data) => {
			res.status(200).send(data);
			// console.log(data);
		})
		.catch((err) => {
			console.err(err);
			res.status(400);
		});
});

app.get('/courses/:id', (req, res) => {
	const jsonData = canvasAPI.getCourseByID(req.params.id);
	jsonData
		.then((data) => {
			res.status(200).send(data);
			// console.log(data);
		})
		.catch((err) => {
			console.err(err);
			res.status(400);
		});
});

app.get('/courses/:id/assignments', (req, res) => {
	const jsonData = canvasAPI.getAssignmentsByCourseID(req.params.id);
	jsonData
		.then((data) => {
			res.status(200).send(data);
			// console.log(data);
		})
		.catch((err) => {
			console.err(err);
			res.status(400);
		});
});

app.listen(PORT, () => {
	console.log('Server is running on port 3000');
});
