const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');


require('dotenv/config');


const productsRouter = require('./routers/products');


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));


//Routers
const productsRoutes = require('./routers/products');
const categoriesRoutes = require('./routers/categories');
const usersRoutes = require('./routers/users');
const ordersRoutes = require('./routers/orders');


const api = process.env.API_URL;

//Database
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'
})
.then(() => {
    console.log('Database connection is ready...');
})
.catch((err) => {
    console.log(err);
})

//Server
app.listen(3000, () => {
    
    console.log('Server is running on http://localhost:3000');
});