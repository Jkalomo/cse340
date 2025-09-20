// Enhanced mock data with proper formatting requirements
const mockVehicles = [
  {
    inv_id: 1,
    inv_make: "Toyota",
    inv_model: "Camry",
    inv_year: 2020,
    inv_price: 25000,
    inv_miles: 15000,
    inv_color: "Silver",
    inv_image: "/images/vehicles/camaro.jpg",
    inv_thumbnail: "/images/vehicles/camaro.jpg",
    inv_description: "Reliable sedan with excellent fuel economy and advanced safety features. Perfect for daily commuting and family trips.",
    classification_id: 1,
    classification_name: "Sedan"
  },
  {
    inv_id: 2,
    inv_make: "Honda",
    inv_model: "CR-V",
    inv_year: 2019,
    inv_price: 28500,
    inv_miles: 22000,
    inv_color: "Blue",
    inv_image: "/images/vehicles/aerocar.jpg",
    inv_thumbnail: "/images/vehicles/aerocar.jpg",
    inv_description: "Versatile SUV perfect for families. Spacious interior, excellent cargo capacity, and outstanding reliability record.",
    classification_id: 2,
    classification_name: "SUV"
  },
  {
    inv_id: 3,
    inv_make: "Ford",
    inv_model: "F-150",
    inv_year: 2021,
    inv_price: 32750,
    inv_miles: 8500,
    inv_color: "Red",
    inv_image: "/images/vehicles/batmobile.jpg",
    inv_thumbnail: "/images/vehicles/batmobile.jpg",
    inv_description: "America's best-selling truck. Powerful V8 engine, impressive towing capacity, and rugged dependability.",
    classification_id: 3,
    classification_name: "Truck"
  }
]

/* ***************************
 *  Get all classification data
 ************************** */
async function getClassifications(){
  return {
    rows: [
      { classification_id: 1, classification_name: "Sedan" },
      { classification_id: 2, classification_name: "SUV" },
      { classification_id: 3, classification_name: "Truck" }
    ]
  }
}

/* ***************************
 *  Get inventory by classification
 ************************** */
async function getInventoryByClassificationId(classification_id) {
  return mockVehicles.filter(vehicle => vehicle.classification_id == classification_id)
}

/* ***************************
 *  Get vehicle by inventory ID - Uses "Prepared Statement" approach
 ************************** */
async function getInventoryById(inv_id) {
  // Simulate parameterized query approach
  const id = parseInt(inv_id) // Sanitize input
  return mockVehicles.find(vehicle => vehicle.inv_id === id)
}

module.exports = { getClassifications, getInventoryByClassificationId, getInventoryById }