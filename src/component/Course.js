import './Course.css'
import Button from './Button'
import { useState } from 'react'
import {TbArrowLeft} from 'react-icons/tb'
import { Link } from 'react-router-dom'

function Course({data}){
    const [count, setCount] = useState(0)

    const dataLen = data.length
    
    const Header = ()=>{
        const Nav = ()=> {
            return(
                data.map(function (item, index){
                    if (index-1 < count){
                        return <div onClick={()=> setCount(index)} key={index} className='prog-active'/>
                    } else {
                        return <div key={index} className='prog'/>}
                })
            )
        }
        return(
            <div className='heading'>
                <Link to='/Educational-Site/userpage'><TbArrowLeft className='icon back'/></Link>
                <div className='progress'>
                    <Nav/>
                </div>
                <div/>
            </div>
        )
    }

    const handle = ()=>{
        if (count === dataLen-1){
            window.location.replace('/Educational-Site/userpage')
        } else {
            setCount(count+1)
            
        }
    }
    
    const info = data[count]

    const Introductiona = () => {
        return(
            <div className="introduction">
                <img src={require (`../style/${info.img}`)} />
                <div className="explain">
                    <h2>{info.h2}</h2>
                    <p>{info.p}</p>
                    <div onClick={handle}><Button secondary>ادامه</Button></div>
                </div>
            </div>
        )
    }

    if (info.type === 'intro'){
        return (
            <div>
            <Header/>
            <Introductiona/>
            </div>
        )
    }
}

export default Course