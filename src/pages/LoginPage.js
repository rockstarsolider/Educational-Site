import "./LoginPage.css"
import { Link } from "react-router-dom";
import rocket from "../style/Screenshot (23).png"
import Button from '../component/Button'
import React, { useState } from "react";

function Login(){

    return(
            <div className="login-page">
                <img src={rocket}/>
                <p className="Login">بهترین روش یادگیری ریاضی و علوم کامپیوتر</p>
                <div className="buttons-login">
                    <Button primary>Facebook   ورود با  </Button>
                    <Button primary>  Google   ورود با  </Button>
                    <Link to='/Educational-Site/Email' className="link-width"><Button secondary>Email ورود با</Button></Link>
                </div>
            <h4 className="login-c">New user?? <Link to='/Educational-Site/SingUp' className="login-link"> SingUp</Link></h4>
            </div>  
    )
    



}
export default Login;
