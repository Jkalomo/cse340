const Util = {}

/* ************************
 * Constructs the nav HTML unordered list
 ************************** */
Util.getNav = async function () {
  // Static navigation for now
  let list = "<ul>"
  list += '<li><a href="/" title="Home page">Home</a></li>'
  list += '<li><a href="/inv/type/1" title="Sedan vehicles">Sedan</a></li>'
  list += '<li><a href="/inv/type/2" title="SUV vehicles">SUV</a></li>'
  list += '<li><a href="/inv/type/3" title="Truck vehicles">Truck</a></li>'
  list += "</ul>"
  return list
}

/* **************************************
* Build the classification view HTML
* ************************************ */
Util.buildClassificationGrid = async function(data){
  let grid = '<p class="notice">Vehicle inventory coming soon.</p>'
  return grid
}

/* **************************************
* Build the vehicle detail view HTML
* ************************************ */
Util.buildVehicleDetail = async function(vehicle){
  let detail = '<div class="vehicle-detail">'
  detail += '<h1>Vehicle Details Coming Soon</h1>'
  detail += '<p>Database integration in progress.</p>'
  detail += '</div>'
  return detail
}

/* ****************************************
 * Middleware For Handling Errors
 **************************************** */
Util.handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

module.exports = Util