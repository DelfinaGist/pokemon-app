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
// app.use((req, res, next) => {
//   console.log('Middleware running...');
//   next();
// });



app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!");
  });

  // Index
  app.get("/pokemon", async (req, res) => {
    console.log("index route")
    try {
      const foundPokemon = await Pokemon.find({});
      res.status(200).render("Index", {pokemon: foundPokemon});
      
    } catch (error) {
      res.status(400).send(error)    
    }
  });

  //Show
  app.get('/pokemon/:id', (req, res) => {
    res.send(req.params.id);
  });

// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });