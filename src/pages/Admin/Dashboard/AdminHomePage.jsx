import banner from '../../../assets/dashboard/banner.png'
import card_1 from '../../../assets/dashboard/card_1.png'
import card_3 from '../../../assets/dashboard/card_3.png'
import card_2 from '../../../assets/dashboard/card_2.png'
import s_card_1 from '../../../assets/dashboard/s_card_1.png'
import categories from '../../../assets/dashboard/categories.png'
import { FaHeart, FaEllipsisH } from 'react-icons/fa';
import { useState } from 'react'
import { Link } from 'react-router-dom'

const exclusivesData = [
    { title: "Easy on Me", artist: "2019", duration: "2h", image: s_card_1 },
    { title: "Give", artist: "2023", duration: "1h.30", image: s_card_1 },
    { title: "Spider Man", artist: "2023", duration: "2h.15", image: s_card_1 },
    { title: "SICKO MODE", artist: "2021", duration: "1h.40", image: s_card_1 },
    { title: "Get Lost", artist: "2021", duration: "3h", image: s_card_1 },
    { title: "Why I don't Love", artist: "2023", duration: "1h", image: s_card_1 },
    { title: "Midsummer Madness", artist: "2023", duration: "2h", image: s_card_1 },
    { title: "SICKO MODE", artist: "2023", duration: "1h", image: s_card_1 },
];

const AdminHomePage = () => {

    const [exclusiveTab, setExclusiveTab] = useState('local');
    return (
        <div className="text-white">

            <h1 className="text-[#AECFFF]">Welcome Back</h1>
            <p className='text-lg'>Frank</p>

            <div className="md:flex items-start gap-4">

                <div className="mt-4 flex-1">
                    <img src={banner} alt="" className='bg-cover w-full' />
                    <div className='mt-4'>
                        <div className='flex justify-between items-center'>
                            <p>Recently Played</p>
                            <p className='text-[#18B451] cursor-pointer'>See all</p>
                        </div>
                        <div className='w-full overflow-x-auto flex gap-x-[-1rem] items-center'>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                                    <img src={i % 2 == 0 ? card_1 : card_3} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='flex justify-between items-center'>
                            <p>Top Trending</p>
                            <Link to={"/dashboard/trending"}><p className='text-[#18B451] cursor-pointer'>See all</p></Link>
                        </div>
                        <div className='w-full overflow-x-auto flex gap-x-[-1rem] items-center'>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                                    <img src={i % 2 == 0 ? card_3 : card_2} />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="mt-4 min-w-[100%] md:min-w-[25rem] md:max-w-[25rem]">
                    <div className='bg-[#0F294E] w-full p-6 shadow-xl rounded-md'>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Exclusives</h2>
                            <div className="bg-[#121214] rounded-md p-1 flex">
                                <button
                                    className={`px-4 py-1 rounded-md text-sm font-medium ${exclusiveTab === 'local' ? 'bg-[#18B451] text-white' : 'bg-transparent text-gray-300'}`}
                                    onClick={() => setExclusiveTab('local')}
                                >
                                    Local
                                </button>
                                <button
                                    className={`px-4 py-1 rounded-md text-sm font-medium ${exclusiveTab === 'global' ? 'bg-[#18B451] text-white' : 'bg-transparent text-gray-300'}`}
                                    onClick={() => setExclusiveTab('global')}
                                >
                                    Global
                                </button>
                            </div>
                        </div>
                        <div>
                            {exclusivesData.map((item, index) => (
                                <div key={index} className="flex items-center py-3 border-b border-gray-700 last:border-b-0">
                                    <span className="w-6 text-sm text-gray-400">{index + 1}</span>
                                    <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-cover ml-4" />
                                    <div className="flex-1 ml-4">
                                        <p className="font-medium">{item.title}</p>
                                        <p className="text-sm text-gray-400">{item.artist}</p>
                                    </div>
                                    <span className="text-sm text-gray-400">{item.duration}</span>
                                    <FaHeart className="text-gray-400 hover:text-red-500 ml-4 cursor-pointer" />
                                    <FaEllipsisH className="text-gray-400 hover:text-white ml-2 cursor-pointer" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='flex justify-between items-center'>
                            <p>Categories</p>
                            <p className='text-[#18B451] cursor-pointer'>See all</p>
                        </div>
                        <img src={categories} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AdminHomePage;