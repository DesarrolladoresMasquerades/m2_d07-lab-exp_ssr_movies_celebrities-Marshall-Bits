const res = require("express/lib/response");

const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model")

router.get('/', (req, res, next) => {
    Celebrity.find()
    .then((dbCelebrities)=>{
        res.render("celebrities/celebrities", {dbCelebrities})
    })
})

router.get('/create', (req, res, next) => {
    res.render('celebrities/new-celebrity')
});

router.post('/create', (req, res, next) => {
    const name = req.body.name
    const occupation = req.body.occupation
    const catchPhrase = req.body.catchPhrase
    console.log(name, occupation, catchPhrase);

    Celebrity.create({ name, occupation, catchPhrase })
        .then(res.redirect("/celebrities"))

})

module.exports = router;

