const express = require("express");
const router = express.Router();
const outfitsController = require("../controllers/outfitsController");

router.get("/outfits", outfitsController.getOutfits, (req, res) =>
	res.status(200).json(res.locals.outfits)
);

router.post("/newOutfit", outfitsController.addOutfit, (req, res) =>
	res.status(200).json({ success: true })
);

router.delete("/deleteOutfit:id", outfitsController.deleteOutfit, (req, res) =>
	res.status(200).json({ success: true })
);

module.exports = router;
