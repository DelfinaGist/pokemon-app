const React = require("react");


class Index extends React.Component {
    render() {
        const { pokemons } = this.props;
        return (
          <div>
            <h1>See All The Pokemon!</h1>
            <ul>
              {pokemons.map((pokemon, i) => {
                return (
                  <li key={i}>
                    <a href={`/pokemons/${pokemon._id}`}>{pokemon.name}</a>
                     <br></br>
                    <br />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
      




//   render() {
//     const myStyle = {
//         color: '#ffffff',
//         backgroundColor: '#000000',
//       };
//     const { pokemon } = this.props;
//     return (
//      <div style={myStyle}>
//        <h1>'See All The Pokemon!'</h1>
//      </div>
//     );
//   }
}
    module.exports = Index;