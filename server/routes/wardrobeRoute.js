const express = require('express');
const router = express.Router();
const wardrobeController = require('../controllers/wardrobeController');

// GET items
router.get('/getItems', wardrobeController.getItems, (req, res) =>
  res.status(200).json(res.locals.allItmes)
);

// POST item
router.post('/addItem', wardrobeController.addItem, (req, res) =>
  res.status(200).json({ success: true })
);

// DELETE item
router.delete('/deleteItem:id', wardrobeController.deleteItem, (req, res) =>
  res.status(200).json({ success: true })
);

// psql postgres://zdkkkscr:g4D1FGXn45XwqAn6lW__kVGIAjt5XNfD@queenie.db.elephantsql.com:5432/zdkkkscr

// CREATE TABLE clothing_item (
//   id INT GENERATED ALWAYS AS IDENTITY,
//   url VARCHAR,
//   type VARCHAR
// );

// CREATE TABLE outfits (
//   id INT GENERATED ALWAYS AS IDENTITY,
//   user_id INT,
//   top_id INT,
//   bottom_id INT,
//   shoes_id INT,
//   accessory_id INT
// );

// CREATE TABLE users (
//   id INT GENERATED ALWAYS AS IDENTITY,
//   firstname VARCHAR,
//   lastname VARCHAR,
//   username VARCHAR,
//   password VARCHAR,
//   zipcode INT,
//   user_hash_id INT
// );

module.exports = router;
