import { Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import CommentsPage from './pages/CommentsPage';
import UserPage from './pages/UserPage';
import CoursesPage from './pages/CoursesPage';
import CourseIntroPage from './pages/CourseIntroPage';

function App() {
    return (
        <>
            <Routes>
                <Route path='*' element={<MainPage />} />
                <Route path="/" element={<MainPage />} />
                <Route path='/Educational-Site/about' element={<AboutPage />} />
                <Route path='/Educational-Site/courses-page' element={<CoursesPage />} />
                <Route path='/Educational-Site/pricing' element={<PricingPage />} />
                <Route path='/Educational-Site/comments' element={<CommentsPage />} />
                <Route path='/Educational-Site/userpage' element={<UserPage />} />
                <Route path='/Educational-Site/math' element={< CourseIntroPage/>} />
                <Route path='/Educational-Site/science' element={< CourseIntroPage/>} />
                <Route path='/Educational-Site/engineering' element={< CourseIntroPage/>} />
                <Route path='/Educational-Site/programming' element={< CourseIntroPage/>} />
                <Route path='/Educational-Site/datascience' element={< CourseIntroPage/>} />
            </Routes>
        </>
    );
}

export default App;
