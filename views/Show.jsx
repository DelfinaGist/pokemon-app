import React from "react";

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    console.log(pokemon);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#EAEAFF",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#8852fe", marginBottom: "10px" }}>See All The Pokemon?</h1>
        <h1 style={{ textAlign: "center", color: "#8852fe", marginBottom: "30px" }}>Gotta Catch 'Em All!</h1>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <img
          src={`http://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
          alt={pokemon.name}
          style={{ width: "300px", height: "300px", marginBottom: "20px" }}
        />
        <a href="/pokemon" style={{ fontSize: "15pt", color: "#5f51fe" }}>Go Back</a>
      </div>
    );
  }
}

module.exports = Show;


// const React = require("react")

// class Show extends React.Component {
//   render() {
    
//     const fruit = this.props.fruit
//     return (
//       <div>
//         <h1> Show Page </h1>
//           The {fruit.name} is {fruit.color} <br />
//           {fruit.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
//       </div>
//     )
//   }
// }

// module.exports = Show