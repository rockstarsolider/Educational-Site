import "./SingUp.css";
import { Link } from "react-router-dom";
import Button from '../component/Button';
import luanch from '../style/Screenshot (24).png';
import { useState } from "react";

function SingUp (){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')

    const validateForm = () => {
        const defaultColor = () => {
            document.getElementById('email').style.border='1px solid grey'
            document.getElementById('password').style.border='1px solid grey'
            document.getElementById('firstname').style.border='1px solid grey'
            document.getElementById('lastname').style.border='1px solid grey'
            document.getElementById('age').style.border='1px solid grey'
        }

        let countUpperCase = 0
        let countLowerCase = 0
        let countDigit = 0
        let countSpecialCharacters = 0

        for (let i = 0; i < password.length; i++) {
            document.getElementById('reaction').innerHTML=' ';

            const specialChars = [
              '!',
              '@',
              '#',
              '$',
              '%',
              '^',
              '&',
              '*',
              '(',
              ')',
              '_',
              '-',
              '+',
              '=',
              '[',
              '{',
              ']',
              '}',
              ':',
              ';',
              '<',
              '>',
            ]
      
            if (specialChars.includes(password[i])) {
              countSpecialCharacters++
            } else if (!isNaN(password[i] * 1)) {
              countDigit++
            } else {
              if (password[i] == password[i].toUpperCase()) {
                countUpperCase++
              }
              if (password[i] == password[i].toLowerCase()) {
                countLowerCase++
              }
            }

            if (countLowerCase == 0) {
                document.getElementById('reaction').innerHTML='گذرواژه باید شامل حداقل یک حرف کوچک باشد';
                defaultColor()
                document.getElementById('password').style.border='1px solid red'
            }
          
            if (countUpperCase == 0) {
                document.getElementById('reaction').innerHTML='گذرواژه باید شامل حداقل یک حرف بزرگ باشد';
                defaultColor()
                document.getElementById('password').style.border='1px solid red'
            }
          
            if (countDigit == 0) {
                document.getElementById('reaction').innerHTML='گذرواژه باید شامل حداقل 1 عدد باشد';
                defaultColor()
                document.getElementById('password').style.border='1px solid red'
            }
          
            if (countSpecialCharacters == 0) {
                document.getElementById('reaction').innerHTML='حداقل یک حرف ویژه(@,#,!,...) وارد نمایید';
                defaultColor()
                document.getElementById('password').style.border='1px solid red'
            }
        }

        if (password.length < 8) {
            document.getElementById('reaction').innerHTML='گذرواژه نباید کمتر از 8 حرف باشد';
            defaultColor()
            document.getElementById('password').style.border='1px solid red'
        }

        if (firstName.length == 0) {
            document.getElementById('reaction').innerHTML='نام کوچک نباید خالی باشد';
            defaultColor()
            document.getElementById('firstname').style.border ='1px solid red'
        }

        if (lastName.length == 0) {
            document.getElementById('reaction').innerHTML='نام خانوادگی نباید خالی باشد';
            defaultColor()
            document.getElementById('lastname').style.border='1px solid red'
        }

        if (age > 100 || age < 7 ){
            document.getElementById('reaction').innerHTML='سن را به عدد و بین 7 تا 100 وارد کنید';
            defaultColor()
            document.getElementById('age').style.border='1px solid red'
        }

        if (age.length == 0) {
            document.getElementById('reaction').innerHTML='سن نباید خالی باشد';
            defaultColor()
            document.getElementById('age').style.border='1px solid red'
        }

        if (email.length == 0){
            document.getElementById('reaction').innerHTML='ایمیل را وارد کنید';
            defaultColor()
            document.getElementById('email').style.border='1px solid red'
        }
    }

    return(
        <div className="main">
        <img className="lunch" src={luanch}/>
        <div className="signup">
            <h2 className="loginn">ثبت نام</h2>
            <input id="email" className="email" placeholder=" ایمیل" onChange={(e) => setEmail(e.target.value)}></input>
            <input id="password" className="email" placeholder=" گذرواژه"  onChange={(e) => setPassword(e.target.value)}></input>
            <div className="name-con">
                <input id="lastname" className="name1" placeholder="نام خانوادگی" onChange={(e) => setLastName(e.target.value)}></input>
                <input type="text" id="firstname" className="name1" placeholder="نام" onChange={(e) => setFirstName(e.target.value)}></input>
            </div>
            <input type="number" id="age" className="email" placeholder="سن" onChange={(e) => setAge(e.target.value)}></input>
            <p id="reaction"></p>
            <div onClick={validateForm}><Button primary>ثبت نام</Button></div>
        </div>
        </div>
    );
};

export default SingUp;