const fs = require('fs');
const getStoragePath = require('../utils/getStoragePath');

module.exports = (req, res) => {
    const { content } = req.body;
    const { id } = req.params;

    const storagePath = getStoragePath(id);
    fs.writeFileSync(storagePath, content);
    res.redirect(`/${id}`);
};
