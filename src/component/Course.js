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
                <Link to='/Educational-Site/learning-road'><TbArrowLeft className='icon back'/></Link>
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

    const Introduction = () => {
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

    const FourAnswer = ()=> {
        const [topping, setTopping] = useState(0)

        const RadioButtons = () => {
            const onOptionChange = e => {
                setTopping(e.target.value)
                document.getElementById('123').style.display='block'
            }
            

            return (
                <div className="radio-buttons">
                    <div id='1' className='aligning'><input type="radio" name="topping" className='input' value={info.wrong1} id={info.wrong1} checked={topping === info.wrong1} onChange={onOptionChange}/>
                    <label htmlFor={info.wrong1}>{info.wrong1}</label></div>

                    <div id='2' className='aligning'><input type="radio" name="topping" className='input' value={info.wrong2} id={info.wrong2} checked={topping === info.wrong2} onChange={onOptionChange} />
                    <label htmlFor={info.wrong2}>{info.wrong2}</label></div>

                    <div id='3' className='aligning'><input type="radio" name="topping" className='input' value={info.ans} id={info.ans} checked={topping === info.ans} onChange={onOptionChange} />
                    <label htmlFor={info.ans}>{info.ans}</label></div>
                
                    <div id='4' className='aligning'><input type="radio" name="topping" className='input' value={info.wrong3} id={info.wrong3} checked={topping === info.wrong3} onChange={onOptionChange} />
                    <label htmlFor={info.wrong3}>{info.wrong3}</label></div>
                </div>
            )
        }

        const handleClick = ()=>{
            if (topping === info.ans){
                document.getElementById('1').className='aligning aligning-active';
                document.getElementById('2').className='aligning aligning-active';
                document.getElementById('3').className='aligning aligning-active';
                document.getElementById('4').className='aligning aligning-active';
                setTimeout(() => { handle() }, 1000);
            } else {
                document.getElementById('1').className='aligning aligning-de';
                document.getElementById('2').className='aligning aligning-de';
                document.getElementById('3').className='aligning aligning-de';
                document.getElementById('4').className='aligning aligning-de';
            }
        }

        return(
            <div className='four-answer'>
                <p>{info.p}</p>
                <img src={require (`../style/${info.img}`)}/>
                <div className='question-box'>
                    <p>{info.sub}</p>
                    <RadioButtons/>
                    <div id='123' style={{display:'none'}} click onClick={handleClick}><Button primary>ثبت جواب</Button></div>
                </div>
            </div>
        )
    }

    if (info.type === 'intro'){
        return (
            <div>
            <Header/>
            <Introduction/>
            </div>
        )
    } else if(info.type === 'four-answer'){
        return (
            <div>
            <Header/>
            <FourAnswer/>
            </div>
        )
    }
}

export default Course