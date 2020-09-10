import React from 'react';
import { Paper,  Typography } from '@material-ui/core';
import LoginForm from './LoginForm';


const Login = (props) => {

const onSubmit =(formData) => {
    console.log(formData)
}

    return (
        <Paper style={{marginTop: "10vh", paddingLeft: "30vw", paddingBottom: "2vh"}}>
         <Typography variant="h3" color="primary" gutterBottom >Login</Typography>
       <LoginForm onSubmit={onSubmit} />
        </Paper>
    )
}

 
export default Login;