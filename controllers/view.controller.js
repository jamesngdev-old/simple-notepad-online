const fs = require('fs');
const getStoragePath = require('../utils/getStoragePath');

const STORE_PATH = 'storage';
const EXT = '.txt';

module.exports = (req, res) => {
    const { id } = req.params;
    const filePath = getStoragePath(id);

    let content = '';

    if (fs.existsSync(filePath)) {
        content = fs.readFileSync(filePath, 'utf8');
    }

    res.render('notepad', { content, id });
};
