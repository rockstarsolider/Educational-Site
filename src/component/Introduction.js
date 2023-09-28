import './Course.css'
import Button from './Button'
import { useState } from 'react'

function Introduction({data}){
    const [count, setCount] = useState(0)

    const dataLen = data.length

    const handle = ()=>{
        if (count === dataLen-1){
            window.location.replace('/Educational-Site/userpage')
        } else {
            setCount(count+1)
        }
    }
    
    const info = data[count]

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

export default Introduction