const express = require('express');
const bodyParser = require('body-parser');
const monsters = require('./routers/monsters');
const habitats = require('./routers/habitats');
const lives = require('./routers/lives');
const app = express();

app.use(bodyParser.json());

app.use('/monsters', monsters);
app.use('/habitats', habitats);
app.use('/lives', lives);

app.use((err, req, res, next) => {
	res.json(err);
});

const port = 300;

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;