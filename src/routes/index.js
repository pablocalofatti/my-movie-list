const express = require('express');
const router = express.Router(); 

const Movie = require('../models/movie');

router.get('/', async (req, res) => {
    const vids = await Movie.find();
    console.log(vids);
    res.render('index', {
        vids
    });
});

router.post('/add', async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.redirect('/');
});

router.get('/turn/:id', async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    movie.status = !movie.status;
    await movie.save();
    res.redirect('/');
});

router.get('/edit/:id', async (req, res) =>{
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.render('edit', {
        movie
    });
});
router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Movie.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Movie.remove({ _id: id});
    res.redirect('/');
})

module.exports = router;