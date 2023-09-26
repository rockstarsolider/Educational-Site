import Header from '../component/Header';
import Footer from '../component/Footer';
import rocket from "../style/unsplash_YwSf1o8s79c.png"
import apple from "../style/bi_apple.svg"
import google from "../style/flat-color-icons_google.svg"
import facebook from "../style/logos_facebook.svg"
import {Link} from 'react-router-dom'
function SingupPage(){
    const Text= ()=>{
        return(
            <div>
                <input placeholder='                                      ادرس ایمیل ' className='input'></input>
                <input placeholder='                                                 گذرواژه' className='input1'></input>
                <input placeholder='                                     تایید گذرواژه' className='input1'></input>
                <div className='conect'>conect with :</div>
                <div  className='Google'>
                <img src={google}/>
                <img src={facebook}/>
                <img src={apple}/>
                </div>
                <Link to='/Educational-Site/Question ' className='next2'>ادامه</Link>

            </div>
        )
    }
    return(
        <div>
        <Header></Header>
        <Text></Text>
        <Footer></Footer>
        </div>


    )

    
    
}
export default SingupPage;