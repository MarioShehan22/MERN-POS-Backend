const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');
const port = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors())

const userRoute = require('./routes/UserRouter');
const customerRoute = require('./routes/CustomerRouter');
const orderRoute = require('./routes/OrderRoute');
const productRoute = require('./routes/ProductRoute');
const employeeRoute = require('./routes/EmployeeRouter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/silvaposapi')
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started & running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

app.get('/test-api', (req, resp) => {
    return resp.json({ 'message': 'Server started!' });
});

app.use('/api/v1/users', userRoute);
app.use('/api/v1/orders',orderRoute);
app.use('/api/v1/products',productRoute);
app.use('/api/v1/customers',customerRoute);
app.use('/api/v1/employee',employeeRoute);