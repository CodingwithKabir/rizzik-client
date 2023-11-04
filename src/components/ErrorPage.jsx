import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-white">
            <div className="max-w-[1400px] mx-auto my-auto pb-44 lg:pb-60">
                <h2 className="text-6xl md:text-9xl text-center pt-32 lg:pt-48 pb-10 lg:pb-16 text-[#EAB446] font-extrabold">404</h2>
                <p className="text-3xl md:text-5xl text-center text-black mb-10">I think you lost.</p>
                <div className="text-center">
                <Link to="/" className="bg-[#EAB446] text-white py-3 px-6 rounded-xl">GO BACK TO HOME</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;