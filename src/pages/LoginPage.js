import Header from '../component/Header';
import Footer from '../component/Footer';
import Button from '../component/Button';
import {Link} from 'react-router-dom'
import rocket from "../style/unsplash_YwSf1o8s79c.png"


import { TbCalculator, TbSchool, TbEngine, TbBrandGit, TbDatabase, TbRectangle, TbUsersGroup } from 'react-icons/tb';

function LoginPage(){
    const Login= ()=>{
        return(
         <div className='login'>ورود</div>
        )
    }
    const Box= ()=>{
        return(
        <div className='login-page'>
        <button className='facebook' >Facebook ورود با  </button>
        <button className='google'>Google ورود با  </button>
        <button className='email'>Email ورود با  </button>
        <Link to='userpage'><Button className='next'> ادامه</Button></Link>

        </div>
        )
 }
    const Singup= ()=>{
        return(
            <div className='login-page'>
                <Link to='/Educational-Site/SingupPage ' className='Singup'>new user? SingUp</Link>
            </div>
        )
    }

    return(
        <div>
            <Box></Box>
            <Singup></Singup>
            <Footer></Footer>
            
        </div>
   )
 } 


export default LoginPage;