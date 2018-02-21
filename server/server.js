const express = require('express');
const bodyParser = require('body-parser');

const toGraph = require('./lib/toGraph');
const breadthFirst = require('./lib/breadthFirst');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.post('/api/maze', (req, res) => {
	console.log(req.body.contents);

	let {graph, x, y} = toGraph(req.body.contents);
	let result = breadthFirst(graph);

	result.x = x;
	result.y = y;

	res.send(result);
});

app.listen(port, () => console.log(`Listening on port ${port}`));