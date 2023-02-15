const router = require('express').Router();




router.get('/', (req, res) => {
    res.render('allrecipes', {layout: 'main'})
  })

// router.get('/api/recipe', (req, res) => {
//     res.sendFile('/js/index.html')
//   })
  


module.exports = router;
