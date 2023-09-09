import {Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import AboutPage from './pages/AboutPage';

function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </>
    )
}

export default App;
