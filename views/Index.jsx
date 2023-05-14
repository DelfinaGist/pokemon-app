// const React = require("react");
// // import React from 'react';
// const myStyle = {
//   color: '#ffffff',
//   backgroundColor: '#000000',
//   };
// class Index extends React.Component {
//     render() {
//         const { pokemon } = this.props;
//         console.log("index", pokemon);
//         return (
//           <div style={myStyle}>
//             <h1>See All The Pokemon!</h1>
//             <ul>
//               {pokemon.map((pokemon, x) => {
//                 return (
//                   <li key={x}>
//                     {/* <a href={`/pokemon/${pokemon._id}`}>{pokemon.name}</a> */}
//                     <a href={`/pokemon/${x}`}>{pokemon.name}</a>
//                     <br></br>
//                     <br />
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         );
//       }}
//     module.exports = Index;


const React = require("react");

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#EAEAFF",
};

const myStyle = {
  textAlign: "center",
  color: "#8852fe",
  backgroundColor: "#EAEAFF",
};

const aStyle = {
  fontSize: "25px",
  color: "#fc548f",
  textAlign: "center",
  backgroundColor: "#EAEAFF",
};

const ulStyle = {
  textAlign: "center",
  color: "#fc548f",
  fontSize: "25px",
  backgroundColor: "#EAEAFF",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div style={containerStyle}>
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        </div>
        <a style={aStyle} href="/pokemon/new">
          Add new Pokemons
        </a>
        <ul style={ulStyle}>
          {pokemon.map((pokemon, index) => {
            
            return (
              <li key={index}>
                <a href={`/pokemon/${pokemon._id}`}>
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                  </a>
                <br />
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
