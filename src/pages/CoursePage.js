import Introduction from '../component/Introduction'
import './CoursePage.css'
import {TbArrowLeft} from 'react-icons/tb'
import { Link } from 'react-router-dom'

function CoursePage(){
    const data = [
        {
            key: 1,
            img: 'robot1.svg',
            h2: 'منطق ترتیبی',
            p: 'در این درس اول، با تجسم روابط بین چیزها به منظور قرار دادن آنها در ترتیب صحیح، یادگیری قواعد منطق را آغاز خواهید کرد. در پایان این دوره، شما قادر خواهید بود مسائل منطقی پیچیده را به صورت سیستماتیک حل کنید. این دوره مهارت های تفکر انتقادی را که مبنای استدلال ریاضی هستند، می سازد'
        },
        {
            key: 2,
            img: 'robot2.gif',
            h2: '',
            p: 'ربات‌های حساس ما افسرده هستند و خواستار تغییر مناظر شده‌اند. روبات‌ها به یک مرکز ارزیابی فرستاده می‌شوند، جایی که اندازه‌گیری می‌شوند و به بخش‌های جدید اختصاص داده می‌شوند.'
        },
        {
            key: 3,
            img: 'robot1.svg',
            h2: 'jdfyifی',
            p: 'در این درس اول، با تجسم روابط بین چیزها به منظور قرار دادن آنها در ترتیب صحیح، یادگیری قواعد منطق را آغاز خواهید کرد. در پایان این دوره، شما قادر خواهید بود مسائل منطقی پیچیده را به صورت سیستماتیک حل کنید. این دوره مهارت های تفکر انتقادی را که مبنای استدلال ریاضی هستند، می سازد'
        }
    ]

    const Header = ()=>{
        return(
            <div className='heading'>
                <Link to='/Educational-Site/userpage'><TbArrowLeft className='icon back'/></Link>
                <div className='progress'>
                    <div className='prog'/>
                </div>
                <div/>
            </div>
        )
    }

    return (
        <div className='coursepage'>
            <Header/>
            <Introduction data={data}/>
        </div>
    )
}

export default CoursePage