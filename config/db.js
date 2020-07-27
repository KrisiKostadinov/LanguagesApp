const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => {
    console.log('Connected to the db');
});