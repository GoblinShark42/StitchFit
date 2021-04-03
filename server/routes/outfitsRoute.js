const express = require('express');
const router = express.Router();
const outfitsController = require('../controllers/outfitsController');

router.get('/allOutfits', (req, res) => res.status(200).json({}));

router.post('/newOutfit', (req, res) => res.status(200).json({ sucess: true }));

router.delete('/outfit', (req, res) => res.status(200).json({ sucess: true }));

module.exports = router;