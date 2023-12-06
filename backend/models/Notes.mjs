import mongoose, { Schema } from "mongoose";

const NotesSchema = new Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Users',
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    tag: {
        type: String,
        default: 'General',
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('notes', NotesSchema);