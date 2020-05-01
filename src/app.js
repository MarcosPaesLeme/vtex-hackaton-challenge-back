const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const productsRoute = require('./routes/productRoutes');
const usersRoute = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');
const orderedRoutes = require('./routes/orderedRoutes');
const unitRoutes = require('./routes/unitRoutes');

app.use(cors({
    origin: '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'UPDATE', 'PUT', 'PATCH', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));


app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: false }));

app.use('/product', productsRoute);
app.use('/user', usersRoute);
app.use('/company', companyRoutes);
app.use('/ordered', orderedRoutes);
app.use('/unit', unitRoutes)

module.exports = app;
