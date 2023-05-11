require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require("./models/pokemon");
const { connect, connection } = require('mongoose');


// Database connection
connect(process.env.MONGO_URI, {
  // Having these two properties set to true is best practice when connecting to MongoDB
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// This line of code will run the function below once the connection to MongoDB has been established.
connection.once('open', () => {
  console.log('connected to mongo');
});

// View Engine Middleware Configure
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set('views', './views');

// Middleware
app.use(express.urlencoded({ extended: false })); // This enables the req.body

// Custom Middleware
app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});

app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!");
  });

  // Index
  app.get("/pokemon", async (req, res) => {
    console.log("index route")
    try {
      // const foundPokemon = await Pokemon.find({});
      // res.status(200).render("Index", {pokemon: foundPokemon});
      res.render("Index", {pokemon: Pokemon})
    } catch (error) {
      res.status(400).send(error)    
    }
  });

//   // New // renders a form to create a new fruit
// app.get('/pokemon/new', (req, res) => {
//   res.render('New');
// });

// // Create // recieves info from new route to then create a new fruit w/ it
// app.post('/', async (req, res) => {
//   try {
//     req.body.readyToEat = req.body.readyToEat === 'on';
//     const newFruit = await Fruit.create(req.body);
//     console.log(newFruit);
//     //console.log(fruits);
//     // redirect is making a GET request to whatever path you specify
//     res.redirect('/fruits');
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

  //Show
  app.get('/pokemon/:id', async (req, res) => {
    // const foundPokemon = await Pokemon(req.params.id)
    // console.log("foundPokemon", foundPokemon)
    res.render("Show", {pokemon: Pokemon[req.params.id]})
  });

// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });