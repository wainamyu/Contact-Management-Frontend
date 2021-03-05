import React from 'react';
import { connect } from "react-redux";
import Header from "./component/header"

class App extends React.Component {

  //entry poing of the project, index.js passes component into props.children
  render() {
    return (
      <React.Fragment>
        {/* make sure user is logged in before displaying header */}
        {this.props.login != null && this.props.login.success && <Header/>}
        {this.props.children}
      </React.Fragment>
    );
  }
}
//login information comes from the redux store
function mapStateToProps({ login }) {
  return { login };
}

//subscribe to the store
export default connect(mapStateToProps)(App)
