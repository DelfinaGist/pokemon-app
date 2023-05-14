const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#8852fe", marginTop: "-175px", marginLeft: "5px" }}>Create New Pokemon</h1>
        <form action="/pokemon/create" method="POST">
          <div style={{ display: "inline-block" }}>
            <input type="text" name="name" style={{ color: "#fc548f" }} />
          </div>
          <br />
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#EAEAFF",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <New />
      </div>
    );
  }
}

module.exports = App;
