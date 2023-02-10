const router = require('express').Router();




router.get('/', (req, res) => {
    res.render('allrecipes', {layout: 'main'})
  })
  


module.exports = router;
