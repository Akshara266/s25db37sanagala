const mongoose = require("mongoose")
const GadgetsSchema = mongoose.Schema({
gadget_name: String,
brand: String,
battery_life: Number
})
module.exports = mongoose.model("Gadgets", 
GadgetsSchema)