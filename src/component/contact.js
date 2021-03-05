import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { getContact, putContact, postContact, deleteContact } from "../action/contact.action";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const columns = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'phoneNum', headerName: 'Phone Number', width: 150, },
];

class contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editContact: {
                id:"",
                firstName: "",
                lastName: "",
                email: "",
                phoneNum: "",
                userId: ""
            }
        }
    }
    //life cycle method to generate list of contact of a user earlier than rendering
    componentDidMount() {
        this.props.getContact(this.props.login.user.id)
    }

    //upon clicking on a row, displaying it on the text field below
    handleRowClick = (event) => {
        this.setState({
            editContact:{
                id: event.row.id === undefined ? " " : event.row.id,
                firstName:event.row.firstName === undefined ? " " :event.row.firstName,
                lastName:event.row.lastName === undefined ? " " : event.row.lastName,
                email:event.row.email === undefined ? " " : event.row.email,
                phoneNum:event.row.phoneNum === undefined ? " " : event.row.phoneNum,
                userId:this.props.login.user.id
            }
        })
    }

    //method to record the changing field
    handleEditChange = (event) =>{
        const field = event.target.name;
        this.state.editContact[field] = event.target.value;
        this.setState({
            editContact: this.state.editContact
        })
    }

    //method dispatch action and send request to backend to update contact
    handleEditClick = (event) =>{
        event.preventDefault();
        if(this.state.editContact.id !== ""){
        this.props.putContact(this.state.editContact)
        }
    }

     //method dispatch action and send request to backend to delete contact
    handleDeleteClick = (event) => {
        event.preventDefault();
        if(this.state.editContact.id !== ""){
        this.props.deleteContact(this.state.editContact.id)
        }
    }



    render() {
        return (
            <div style={{ height: 420, width: '50%', marginLeft: '25%', minWidth: 400 }}>
                <DataGrid onRowClick={this.handleRowClick} rows={this.props.contact} columns={columns} pageSize={7} />

                <h5>Click on above element to Edit or Delete</h5>

                <div style={{ marginTop: 30 }}>
                    <TextField
                        id="filled-required"
                        label="First Name"
                        variant="filled"
                        name="firstName"
                        value = {this.state.editContact.firstName}
                        onChange={this.handleEditChange}
                    />
                    <TextField
                        id="filled-required"
                        label="Last Name"
                        variant="filled"
                        name="lastName"
                        value = {this.state.editContact.lastName}
                        onChange={this.handleEditChange}
                    />
                    <TextField
                        id="filled-required"
                        label="Email"
                        variant="filled"
                        name="email"
                        value = {this.state.editContact.email}
                        onChange={this.handleEditChange}
                    />
                    <TextField
                        id="filled-required"
                        label="Phone Number"
                        variant="filled"
                        name="phoneNum"
                        value = {this.state.editContact.phoneNum}
                        onChange={this.handleEditChange}
                    />
                    <div>
                    <Button onClick={this.handleEditClick}size="large"variant="outlined" color="primary" type="submit"> Edit</Button>
                    <Button onClick={this.handleDeleteClick} size="large"variant="outlined" color="primary" type="submit"> Delete</Button>
                    </div>
                    
                </div>




            </div>
        );
    }
}

//getting login and contact information from store
function mapStateToProps(appState) {
    return {
        login:appState.login,
        contact:appState.contact
    }
}

//getContact, putContact, postContact, deleteContact  are actions we get from the store
export default withRouter(connect(mapStateToProps, { getContact, putContact, postContact, deleteContact })(contact))
