import express from 'express';
import { connectToDatabase } from './db.mjs';
import authRoute from './routes/auth.mjs';
import notesRoute from './routes/notes.mjs';

const app = express();
const port = 3000;
await connectToDatabase();

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.use('/api/v1/auth',authRoute);
app.use('/api/v1/notes',notesRoute);

app.listen(port,()=>{
    console.log(`server listing at http://localhost:${port}`);
})