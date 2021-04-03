const db = require('../models/query');

const wardrobeController = {};

wardrobeController.getShoes = (req, res, next) => {
  const query = 'SELECT * FROM shoes';

  db.query(query)
    .then((data) => {
      if (data.rows.length >= 1) {
        res.locals.shoes = data.rows;
      } else {
        res.locals.shoes = [];
      }
      next();
    })
    .catch((err) => {
      console.log(err);
      next({ log: `error: wardrobeController.getShoes ` });
    });
};
module.exports = wardrobeController;
