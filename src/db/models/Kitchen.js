const mongoose = require("mongoose");
const { ObjectId } = require("mongoose");

const KitchenSchema = new mongoose.Schema({
title: {
    type: String,
    required: true,
},
value: {
    type: ObjectId,
    required: true,
},

});
const Kitchen = mongoose.model("Kitchen", KitchenSchema);

module.exports = Kitchen;