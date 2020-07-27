const router = require('express').Router();
const Word = require('../models/Word');

router.get('/', (req, res) => {
    Word.find().then(words => {
        res.render('dashboard', { words });
    });
});
router.get('/add', (req, res) => res.render('add'));

router.post('/add', async (req, res) => {
    const { bulgarian, english } = req.body;

    const word = await Word.create({
        bulgarian,
        english,
    }).catch(err => {
        console.log(err.code);
        res.render('add', { error: err});
    });

    res.redirect('/');
});

module.exports = router;