const React = require("react");
// import React from 'react';
const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
  };
class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        console.log("index", pokemon);
        return (
          <div style={myStyle}>
            <h1>See All The Pokemon!</h1>
            <ul>
              {pokemon.map((pokemon, x) => {
                return (
                  <li key={x}>
                    {/* <a href={`/pokemon/${pokemon._id}`}>{pokemon.name}</a> */}
                    <a href={`/pokemon/${x}`}>{pokemon.name}</a>

                     <br></br>
                    <br />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }}
    module.exports = Index;