import LandingPageHeader from "./Components/LandingPageHeader";
import LandingPageBody from "./Components/LandingPageBody"

export default function App() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-tr from-[#0b61d8] via-[#120B2E] to-[#091498] 
            px-8 lg:px-20 sm:px-10 pb-10 pt-5">
                <LandingPageHeader/>
                <LandingPageBody/>
            </div>
        </>
    );
}
