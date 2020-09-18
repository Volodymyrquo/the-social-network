import React from 'react';
import { Paper,  Typography } from '@material-ui/core';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import {getLoginUserData} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';


const Login = (props) => {

const onSubmit =({email, password, rememberMe}) => { 
    props.getLoginUserData({email, password, rememberMe});
}
if(props.isAuth) {return <Redirect to="/profile" />}

    return (
        <Paper style={{marginTop: "10vh", paddingLeft: "30vw", paddingBottom: "2vh"}}>
         <Typography variant="h3" color="primary" gutterBottom >Login</Typography>
       <LoginForm onSubmit={onSubmit} />
        </Paper>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

 
export default connect(mapStateToProps,{getLoginUserData})(Login);