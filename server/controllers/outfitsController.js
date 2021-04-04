const db = require("../models/query");

const outfitsController = {};

// GET all outits
outfitsController.getOutfits = (req, res, next) => {
	const queryString = `SELECT * FROM outfits`;
	db.query(queryString)
		.then((outfits) => {
			console.log(outfits);
			res.locals.outfits = outfits.rows;
			return next();
		})
		// if there's an error, call global error handler
		.catch((err) => next(err));
};

// POST new outfit combination
outfitsController.addOutfit = (req, res, next) => {
	const {
		outfit_name,
		user_id,
		accessory_id,
		top_id,
		bottom_id,
		shoes_id,
	} = req.body;
	const values = [
		outfit_name,
		user_id,
		accessory_id,
		top_id,
		bottom_id,
		shoes_id,
	];
	const queryString = `INSERT INTO outfits(outfit_name,
		user_id,
		accessory_id,
		top_id,
		bottom_id,
		shoes_id)
    VALUES($1, $2, $3, $4, $5, $6)`;
	db.query(queryString, values)
		.then(() => {
			return next();
		})
		// if there's an error, call global error handler
		.catch((err) => {
			next(err);
		});
};

// DELETE outfit
outfitsController.deleteOutfit = (req, res, next) => {
	const id = parseInt(req.params.id);
	const query = `DELETE FROM outfits WHERE id=${id}`;

	db.query(query)
		.then(() => {
			return next();
		})
		// if there's an error, call global error handler
		.catch((err) => next(err));
};

module.exports = outfitsController;
