import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { postContact } from "../action/contact.action";
import { connect } from "react-redux"

// creating an add contact page is just for the purpose of demonstrating a single page application
//this should not be needed in general
class addContact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contact:{
               firstName:"",
               lastName:"",
               email:"",
               phoneNum:"",
               userId:"" 
            }
        }
    }

    //method to record changing fields
    handleChange = (event) => {
        const field = event.target.name;
        this.state.contact[field] = event.target.value;
        this.setState({
            contact: this.state.contact
        })
    }

    //method to dispatch a new contact action of a user
    handleSubmit = (event) => {
        event.preventDefault();
        this.state.contact.userId = this.props.login.user.id
        this.setState({
            contact:{
                userId:this.state.contact.userId
            }
        })
        this.props.postContact(this.state.contact)
    }


    

    render() {

        return (
            <form  style={{marginLeft: '25%'}} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <TextField  name="firstName"style={{padding: 10}} id="filled-basic" label="First Name" variant="filled" onChange={this.handleChange}/>
                <TextField  name="lastName"style={{padding: 10}} id="filled-basic" label="Last Name" variant="filled" onChange={this.handleChange}/>
                <TextField  name="email"style={{padding: 10}} id="filled-basic" label="Email" variant="filled" onChange={this.handleChange}/>
                <TextField  name="phoneNum"style={{padding: 10}} id="filled-basic" label="Phone Number" variant="filled" onChange={this.handleChange}/>
                <Button size="large"variant="outlined" color="primary" type="submit"> Add</Button>
            </form>
        );
    }
}


function mapStateToProps({ login }) {
    return { login };
  }

export default connect(mapStateToProps, {postContact})(addContact)
