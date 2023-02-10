const router = require('express').Router();




router.get('/', (req, res) => {
    res.render('cookbook', {layout: 'main'})
  })
  


module.exports = router;