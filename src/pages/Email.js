import "./Email.css"
import { Link } from "react-router-dom";
import Button from '../component/Button';
import rocket from '../style/Screenshot (23).png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Email(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const navigation = () => {
        navigate('/Educational-Site/UserPage')
    }

    const validation = () => {
        const defaultColor = () => {
            document.getElementById('email1').style.border='1px solid grey'
            document.getElementById('password1').style.border='1px solid grey'
        }

        var state = 0

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            state = state+1
        } else {
            document.getElementById('error').innerHTML='ایمیل صحیح نیست';
            defaultColor()
            document.getElementById('email1').style.border='1px solid red'
            state = state-1
        }

        if (password.length == 0){
            document.getElementById('error').innerHTML='گذرواژه خود را وارد کنید'
            state = state-1
            defaultColor()
            document.getElementById('password1').style.border='1px solid red'
        } else {state = state+1}

        if (email.length == 0){
            document.getElementById('error').innerHTML='ایمیل خود را وارد کنید'
            state = state-1
            defaultColor()
            document.getElementById('email1').style.border='1px solid red'
        } else {state = state+1}

        if(state == 3){navigation()}
        
    }

    return(
        <div className="email-page">
            <img className="rocket" src={rocket}/>
            <p className="Login-1">ورود</p>
            <input id="email1" onChange={(e) => setEmail(e.target.value)} className="email1" placeholder=" ایمیل"></input>
            <input id="password1" onChange={(e) => setPassword(e.target.value)} className="email1" placeholder=" گذرواژه" ></input>
            <p id="error"></p>
            <div onClick={validation}><Button secondary>ورود</Button></div>
        </div>
    )
}
export default Email;