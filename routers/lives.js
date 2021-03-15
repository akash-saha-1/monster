const {
	Router
} = require('express');
const pool = require('./../db/index');

const router = Router();

router.get('/', (request, response, next) => {
	pool.query('SELECT * FROM lives', (err, res) => {
		if (err) return next(err);
		response.json(res.rows);
	});
});

router.get('/conditions', (request, response, next) => {
	pool.query(`SELECT l.monster,l.habitats,h.id,h.name,h.climate,
		h.temp FROM lives l JOIN habitats h on h.name = l.habitats`, (err, res) => {
		if (err) return next(err);
		response.json(res.rows);
	});
});

module.exports = router;