import React, { Component } from 'react';
import { connect } from "react-redux"
import { getLogin, register} from "../action/login.action";
import { withRouter } from "react-router";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';


const styles = {
    card: {
        maxWidth: 445,
    },
    media: {
        objectFit: 'cover',
    },
    root: {
        justifyContent: 'center'
    }
};



class login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
    }
    //method to handle changing user name and password in the input field
    handleChange = (event) => {
        const field = event.target.name;
        this.state.user[field] = event.target.value;
        this.setState({
            user: this.state.user
        })
    }

    //method to send request to backend to authticate user, upon successful authentication, redirect user to contact page
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getLogin(this.state.user).then((data) => {
            if (data.payload.data.success) {
                this.props.history.push('./contact')
            }else{
                alert("Invalid user name or password")
            }

        })
    }

    //method to register a user
    handleRegister = (event) => {
        event.preventDefault();
        this.props.register(this.state.user).then((data) => {
            if (data.payload.data.success) {
                this.props.history.push('./contact')
            }
        })
    }





    render() {
        const { classes } = this.props;
        return (
            <Grid container
                justify="center"
            >
                <Card className={classes.card}>
                    <form onSubmit={this.handleSubmit}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                className={classes.media}
                                height="200"
                                image="https://ixactcontact.wpengine.com/wp-content/uploads/2011/12/people-network-300x300.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="h3">
                                    Log In
                            </Typography>
                                <Typography>
                                    username: <input type="text" className="form-control" name="username" onChange={this.handleChange} />
                                </Typography>
                                <Typography>
                                    password: <input type="password" className="form-control" name="password" onChange={this.handleChange} />
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.root}>
                            <Button value="Login" size="large" color="primary" type="submit">
                                Login
                        </Button>
                        <Button value="Register"size="large" color="primary" onClick={this.handleRegister}>
                                Register
                        </Button>
                        
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        )
    }
}

//subscribe to the store with router, so we can take advantage of pros.history
//getLogin, register are actions from the store, we can dispatch the action to make an request to the backend
export default withRouter(connect(null, { getLogin, register })(withStyles(styles)(login)))