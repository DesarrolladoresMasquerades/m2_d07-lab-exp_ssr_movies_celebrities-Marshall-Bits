const res = require("express/lib/response");

const router = require("express").Router();

const Movie = require("../models/Movie.model")

router.get('/', (req, res, next) => {
    Movie.find()
        .then((dbMovies) => {
            res.render("movies/movies", { dbMovies })
        })
})

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => res.render("movies/movie-details", movie))
})

router.post('/:id/delete', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id)
        .then(res.redirect("/"))
})

router.get('/create', (req, res, next) => {
    res.render('movies/new-movie')
});

router.post('/create', (req, res, next) => {
    const title = req.body.title
    const genre = req.body.genre
    const plot = req.body.plot

    Movie.create({ title, genre, plot })
        .then(res.redirect("/movies"))

})

module.exports = router;

