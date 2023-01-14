const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connections');

const routes = require('./routes');

const PORT = process.env.PORT || 5550;

connectDB();

const server = express();

server.use(express.json());
// server.use(cors());

server.use('/api', routes);

server.get('/', (req, res) => {
	res.status(200).send({ message: 'Running' });
});

server.all('*', (req, res) => {
	res.status(404).send({ message: 'Path not found' });
});

server.use(
	cors({
		origin: [
			'http://localhost',
			'http://localhost:5501',
			'https://adamsackfield.uk',
			'https://adampaulsackfield.github.io/adampaulsackfield.github.io-snake',
		],
	})
);

server.listen(PORT);
