import mongoose, { Schema } from "mongoose";

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
        unique: true
    },
    tag:{
        type: String,
        required: true,
        unique: true
    },
    date:{
        type: Date,
        default :Date.now
    }
});

export default mongoose.model('user',NotesSchema);