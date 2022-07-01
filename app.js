const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const randomString = require('./utils/randomString');

const viewController = require('./controllers/view.controller');
const updateController = require('./controllers/update.controller');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const id = randomString(10);
    res.redirect(`/${id}`);
});

app.get('/:id', viewController);

app.post('/:id', updateController);

app.listen(PORT, () => {
    console.log(`Notepad app listening on port ${PORT}`);
});
