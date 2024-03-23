import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import './App.scss';
import Home from './pages/home/home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <ScrollToTop
                smooth
                color="#04647d"
                width="24"
                height="24"
                className="!rounded-full !flex !justify-center !items-center !w-[50px] !h-[50px]"
            />
        </BrowserRouter>
    )
}

export default App
