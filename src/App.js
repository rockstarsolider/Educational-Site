import { Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import CommentsPage from './pages/CommentsPage';
import UserPage from './pages/UserPage';
import CoursesPage from './pages/CoursesPage';
import CourseIntroPage from './pages/CourseIntroPage';
import LoginPage from './pages/LoginPage';
import SingupPage from './pages/SingupPage'
import Question from "./pages/Question"
import Question2 from "./pages/Question2"
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';

import Login from './pages/LoginPage';
import SingUp from './pages/SingUp';
import Email from './pages/Email';
function App() {
    return (
        <>
            <Routes>
                <Route path='/Educational-Site/about' element={<AboutPage />} />
                <Route path='*' element={<MainPage />} />
                <Route path="/" element={<MainPage />} />
                <Route path='/Educational-Site/courses-page' element={<CoursesPage />} />
                <Route path='/Educational-Site/pricing' element={<PricingPage />} />
                <Route path='/Educational-Site/comments' element={<CommentsPage />} />
                <Route path='/Educational-Site/userpage' element={<UserPage />} />
                <Route path='/Educational-Site/math' element={< CourseIntroPage/>} />
                <Route path='/Educational-Site/science' element={< CourseIntroPage/>} />
                <Route path='/Educational-Site/engineering' element={< CourseIntroPage/>} />
                <Route path='/Educational-Site/programming' element={< CourseIntroPage/>} />
                <Route path='/Educational-Site/datascience' element={< CourseIntroPage/>} />
                <Route path='/Educational-Site/UserPage' element={< UserPage/>} />
                <Route path='/Educational-Site/LoginPage' element={< Login/>} />
                <Route path='/Educational-Site/SingUp' element={< SingUp/>} />
                <Route path='/Educational-Site/Email' element={< Email/>} />

            </Routes>
        </>
    );
}

export default App;
