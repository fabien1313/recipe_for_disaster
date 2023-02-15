const router = require('express').Router();
const { User } = require('../../models');
const users = [{ name: 'hasufbaf' }]
const seed = require('../../seeds/seed.json')


router.get('/', (req, res) => {
  res.json(seed)
})

router.get('/')


// Creates new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      // username: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    }); console.log(dbUserData)
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



//Logs in User
router.post('/login', async (req, res) => {
  try {
    
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
