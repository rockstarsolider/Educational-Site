import './PreSignup.css'
import { Link } from 'react-router-dom'
import {TbArrowLeft} from 'react-icons/tb'
import { useState } from 'react'
import { gsap } from 'gsap'
import Button from '../components/Button'

function PreSignup() {
    const pageData = [
        {
            dialog: 'سلام خوش آمدی',
            img:'rob1.png'
        },
        {
            dialog: 'بریم شروع کنیم',
            img: 'rob2.png'
        },
        {
            dialog: 'تو از کدام شهر هستی؟',
            img: 'rob1.png',
            boxProps: [
                {
                city:'شیراز',
                img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic_II-Pdrn7X.png?width=20"
                },
                {
                city:'تهران',
                img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/First_Choice_1-Bx5Qz6.png?width=20"
                },
                {
                city:'اصفهان',
                img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/First_Choice_1-Bx5Qz6.png?width=20"
                },
                {
                city:'تبریز',
                img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/First_Choice_1-Bx5Qz6.png?width=20"
                },
                {
                city:'کرج',
                img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/First_Choice_1-Bx5Qz6.png?width=20"
                }
            ]
        },
        {
            dialog: 'چه چیزی دوست داری یاد بگیری؟',
            img: 'rob1.png',
            boxProps: [
                {
                city:'طراحی وب',
                img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic_II-Pdrn7X.png?width=20"
                },
                {
                city:'هوش مصنوعی',
                img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/First_Choice_1-Bx5Qz6.png?width=20"
                },
                {
                city:'بازی سازی',
                img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/First_Choice_1-Bx5Qz6.png?width=20"
                },
            ]
        },
        {
            dialog: 'چرا طراحی وب یاد میگیری؟',
            img: 'rob1.png',
            boxProps: [
                {
                city:'اصرار خانواده',
                img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic_II-Pdrn7X.png?width=20"
                },
                {
                city:'کسب مهارت',
                img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/First_Choice_1-Bx5Qz6.png?width=20"
                },
                {
                city:'کسب درآمد',
                img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/First_Choice_1-Bx5Qz6.png?width=20"
                },
                {
                city:'موارد دیگر',
                img:"https://ds055uzetaobb.cloudfront.net/brioche/chapter/First_Choice_1-Bx5Qz6.png?width=20"
                },
            ]
        },
        {
            dialog: 'میدونیم خیلی سخته که همیشه با انگیزه باشی ',
            img:'rob1.png'
        },
        {
            dialog: 'ما در مایندو بهت کمک میکنیم تا همیشه فعال بمونی',
            img:'rob2.png'
        },
        {
            dialog: 'میخوای بهتر بهت کمک کنیم تا به هدفت برسی؟',
            img:'rob1.png'
        },
    ]

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [progValue, setProgValue] = useState(12)
    
    const [arg, setArg] = useState('')

    const nextPage = () => {
        setCurrentPage(currentPage+1)
        setProgValue(progValue+12)
    }

    const Box = () => {
        const [topping, setTopping] = useState('')
        const [prevButton, setPrevButton] = useState('0')
        const setTop = (event,item)=> {
            setTopping(item)
            document.getElementById(prevButton).style.border='1px solid grey'
            document.getElementById(event.currentTarget.id).style.border='1px solid blue'
            setPrevButton(event.currentTarget.id)
            document.getElementById('continue').style.display='block'
        }
        
        return(
            pageData[currentPage].boxProps.map((item, index) => {
                return(
                    <button key={index} id={index} onClick={(event) => setTop(event,item.city)} className='box-comp'>
                    <p>{item.city}</p>
                    <img src={item.img}/>
                    </button>
                )
            })
        )
    }

    const SignUpForm = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [passwordCon, setPasswordCon] = useState('')

        const validateForm = () => {
            const defaultColor = () => {
                document.getElementById('email').style.border='1px solid grey'
                document.getElementById('password').style.border='1px solid grey'
            }

            defaultColor()

            document.getElementById('reaction').innerHTML=' ';

            if (password.length < 8) {
                document.getElementById('reaction').innerHTML='گذرواژه نباید کمتر از 8 حرف باشد';
                defaultColor()
                document.getElementById('password').style.border='1px solid red'
            }

            if (passwordCon !== password) {
                document.getElementById('reaction').innerHTML='گذرواژه مطابقت ندارد';
                defaultColor()
                document.getElementById('passwordCon').style.border='1px solid red'
            }

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){} else {
                document.getElementById('reaction').innerHTML='ایمیل صحیح نیست';
                defaultColor()
                document.getElementById('email').style.border='1px solid red'
            }
    
            if (email.length == 0){
                document.getElementById('reaction').innerHTML='ایمیل را وارد کنید';
                defaultColor()
                document.getElementById('email').style.border='1px solid red'
            }
        }

        return (
            <div className="signup">
                <input id="email" className="email" placeholder=" ایمیل" onChange={(e) => setEmail(e.target.value)}></input>
                <input id="password" type="password" className="email" placeholder=" گذرواژه"  onChange={(e) => setPassword(e.target.value)}></input>
                <input id="passwordCon" type="password" className="email" placeholder="تایید گذرواژه"  onChange={(e) => setPasswordCon(e.target.value)}></input>
                <p id="reaction"></p>
                <div onClick={validateForm}><Button primary>ثبت نام</Button></div>
                <p>-------------   یا   -------------</p>
                <div><Button secondary>ورود با گوگل</Button></div>
            </div>
        )
    }

    const toUpRight = (()=> {
        gsap.to('.showcase', { x: -300 , scale: .8, y:-30 });
    })

    const toDownLeft = (()=> {
        gsap.to('.showcase', { x:-1, scale: 1 , y:20});
    })

    const Rest = () => {
        if (currentPage === 2) {
            toUpRight()
            document.getElementById('continue').style.display='none'
            setArg('city')
            return <div className='boxes'><Box/></div>    
        } else if( currentPage === 3) {
            document.getElementById('continue').style.display='none'
            setArg('course')
            return <div className='boxes'><Box/></div>
        } else if( currentPage === 4) {
            document.getElementById('continue').style.display='none'
            setArg('why')
            return <div className='boxes'><Box/></div>
        } else if ( currentPage === 5){
            toDownLeft()
        } else if ( currentPage === 7 ){
            toUpRight()
            document.getElementById('continue').style.display='none'
            return <SignUpForm/>
        }
    }

    return(
        <div className='pre-signup'>
            <div className='pre-header'>
                <Link to='/Educational-Site/'><TbArrowLeft className='icon back'/></Link>
                <progress value={progValue} max={100} className='progress-bar'/>
            <div/>
            </div>
            <div id='showcase' className='showcase'>
                <div className='dialog'><p id='paragraph'>{pageData[currentPage].dialog}</p></div>
                <img src={require(`../style/${pageData[currentPage].img}`)} className='robot'/>
            </div>
            <Rest/>
            <div className='padding' id='continue' onClick={nextPage}><Button primary>ادامه</Button></div>
        </div>
    )
}

export default PreSignup