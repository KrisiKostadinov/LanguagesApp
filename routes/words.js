const router = require('express').Router();
const Word = require('../models/Word');

router.get('/', (req, res) => {
    Word.find().then(words => {
        res.render('dashboard', { words });
    });
});
router.get('/add', (req, res) => res.render('add', { error: null, word: null }));

router.post('/add', async (req, res) => {
    const bulgarian = req.body.bulgarian.trim();
    const english = req.body.english.trim();

    const word = await Word.findOne({ bulgarian, english });

    if(word) {
        res.render('add', { error: 'This word already exists!', word });
    }

    await Word.create({
        bulgarian: bulgarian.trim(),
        english: english.trim(),
    }).catch(err => {
        console.log(err.code);
        res.render('add', { error: err});
    });

    res.redirect('/');
});

module.exports = router;