const router = require('express').Router();
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api')
// const loginRoutes = require('./loginRoutes')
// const allrecipes = require('./allRecipesRoutes')
// const cookbook = require('./cookbookRoutes')


// const loginRouter = require('./controllers/loginRoutes');
// const allRecipesRoutes = require('./controllers/allRecipesRoutes');
// const cookbookRoutes = require('./controllers/cookbookRoutes');

router.use('/', homeRoutes)
router.use('/api', apiRoutes)
// router.use('/login', loginRoutes)
// router.use('/allrecipes', allrecipes)
// router.use('cookbook', cookbook)

// app.use('/login', loginRouter)
// app.use('/allrecipes', allRecipesRoutes)
// app.use('/cookbook', cookbookRoutes)


module.exports = router;
