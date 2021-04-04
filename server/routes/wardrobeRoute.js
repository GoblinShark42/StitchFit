const express = require('express');
const router = express.Router();
const wardrobeController = require('../controllers/wardrobeController');

// GET ROUTES
// Get entire wardrobe
// router.get("/entireWardrobe", wardrobeController.getWardrobe, (req, res) =>
// 	res.status(200).json(res.locals.wardrobe)
// );

// Get all tops
router.get('/tops', wardrobeController.getTops, (req, res) =>
  res.status(200).json(res.locals.tops)
);

// Get all bottoms
router.get('/bottoms', wardrobeController.getBottoms, (req, res) =>
  res.status(200).json(res.locals.bottoms)
);

// Get all shoes
router.get('/shoes', wardrobeController.getShoes, (req, res) =>
  res.status(200).json(res.locals.shoes)
);

// Get all accessories
router.get('/accessories', wardrobeController.getAccessories, (req, res) =>
  res.status(200).json(res.locals.accessories)
);

// POST ROUTES
// Add one top
router.post('/addTop', wardrobeController.addTop, (req, res) =>
  res.status(200).json({ success: true })
);

// Add one bottom
router.post('/addBottom', wardrobeController.addBottom, (req, res) =>
  res.status(200).json({ success: true })
);

// Add one pair of shoes
router.post('/addShoes', wardrobeController.addShoes, (req, res) =>
  res.status(200).json({ success: true })
);

// Add one accessory
router.post('/addAccessory', wardrobeController.addAccessory, (req, res) =>
  res.status(200).json({ success: true })
);

// DELETE route
router.delete('/tops/:id', wardrobeController.deleteTop, (req, res) =>
  res.status(200).json({ success: true })
);

router.delete('/bottoms/:id', wardrobeController.deleteBottom, (req, res) =>
  res.status(200).json({ success: true })
);

router.delete('/shoes/:id', wardrobeController.deleteShoes, (req, res) =>
  res.status(200).json({ success: true })
);

router.delete(
  '/accessories/:id',
  wardrobeController.deleteAccesory,
  (req, res) => res.status(200).json({ success: true })
);

// psql postgres://zdkkkscr:g4D1FGXn45XwqAn6lW__kVGIAjt5XNfD@queenie.db.elephantsql.com:5432/zdkkkscr

// CREATE TABLE wardrobe (
//   id INT GENERATED ALWAYS AS IDENTITY,
//   tops_id INT,
//   bottoms_id INT,
//   shoes_id INT,
//   accessories_id INT
// );

// CREATE TABLE tops (
//   id INT GENERATED ALWAYS AS IDENTITY,
//   url VARCHAR
// );

// CREATE TABLE bottoms (
//   id INT GENERATED ALWAYS AS IDENTITY,
//   url VARCHAR
// );

// CREATE TABLE shoes (
//   id INT GENERATED ALWAYS AS IDENTITY,
//   url VARCHAR
// );

// CREATE TABLE accessories (
//   id INT GENERATED ALWAYS AS IDENTITY,
//   url VARCHAR
// );

// CREATE TABLE outfits (
//   id INT GENERATED ALWAYS AS IDENTITY,
//   accessory_url VARCHAR,
//   top_url VARCHAR,
//   bottom_url VARCHAR,
//   shoe_url VARCHAR
// );

// CREATE TABLE users (
//   id INT GENERATED ALWAYS AS IDENTITY,
//   firstname VARCHAR,
//   lastname VARCHAR,
//   username VARCHAR,
//   password VARCHAR,
//   wardrobe_id INT,
//   outfits_id INT,
//   zipcode INT,
//   user_hash_id INT
// );

module.exports = router;
