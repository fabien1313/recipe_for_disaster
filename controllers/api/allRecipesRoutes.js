const router = require('express').Router();




router.get('/allrecipes', (req, res) => {
    res.render('allrecipes', {layout: 'main'})
  })
  


module.exports = router;
