import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import CommentsPage from "./pages/CommentsPage";
import UserPage from "./pages/UserPage";
import CoursesPage from "./pages/CoursesPage";
import CourseIntroPage from "./pages/CourseIntroPage";
import Login from "./pages/LoginPage";
import Email from "./pages/Email";
import CoursePage from "./pages/CoursePage";
import LearningRoadPage from "./pages/LerningRoadPage";
import PrinciplesPage from "./pages/PrinciplesPage";
import LessionEnd from './pages/LessionEnd';
import PreSignup from './pages/PreSignup';
import AdminPage from './pages/AdminPage';

function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0,0)
    }, [location]);

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
                <Route path='/Educational-Site/Email' element={< Email/>} />
                <Route path='/Educational-Site/coursepage' element={< CoursePage/>} />
                <Route path='/Educational-Site/learning-road' element={< LearningRoadPage/>} />
                <Route path='/Educational-Site/principles' element={< PrinciplesPage/>} />
                <Route path='/Educational-Site/lession-end' element={< LessionEnd/>} />
                <Route path='/Educational-Site/pre-signup' element={< PreSignup/>} />
                <Route path='/admin' element={< AdminPage/>} />
            </Routes>
        </>
    );
}

export default App;
