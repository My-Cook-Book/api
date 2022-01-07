const mongoose = require("mongoose");
const { ObjectId } = require("mongoose");

const InstructionSchema = new mongoose.Schema({
description: {
    type: String,
    required: true,
},

});
const Instruction = mongoose.model("instructions", InstructionSchema);

module.exports = Instruction;
