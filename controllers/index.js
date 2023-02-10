const router = require('express').Router();
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api')
const loginRoutes = require('./loginRoutes')
const allrecipes = require('./allRecipesRoutes')
const cookbook = require('./cookbookRoutes')

router.use('/', homeRoutes)
router.use('/api', apiRoutes)
router.use('/login', loginRoutes)
router.use('/allrecipes', allrecipes)
router.use('cookbook', cookbook)




module.exports = router;
