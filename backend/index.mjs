import express from 'express';
import { connectToDatabase } from './db.mjs';
import authRoute from './routes/auth.mjs';
import notesRoute from './routes/notes.mjs';
import userRoute from './routes/user.mjs'
import cors from 'cors';

const app = express();
const port = 5000;
await connectToDatabase();

app.use(cors())
app.use(express.json());

app.get('/', function (req, res) {res.send('Hello World')});

app.use('/api/v1/auth', authRoute);

app.use('/api/v1/notes', notesRoute);

app.use('/api/v1/user', userRoute);

app.listen(port, () => {
    console.log(`server listing at http://localhost:${port}`);
})