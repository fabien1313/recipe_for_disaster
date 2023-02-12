const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({})
const app = express();
const PORT = process.env.PORT || 3001;
const userRouter = require('./controllers/api/userRoutes');
const loginRouter = require('./controllers/loginRoutes');
const allRecipesRoutes = require('./controllers/allRecipesRoutes');
const cookbookRoutes = require('./controllers/cookbookRoutes');





app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.use('/users', userRouter)
app.use('/login', loginRouter)
app.use('/allrecipes', allRecipesRoutes)
app.use('/cookbook', cookbookRoutes)



app.get('/', (req, res) => {
  res.render('home', {layout: 'main'})
})



app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
})




// const helpers = require('./utils/helpers');

// const sequelize = require('./config/connection');


// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const hbs = exphbs.create({ helpers });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));






// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');


// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);



// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });



