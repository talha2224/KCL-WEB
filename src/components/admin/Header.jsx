import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSidebar } from '../../context/SidebarContext';
import { Link } from 'react-router-dom';
import avatar from '../../assets/dashboard/avatar.png';
import { FaSearch, FaBell, FaChevronDown, FaRegBell } from 'react-icons/fa';


const notificationsData = [
    { title: "New Episode Alert", description: "Season 2, Episode 3 of The H1 Series is now streaming.", time: "1:30 PM" },
    { title: "Upcoming Pay-Per-View Event", description: "Season 2, Episode 3 of The H1 Series is now streaming.", time: "1:30 PM" },
    { title: "Your Subscription is Renewed", description: "Your Standard Plan has been successfully renewed.", time: "1:30 PM" },
    { title: "Recommended for You", description: "Because you watched Action Thriller, here's something you'll love.", time: "1:30 PM" },
];


const Header = ({ location }) => {
    const { isNavOpen, toggleNav } = useSidebar();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='w-full flex justify-between items-center py-2 px-5 bg-[#0F294E] text-white'>

            <div className='lg:hidden flex items-center gap-x-4'>
                <GiHamburgerMenu className='lg:hidden block text-xl cursor-pointer' onClick={() => toggleNav(!isNavOpen)} />
                <h1 className='capitalize font-medium text-lg'>{location === "home" ? "Dashboard" : location}</h1>
            </div>

            <div className='flex justify-between lg:flex-1 items-center gap-x-4'>

                <div className='relative hidden sm:block'>
                    <input type="text" placeholder="Search movies" className="w-[40vw] bg-[#112F5A] rounded-full py-2 px-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#12B037]" />
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                <div className='flex items-center gap-x-4'>
                    <div className='relative'>
                        <FaBell className='text-xl cursor-pointer' onClick={toggleModal} />
                        <span className='absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500'></span>
                    </div>

                    {/* Profile Section */}
                    <Link to={"/dashboard/profile"} className='flex items-center gap-x-2 cursor-pointer'>
                        <img src={avatar} alt="User Avatar" className='h-8 w-8 rounded-full border-2 border-[#12B037]' />
                        <span className='hidden md:block font-medium'>Marci Fumans</span>
                        <FaChevronDown className='text-sm hidden md:block' />
                    </Link>

                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/50">
                    <div className="bg-[#112F5A] rounded-lg p-6 w-11/12 max-w-lg relative">
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            onClick={toggleModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-xl font-bold mb-4">Notifications</h2>
                        <div className="space-y-4">
                            {notificationsData.map((item, index) => (
                                <div key={index} className="flex items-start gap-x-4 p-3 bg-white/5 rounded-md">
                                    <FaRegBell className="text-[#12B037] text-lg mt-1" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <p className="font-semibold">{item.title}</p>
                                            <span className="text-xs text-[#C5DDFF]">{item.time}</span>
                                        </div>
                                        <p className="text-sm text-[#C5DDFF]">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
