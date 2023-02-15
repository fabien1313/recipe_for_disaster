const router = require('express').Router();
const { Recipe } = require('../../models')


router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll();
    
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    res.render('allrecipes', { recipes })
  } catch (err) {
    res.status(500).json(err);
  }
  })



// router.get('/api/recipe', (req, res) => {
//     res.sendFile('/js/index.html')
//   })
  


module.exports = router;
