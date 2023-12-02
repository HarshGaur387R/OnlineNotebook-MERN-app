import express from 'express';

const notesRoute = express.Router();

notesRoute.get('/', (req, res) => {
    res.send('Here is your note');
})

export default notesRoute;