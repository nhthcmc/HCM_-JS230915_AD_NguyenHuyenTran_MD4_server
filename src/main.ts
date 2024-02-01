import express from 'express'
const app = express();
app.use(express.json())

import cors from 'cors'
app.use(cors())

import bodyParser from 'body-parser';
app.use(bodyParser.json())

import Router from './routes'
app.use(Router)

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000/api/v1`);
})