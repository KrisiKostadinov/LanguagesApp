const { mongoose, model, Schema } = require('mongoose');

const WordSchema = new Schema({
    bulgarian: {
        type: String,
        required: true,
    },

    english: {
        type: String,
        required: true,
    }
});

const Word = model('Word', WordSchema);

module.exports = Word;