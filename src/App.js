import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import CommentsPage from "./pages/CommentsPage";
import UserPage from "./pages/UserPage";
import CoursesPage from "./pages/CoursesPage";
import CourseIntroPage from "./pages/CourseIntroPage";
import Login from "./pages/LoginPage";
import SingUp from "./pages/SingUp";
import Email from "./pages/Email";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";
import CoursePage from "./pages/CoursePage";
import LearningRoadPage from "./pages/LerningRoadPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Educational-Site/about" element={<AboutPage />} />
        <Route path="*" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route
          path="/Educational-Site/courses-page"
          element={<CoursesPage />}
        />
        <Route path="/Educational-Site/pricing" element={<PricingPage />} />
        <Route path="/Educational-Site/comments" element={<CommentsPage />} />
        <Route path="/Educational-Site/userpage" element={<UserPage />} />
        <Route path="/Educational-Site/math" element={<CourseIntroPage />} />
        <Route path="/Educational-Site/science" element={<CourseIntroPage />} />
        <Route
          path="/Educational-Site/engineering"
          element={<CourseIntroPage />}
        />
        <Route
          path="/Educational-Site/programming"
          element={<CourseIntroPage />}
        />
        <Route
          path="/Educational-Site/datascience"
          element={<CourseIntroPage />}
        />
        <Route path="/Educational-Site/UserPage" element={<UserPage />} />
        <Route path="/Educational-Site/LoginPage" element={<Login />} />
        <Route path="/Educational-Site/SingUp" element={<SingUp />} />
        <Route path="/Educational-Site/Email" element={<Email />} />
        <Route path="/Educational-Site/Question1" element={<Question1 />} />
        <Route path="/Educational-Site/Question2" element={<Question2 />} />
        <Route path="/Educational-Site/Question3" element={<Question3 />} />
        <Route path="/Educational-Site/Question4" element={<Question4 />} />
        <Route path="/Educational-Site/coursepage" element={<CoursePage />} />
        <Route
          path="/Educational-Site/learning-road"
          element={<LearningRoadPage />}
        />
      </Routes>
    </>
  );
}

export default App;
