const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connections');

const routes = require('./routes');

const PORT = process.env.PORT || 5550;
const HOSTNAME = 'localhost';

connectDB();

const server = express();

server.use(express.json());

const corsOptions = {
	origin: 'https://snake.adamsackfield.uk',
	optionsSuccessStatus: 200,
};

server.use(cors(corsOptions));

server.use('/api', routes);

server.get('/', (req, res) => {
	res.status(200).send({ message: 'Running' });
});

server.all('*', (req, res) => {
	res.status(404).send({ message: 'Path not found' });
});

server.listen(PORT, (err) => {
	console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});
