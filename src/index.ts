/* tslint:disable:no-console */
import dotenv = require('dotenv');
import express = require('express');

dotenv.config();
export const app = express();
const port: number = Number(process.env.PORT) || 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
