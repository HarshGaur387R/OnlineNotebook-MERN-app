import https_codes from "../config/http_code.mjs";
import notesSchema from '../models/Notes.mjs'


export async function fetchNotes(req, res) {

    try {
        const user = req.user;
        let notesArr = user.Notes;
        const notes = await notesSchema.find({ '_id': { $in: notesArr } });

        return res.status(https_codes.SUCCESS).json({ notes });

    } catch (error) {
        console.error('error from fetchNote\'s catch statement:', error);
        return res.status(https_codes.SERVER_ERROR).json({ error: "error from server." });
    }
}

export async function addNote(req, res) {
    try {
        const user = req.user;
        const { title, description, content, tag } = req.body;

        const note = await notesSchema.create({ createdBy: user._id, title, description, content, tag });

        await user.Notes.push(note._id);
        await user.save();

        return res.status(https_codes.SUCCESS).json({ _id: note._id, title: note.title, description: note.description, tag: note.tag, content: note.content, date: note.date });

    } catch (error) {
        console.error('error from addNote\'s catch statement:', error);
        return res.status(https_codes.SERVER_ERROR).json({ error: "error from server." });
    }
}

export async function updateNote(req, res) {
    try {
        const user = req.user;
        const { noteId, title, description, content, tag } = req.body;

        if ((!title || !title.length >= 1) || (!description || !description.length >= 1)) return res.status(https_codes.BAD_REQUEST).json({ error: "title and description should not be null" });
        if (typeof title !== 'string' || typeof description !== 'string') return res.status(https_codes.BAD_REQUEST).json({ error: "Title and string should be in string type" });
        
        let note = await notesSchema.findById(noteId);
        if (!note) return res.status(https_codes.BAD_REQUEST).json({ error: 'Note does not exist.' });

        if(user._id.toString() !== note.createdBy.toString()) return res.status(https_codes.BAD_REQUEST).json({ error: "Note have permission to update note." });
        
        note = await notesSchema.findByIdAndUpdate(noteId,{title, description, content, tag},{new:true}).select('-createdBy');

        return res.status(https_codes.SUCCESS).json({ note });

    } catch (error) {
        console.error('error from addNote\'s catch statement:', error);
        return res.status(https_codes.SERVER_ERROR).json({ error: "error from server." });
    }
}

export async function deleteNote(req, res) {
    try {

        const user = req.user;
        const { noteId } = req.body;

        let note = await notesSchema.findById(noteId);
        if (!note) return res.status(https_codes.BAD_REQUEST).json({ error: 'Note does not exist.' });

        if (user._id.toString() !== note.createdBy.toString()) return res.status(https_codes.BAD_REQUEST).json({ error: 'Not have permission to delete this note.' });
        await note.deleteOne();

        await user.Notes.pop(note._id);
        await user.save();

        return res.status(https_codes.SUCCESS).json({ msg: "deleted!" });

    } catch (error) {
        console.error('error from deleteNote\'s catch statement:', error);
        return res.status(https_codes.SERVER_ERROR).json({ error: "error from server." });
    }
}