const express = require('express');
const router = express.Router();
const wardrobeController = require('../controllers/wardrobeController');

// GET routes for many items
router.get('/entireWardrobe', (req, res) => res.status(200).json({}));

router.get('/tops', (req, res) => res.status(200).json({}));

router.get('/bottoms', (req, res) => res.status(200).json({}));

router.get('/shoes', (req, res) => res.status(200).json({}));

router.get('/accessories', (req, res) => res.status(200).json({}));

// GET one wardrobe item
router.get('/oneWardrobeItem', (req, res) => res.status(200).json({}));

// POST route
router.post('/addWardrobeItem', (req, res) =>
  res.status(200).json({ success: true })
);

// DELETE route
router.delete('/deleteWardrobeItem', (req, res) =>
  res.status(200).json({ success: true })
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
