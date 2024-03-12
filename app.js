const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const sequelize = require('./util/database');
const userRoutes = require('./routes/User')


const User = require('./models/User')

var cors = require('cors');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());

app.userRoutes = require('./models/User')

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoutes)

app.get('/', (req, res) => {
    // Send the HTML registration form file
    res.sendFile(path.join(__dirname, 'views', 'User.html'));
});

sequelize
.sync()
.then(result => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});