import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../action/login.action";

class header extends React.Component {

    handleLogout = (event) =>{
        this.props.logout()
    }

    //using link to instead of <a> tag, so component can be rerendered according to url
    render() {
        return (
            <header>
                <nav className="navbar navbar-default navar-light">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addcontact">Add Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" onClick={this.handleLogout}>Logout</Link>
                        </li>
                    </ul>
                </nav>
            </header>




        );
    }
}

function mapStateToProps({ login }) {
    return { login };
  }

export default connect(mapStateToProps, {logout})(header)