import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import LandingPageHeader from "./Components/LandingPageHeader";
import LandingPageBody from "./Components/LandingPageBody"
import Contact from './Components/Contact';
import SampleAPI from './Components/SampleAPI';

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gradient-to-tr from-[#0b61d8] via-[#120B2E] to-[#091498] 
            px-8 lg:px-20 sm:px-10 pb-10 pt-5">
                <header>
                    <LandingPageHeader />
                </header>
                <Routes>
                    <Route path="/" element={<LandingPageBody />}/>
                    <Route path="sampleapi" element={<SampleAPI />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
