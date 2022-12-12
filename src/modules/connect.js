const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/P-Inventory';
const connect = () => {
return mongoose.connect(URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
autoIndex: false,
})
};
module.exports = connect;