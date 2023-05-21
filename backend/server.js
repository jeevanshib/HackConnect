const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const{readdirSync} = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

let allowed = ['http://localhost:3000', 'some other link'];
app.use(cors());


//ROUTES
readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)))


//DATABSE
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
}).
then(() => console.log('Database Connected Successfully'))
.catch(err => console.log('DB Connection Error', err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

