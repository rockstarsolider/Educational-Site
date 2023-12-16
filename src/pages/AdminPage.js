import { useState } from 'react'
import './AdminPage.css'
import Button from '../component/Button'

function AdminPage() {
    const [currentPage, setCurrentPage] = useState('Welcome')

    const pageData = [
        {
            id: 'NextTask',
            name: 'تسک پیش رو',
            p: 'در این هفته آشنایی اولیه با html  , css پیدا خواهید کرد. در دوره ای که به شما معرفی شده است در قالب 16 پروژه مفاهیم اصلی html , css را فراگرفته و به صورت عملی و در قالب پروژه مفاهیم را در ذهن خود تثبیت خواید کرد.',
            img: require('../style/learn-at-your-level 1 (1).png')
        },
        {
            id:'PrevTasks',
            name: 'تسک های قبلی',
            tasks:[
                {number:1, p: 'در این هف با html ید بسیار بزرگ آشنایی اولیه با در قالب 16 پروژه فاهیم اصلی html , css را فراگرفته و به صورت عملی و در قالب پروژه مفاهیم را در ذهن خود تثبیت خواید کرد.',img: require('../style/learn-at-your-level 1 (1).png')},
                {number:2, p: 'در این هفته آشنایی اولیه با html  , css پیدا خواهید کرد. در دوره ای که به شما معرفی شده است در قالب 16 پروژه مفاهیم اصلی html , css را فراگرفته و به صورت عملی و در قالب پروژه مفاهیم را در ذهن خود تثبیت خواید کرد.',img: require('../style/learn-at-your-level 1 (1).png')},
                {number:3, p: 'در این هفته اولیه با مورد جدید بسیار بزرگ آشنایی اولیه با در قالب 16 پروژه مفاهیم اصلی html , css را فراگرفته و به صورت عملی و در قالب پروژه مفاهیم را در ذهن خود تثبیت خواید کرد.',img: require('../style/learn-at-your-level 1 (1).png')},
            ],
        },
        {
            id: 'Timing',
            name: 'زمان، وضعیت حضور در جلسات',
            meta: 'جلسه متا: چهارشنبه ها ساعت 7',
            main: 'جلسه فنی: یکشنبه ها ساعت 7:30',
            present: ['حاضر','حاضر','حاضر','غایب'],
        },
        {
            id: 'Teacher',
            name: 'راهنما آموزشی',
            teacher: 'فرهاد رضاقلی',
            job: 'وب و بازی سازی',
            img: require('../style/Group 1.png'),
        },
        {
            id: 'Charts',
            name: 'گزارش وضعیت آموزشی'
        },
        {
            id: 'Group',
            name: 'هم تیمی ها',
            group:[
                {title:'امیر',number: '09270001234',img:(require('../style/Group 2.png'))},
                {title:'رضا',number: '09270001234',img:(require('../style/Group 3.png'))},
                {title:'علی',number: '09270001234',img:(require('../style/Group 3.png'))},
            ]
        },
        {
            id: 'Setting',
            name: 'تنظیمات'
        },
    ]

    const Header = () => {
        return(
            <div className="admin-header">
                <p>امتیاز: 15</p>
                <p>پوریا غیاثی</p>
                <img src={require('../style/rob1.png')}/>
            </div>
        )
    }

    const SideBar = () => {
        const handleClick = (id) => {
            currentPage === 'Welcome' ? console.log() : document.getElementById(currentPage).style.backgroundColor = '#1F2DAE'
            setCurrentPage(id)
            document.getElementById(id).style.backgroundColor='white'
            document.getElementById(id).style.color='black'
        }

        return(
            <div className='sidebar'>
                <h2>دوره طراحی وب</h2>
                {pageData.map((item, index) => {
                    return <div id={item.id} onClick={() => handleClick(item.id)} className='sidebarEl' key={index}><p>{item.name}</p></div>
                })}
            </div>
        )
    }

    // Shows the main content(like tasks,payment,...) on the page
    const Content = () => {
        const Welcome = () => {
            return <div className='welcome flex'>
                <img width={'15%'} src={require('../style/rob1.png')}/>
                <h2 >خوش آمدی پوریا</h2>
                <p>در حال حاضر 15 امتیاز داری که میتونی با حل تمرینات و شرکت در جلسات امتیاز خودت رو بالا ببری</p>
            </div>
        }

        const NextTask = () => {
            return <div className='next-task grey-box flex'>
                <p>{pageData[0].p}</p>
                <img src={pageData[0].img}/>
            </div>
        }

        const Teacher = () => {
            return <div className='teacher grey-box flex'>
                <img src={pageData[3].img}/>
                <h2>{pageData[3].teacher}</h2>
                <p>{pageData[3].job}</p>
            </div>
        }

        const Group = () => {
            return <div className='group grey-box flex'>
                <h2>اعضای گروه بازی سازی</h2>
                <div className='person flex'>
                        <h2>شماره تماس</h2>
                        <h2>نام</h2>
                        <h2>تصویر</h2>
                </div>
                {pageData[5].group.map((person, index) => {
                    return <div key={index} className='person flex'>
                        <h3>{person.number}</h3>
                        <h3>{person.title}</h3>
                        <img src={person.img}/>
                    </div>
                })}
            </div>
        }

        const PrevTasks = () => {
            return <div className='prev-tasks flex '>
                {pageData[1].tasks.reverse().map((task, index) => {
                    return <div key={index} className='next-task grey-box'>
                        <h2>تسک شماره {task.number}</h2>
                        <p>{task.p}</p>
                        <img src={task.img}/>
                    </div>
                })}
            </div>
        }

        const Timing = () => {
            return <div className='timing'>
                <div className='grey-box time'>
                <h2>حضور در جلسات</h2>
                {pageData[2].present.map((state, index) => {
                    return <p>هفته{index+1}  {state}</p>
                })}
                </div>
                <div className='grey-box time'>
                    <h2>زمان جلسات هفتگی</h2>
                    <p>{pageData[2].meta}</p>
                    <a href='https://meet.google.com'>ورود به جلسه متا</a>
                    <p>{pageData[2].main}</p>
                    <a href='https://meet.google.com'>ورود به جلسه فنی</a>
                </div>
            </div>
        }

        const Setting = () => {
            return <div className='flex grey-box'>
                <h2>تکمیل یا تغییر حساب کاربری</h2>
                <input placeholder='نام'/>
                <input placeholder='نام خوانوادگی'/>
                <input placeholder='ایمیل'/>
                <Button primary>تغییر نام</Button>
                <div className='exit'><Button secondary>خروج از حساب کاربری</Button></div>
            </div>
        }
        
        // Selects the content that should be shown
        if (currentPage === 'Welcome'){
            return <Welcome/>
        } else if (currentPage === 'NextTask') {
            return <NextTask/>
        } else if (currentPage === 'Teacher') {
            return <Teacher/>
        } else if (currentPage === 'Group') {
            return <Group/> 
        } else if (currentPage === 'PrevTasks') {
            return <PrevTasks/>
        } else if (currentPage === 'Timing') {
            return <Timing/>
        } else if (currentPage === 'Setting') {
            return <Setting/>
        }
    }
    
    return(
        <>
        <Header/>
        <div className='admin-main'>
            <div className='content'><Content/></div>
            <SideBar/>
        </div>
        </>
    )
}

export default AdminPage