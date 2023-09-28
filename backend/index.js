import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/router.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', router);

app.listen(5000, () => console.log(`Server running on port: 5000`));