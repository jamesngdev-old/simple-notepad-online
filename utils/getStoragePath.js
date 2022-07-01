const STORE_PATH = 'storage';
const EXT = '.txt';

module.exports = (id) => {
    return `${STORE_PATH}/${id}${EXT}`;
};
