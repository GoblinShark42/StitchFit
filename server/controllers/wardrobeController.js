const db = require('../models/query');

const wardrobeController = {};

// FOR GET REQUESTS
// Get all wardrobe items
// wardrobeController.getWardrobe = (req, res, next) => {
// 	const queryString = `SELECT * FROM wardrobe`;
// 	db.query(queryString)
// 		.then((wardrobe) => {
// 			res.locals.wardrobe = wardrobe.rows;
// 			return next();
// 		})
// 		// if there's an error, call global eror handler
// 		.catch((err) => next(err));
// };

// Get all tops from wardrobe
wardrobeController.getTops = (req, res, next) => {
  const queryString = `SELECT * FROM tops`;
  db.query(queryString)
    .then((tops) => {
      res.locals.tops = tops.rows;
      return next();
    })
    // if there's an error, call global eror handler
    .catch((err) => next(err));
};

// Get all bottoms from wardrobe
wardrobeController.getBottoms = (req, res, next) => {
  const queryString = `SELECT * FROM bottoms`;
  db.query(queryString)
    .then((bottoms) => {
      res.locals.bottoms = bottoms.rows;
      return next();
    })
    .catch((err) => next(err));
};

// Get all shoes from wardrobe
wardrobeController.getShoes = (req, res, next) => {
  const query = 'SELECT * FROM shoes';

  db.query(query)
    .then((data) => {
      res.locals.shoes = data.rows;
      return next();
    })
    .catch((err) => next(err));
};

// Get all accessories from wardrobe
wardrobeController.getAccessories = (req, res, next) => {
  const query = 'SELECT * FROM accessories';

  db.query(query)
    .then((data) => {
      res.locals.accessories = data.rows;
      return next();
    })
    .catch((err) => next(err));
};

// FOR POST REQUESTS
// Add an item to tops
wardrobeController.addTop = (req, res, next) => {
  const { url } = req.body;
  const queryString = `INSERT INTO tops(url)
  VALUES('${url}')`;
  db.query(queryString)
    .then(() => {
      return next();
    })
    // if there's an error, call global eror handler
    .catch((err) => next(err));
};

// Add an item to bottom
wardrobeController.addBottom = (req, res, next) => {
  const { url } = req.body;
  const queryString = `INSERT INTO bottoms(url)
  VALUES('${url}')`;
  db.query(queryString)
    .then(() => {
      return next();
    })
    .catch((err) => next(err));
};

// Add an item to shoes
wardrobeController.addShoes = (req, res, next) => {
  const { url } = req.body;
  const queryString = `INSERT INTO shoes(url)
  VALUES('${url}')`;
  db.query(queryString)
    .then(() => {
      return next();
    })
    .catch((err) => next(err));
};

// Add an item to accessories
wardrobeController.addAccessory = (req, res, next) => {
  const { url } = req.body;
  const queryString = `INSERT INTO accessories(url)
  VALUES('${url}')`;
  db.query(queryString)
    .then(() => {
      return next();
    })
    .catch((err) => next(err));
};

// FOR DELETE REQUESTS
// Delete an item from Tops
wardrobeController.deleteTop = (req, res, next) => {
  const id = parseInt(req.params.id);
  const query = `DELETE FROM tops WHERE id=${id}`;

  db.query(query)
    .then(() => {
      return next();
    })
    // if there's an error, call global eror handler
    .catch((err) => next(err));
};

// Delete an item from Bottoms
wardrobeController.deleteBottom = (req, res, next) => {
  const id = parseInt(req.params.id);
  const query = `DELETE FROM bottoms WHERE id=${id}`;

  db.query(query)
    .then(() => {
      return next();
    })
    .catch((err) => next(err));
};

// Delete an item from Shoes
wardrobeController.deleteShoes = (req, res, next) => {
  const id = parseInt(req.params.id);
  const query = `DELETE FROM shoes WHERE id=${id}`;

  db.query(query)
    .then(() => {
      return next();
    })
    .catch((err) => next(err));
};

// Delete an item from Accesories
wardrobeController.deleteAccesory = (req, res, next) => {
  const id = parseInt(req.params.id);
  const query = `DELETE FROM accessories WHERE id=${id}`;

  db.query(query)
    .then(() => {
      return next();
    })
    .catch((err) => next(err));
};
module.exports = wardrobeController;
