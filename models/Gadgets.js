const mongoose = require("mongoose")
const GadgetsSchema = mongoose.Schema({
    gadget_name: {
        type: String,
        required: [true, 'Gadget name is required'],
        minlength: [2, 'Gadget name must be at least 2 characters long'],
        maxlength: [100, 'Gadget name must be at most 100 characters long']
    },
    brand: {
        type: String,
        required: [true, 'Brand is required'],
        minlength: [2, 'Brand must be at least 2 characters long'],
        maxlength: [50, 'Brand must be at most 50 characters long']
    },
    battery_life: {
        type: Number,
        required: [true, 'Battery life is required'],
        min: [1, 'Battery life must be at least 1 hour'],
        max: [100, 'Battery life must not exceed 100 hours']
    }

})
module.exports = mongoose.model("Gadgets",
    GadgetsSchema)