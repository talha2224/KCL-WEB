import moview_bg from '../../../assets/auth/moview_bg.png';
import { useNavigate } from 'react-router-dom';
import { MdOutlineMailOutline } from "react-icons/md";

const ForgotPage = () => {
    const nav = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        nav("/forgot/otp");
    };

    return (
        <div style={{ background: `url(${moview_bg})` }} className='flex justify-center items-center w-screen h-screen bg-cover bg-center'>
            
            <div className="bg-[#112F5A] bg-opacity-90 rounded-md w-[90%] sm:w-[500px] p-8 md:p-12 relative">
                
                <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={() => nav("/")}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-white text-2xl font-medium text-center mb-2">Reset Password</h2>
                <p className="text-center text-[#C5DDFF] text-sm mb-6">Enter the email address associated with your account</p>


                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative">
                        <MdOutlineMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-[#12B037]" />
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-[#112F5A] border border-gray-600 rounded-full py-3 px-12 focus:outline-none focus:ring-2 focus:ring-[#12B037] placeholder-gray-400 text-white"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#12B037] to-[#18B451] text-white py-3 rounded-full text-md font-medium shadow-[0_11px_29px_0_rgba(20,169,144,0.3)] hover:opacity-90 transition-opacity"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPage;