import mongoose from "mongoose";

const peepSchema = mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    tags: { type: String },
    like: { type: Number, default: 0 },
    createdAt: { type: Date, default: new Date() }
});

const PeepModel = mongoose.model('peeps', peepSchema);
//PeepModel must have author, title, message, tags, like and date of creation! 

export default PeepModel;