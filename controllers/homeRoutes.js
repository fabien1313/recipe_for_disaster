const router = require('express').Router();
const { User } = require('../../models');

// router.get('/', async (res, req) => {
    
// })








// req.session.save(() => {
//     // We set up a session variable to count the number of times we visit the homepage
//     if (req.session.countVisit) {
//       // If the 'countVisit' session variable already exists, increment it by 1
//       req.session.countVisit++;
//     } else {
//       // If the 'countVisit' session variable doesn't exist, set it to 1
//       req.session.countVisit = 1;
//     }

//     res.render('homepage', {
//       galleries,
//       // We send over the current 'countVisit' session variable to be rendered
//       countVisit: req.session.countVisit,
//     });
//   });