const router = require('express').Router();
const userRoutes = require('./userRoutes');
const allRecipesRoutes = require('./allRecipesRoutes');

router.use('/users', userRoutes);
router.use('/recipe', allRecipesRoutes)


module.exports = router;
