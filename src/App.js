import {Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage'
import CommentsPage from './pages/CommentsPage'
import UserPage from './pages/UserPage'

function App() {
    return(
        <>
            <Routes>
                <Route path='*' element={<MainPage/>}/>
                <Route path="/" element={<MainPage/>}/>
                <Route path='/Educational-Site/about' element={<AboutPage/>}/>
                <Route path='/Educational-Site/pricing' element={<PricingPage/>}/>
                <Route path='/Educational-Site/comments' element={<CommentsPage/>}/>
                <Route path='/Educational-Site/userpage' element={<UserPage/>}/>
            </Routes>
        </>
    )
}

export default App;
