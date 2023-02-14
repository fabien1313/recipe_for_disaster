const router = require('express').Router();
const { Recipe,  } = require('../models');

router.get('/', async (req, res) => {
    try {
      req.session.save(() => {
        // We set up a session variable to count the number of times we visit the homepage
        if (req.session.countVisit) {
          // If the 'countVisit' session variable already exists, increment it by 1
          req.session.countVisit++;
        } else {
          // If the 'countVisit' session variable doesn't exist, set it to 1
          req.session.countVisit = 1;
        }
        console.log('here')
        res.render('home', {
          // We send over the current 'countVisit' session variable to be rendered
          countVisit: req.session.countVisit,
        });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    res.render('login', {layout: 'main'})
  })


module.exports = router;
  