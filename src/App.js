import {Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import AboutPage from './pages/AboutPage';

function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path='/Educational-Site/about' element={<AboutPage/>}/>
                <Route path='*' element={<MainPage/>}/>
            </Routes>
        </>
    )
}

export default App;
