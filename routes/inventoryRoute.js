const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")
const utilities = require("../utilities/")

// Build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId))

// Build vehicle detail view
router.get("/detail/:invId", utilities.handleErrors(invController.buildByInventoryId))

module.exports = router