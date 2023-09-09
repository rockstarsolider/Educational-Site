import {Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import AboutPage from './pages/AboutPage';

function App() {
    return(
        <>
            <Routes>
                <Route path="https://rockstarsolider.github.io/Educational-Site/" element={<MainPage/>}/>
                <Route path='https://rockstarsolider.github.io/Educational-Site/about' element={<AboutPage/>}/>
            </Routes>
        </>
    )
}

export default App;
