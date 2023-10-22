import "./SingUp.css";
import { Link } from "react-router-dom";
import Button from '../component/Button';
import luanch from '../style/Screenshot (24).png'
import React, { useState } from "react";
import { useForm } from 'react-hook-form'

function SingUp() {
    return (
      <div className="main">
        <img src={luanch} />
        <div className="signup">
          <h2 className="loginn">ثبت نام</h2>
          <input  className="email" placeholder=" ایمیل" />
          <input className="email" placeholder=" گذرواژه" />
          <div className="name-con">
            <input className="name1" placeholder="نام خانوادگی" />
            <input className="name" placeholder="نام" />
          </div>
          <input className="email" placeholder="سن" />
          <Link to="/Educational-Site/Question1" className="button-up">
            <Button primary>ثبت نام</Button>
          </Link>
        </div>
      </div>
  );
}
export default SingUp;