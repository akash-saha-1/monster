const {
	Router
} = require('express');
const pool = require('./../db/index');

const router = Router();

router.get('/', (request, response, next) => {
	pool.query('SELECT * FROM habitats ORDER BY id ASC', (err, res) => {
		if (err) return next(err);
		response.json(res.rows);
	});
});

router.get('/:id', (request, response, next) => {
	const {
		id
	} = request.params;

	pool.query('SELECT * FROM habitats WHERE id=$1', [id], (err, res) => {
		if (err) return next(err);
		response.json(res.rows);
	})
});

router.post('/', (request, response, next) => {
	const {
		name,
		climate,
		temp
	} = request.body;

	pool.query('INSERT INTO habitats(name,climate,temp) VALUES ($1,$2,$3)', [name, climate, temp], (err, res) => {
		if (err) return next(err);
		response.redirect('/habitats');
	})
});

module.exports = router;