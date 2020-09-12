import React from 'react';
import { Paper,  Typography } from '@material-ui/core';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import {getLoginUserData} from '../../redux/auth-reducer'


const Login = (props) => {

const onSubmit =({email, password, rememberMe}) => {
    props.getLoginUserData({email, password, rememberMe});
}

    return (
        <Paper style={{marginTop: "10vh", paddingLeft: "30vw", paddingBottom: "2vh"}}>
         <Typography variant="h3" color="primary" gutterBottom >Login</Typography>
       <LoginForm onSubmit={onSubmit} />
        </Paper>
    )
}

const mapStateToProps = (state) => ({});
 
export default connect(mapStateToProps,{getLoginUserData})(Login);