import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsSendFill, BsEmojiSmile } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import video_url from '../../../assets/dashboard/video.mp4';
import watchlist_1 from '../../../assets/dashboard/watchlist/watchlist_1.png';
import watchlist_2 from '../../../assets/dashboard/watchlist/watchlist_2.png';
import watchlist_3 from '../../../assets/dashboard/watchlist/watchlist_3.png';
import avatar from '../../../assets/dashboard/avatar.png';
const castImages = [
    { name: "Ruth Wafle", src: avatar },
    { name: "Seline Jon", src: avatar },
    { name: "Abel Thom", src: avatar },
    { name: "Dianne Ji", src: avatar },
    { name: "Pter Pyper", src: avatar },
    { name: "Deborah", src: avatar },
    { name: "Angelina Hiel", src: avatar },
];

const TabItem = ({ title, isActive, onClick }) => (
    <div
        className={`px-6 py-3 cursor-pointer ${isActive ? 'border-b-2 border-[#129B7F] font-semibold' : 'text-[#AECFFF] hover:text-white'}`}
        onClick={onClick}
    >
        {title}
    </div>
);


const InfoView = ({ onWriteReview }) => (
    <div className='p-6'>
        <div className='flex justify-between items-start'>
            <div>
                <h2 className='text-xl font-bold mb-2'>Reviews</h2>
                <div className='flex items-center space-x-2'>
                    <p className='text-4xl font-semibold'>4.6</p>
                    <p className='text-lg font-normal text-[#AECFFF]'>/5</p>
                    <div className='flex text-[#FFC107] text-lg'>
                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
                    </div>
                </div>
            </div>
            <button
                className='px-6 py-2 rounded-full text-base bg-gradient-to-r from-[#18B451] to-[#4DBB9C] hover:from-[#4DBB9C] hover:to-[#18B451] transition-all'
                onClick={onWriteReview}
            >
                Write review
            </button>
        </div>

        <div className='mt-8'>
            <h3 className='text-lg font-bold mb-1'>Movie Details</h3>
            <p className='text-[#AECFFF]'>Stars- <span className='text-white'>Daniel Radcliffe, Emma Watson, Rupert Grint, Robert Pattinson, Ralph Fiennes, Michael Gambon</span></p>
        </div>

        <div className='mt-6'>
            <h3 className='text-lg font-bold mb-2'>Introduction</h3>
            <p className='text-[#AECFFF] leading-relaxed'>
                Over the summer, the Weasleys invite Harry Potter to attend the Quidditch World Cup final, played between Bulgaria and Ireland. The match ends in a victory for the Irish, but the campsite is attacked by Voldemort's former followers called the Death.
            </p>
        </div>

        <div className='mt-6'>
            <h3 className='text-lg font-bold mb-4'>Cast</h3>
            <div className='flex overflow-x-auto space-x-4 pb-2'>
                {castImages.map((actor, index) => (
                    <div key={index} className='flex flex-col items-center flex-shrink-0 w-20'>
                        <img src={actor.src} alt={actor.name} className='w-14 h-14 rounded-full object-cover border-2 border-[#129B7F]' />
                        <p className='text-xs mt-2 text-center truncate w-full'>{actor.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const CommentsView = () => {
    const comments = [
        { name: "Mike Newell", time: "1 hr ago", comment: "I so much love the movie, top notch", likes: 414, dislikes: 14, replies: 15, avatar: avatar },
        { name: "Michael", time: "1 hr ago", comment: "I so much love the movie, top notch. It'd have been lovely if I see my favorite actress there", likes: 414, dislikes: 14, replies: 15, avatar: avatar },
        { name: "Nicholas", time: "1 hr ago", comment: "So much joy to behold in all the series. I literally forget to go to work cos I slept off as a result of over watching, lol", likes: 414, dislikes: 14, replies: 15, avatar: avatar },
        { name: "Michael", time: "1 hr ago", comment: "I so much love the movie, top notch. It'd have been lovely if I see my favorite actress there", likes: 414, dislikes: 14, replies: 15, avatar: avatar },
    ];

    return (
        <div className=''>
            <div className=''>
                {comments.map((comment, index) => (
                    <div key={index} className='flex items-start space-x-3 border-b border-b-[#37619E] p-6'>
                        <img src={comment.avatar} alt={comment.name} className='w-10 h-10 rounded-full object-cover' />
                        <div className='flex-1'>
                            <div className='flex items-center justify-between'>
                                <p className='font-semibold'>{comment.name}</p>
                                <p className='text-xs text-[#AECFFF]'>{comment.time}</p>
                            </div>
                            <p className='mt-1 text-sm'>{comment.comment}</p>
                            <div className='flex items-center space-x-4 mt-2 text-xs text-[#AECFFF]'>
                                <div className='flex items-center space-x-1 cursor-pointer hover:text-white'>
                                    <FiThumbsUp />
                                    <span>{comment.likes}</span>
                                </div>
                                <div className='flex items-center space-x-1 cursor-pointer hover:text-white'>
                                    <FiThumbsDown />
                                    <span>{comment.dislikes}</span>
                                </div>
                                <div className='flex items-center space-x-1 cursor-pointer hover:text-white'>
                                    <HiOutlineHeart className='text-base' />
                                    <span>{comment.replies}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-8 flex items-center bg-[#0F294E] rounded-md px-4 py-3'>
                <div className='flex items-center gap-x-3 bg-[#21477C] flex-1 p-3 rounded-full'>
                    <BsEmojiSmile className='text-xl text-[#AECFFF] cursor-pointer' />
                    <input type='text' placeholder='Type in your comment' className='flex-1 bg-transparent focus:outline-none text-white placeholder-[#AECFFF]' />
                </div>
                <button className='ml-3 text-[#129B7F] hover:text-[#4DBB9C]'>
                    <BsSendFill className='text-2xl' />
                </button>
            </div>
        </div>
    );
};

const RelatedMoviesView = () => {
    const relatedMovies = [
        { title: "Love after lockup", year: 2021, hours: "2 Hours", rating: 4.1, reviews: 1240, img: watchlist_1 },
        { title: "Double Cross", year: 2021, hours: "2 Hours", rating: 5.0, reviews: 1240, img: watchlist_2, isNew: true },
        { title: "Monogamy", year: 2021, hours: "2 Hours", rating: 4.1, reviews: 1240, img: watchlist_3 },
        { title: "Double Cross", year: 2021, hours: "2 Hours", rating: 5.0, reviews: 1240, img: watchlist_2, isNew: true },
        { title: "Love after lockup", year: 2021, hours: "2 Hours", rating: 4.1, reviews: 1240, img: watchlist_1 },
        { title: "Double Cross", year: 2021, hours: "2 Hours", rating: 5.0, reviews: 1240, img: watchlist_2, isNew: true },
        { title: "Monogamy", year: 2021, hours: "2 Hours", rating: 4.1, reviews: 1240, img: watchlist_3 },
        { title: "Double Cross", year: 2021, hours: "2 Hours", rating: 5.0, reviews: 1240, img: watchlist_2, isNew: true },
        { title: "Double Cross", year: 2021, hours: "2 Hours", rating: 5.0, reviews: 1240, img: watchlist_2, isNew: true },
        { title: "Monogamy", year: 2021, hours: "2 Hours", rating: 4.1, reviews: 1240, img: watchlist_3 },
    ];

    return (
        <div className='p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
            {relatedMovies.map((movie, index) => (
                <div key={index} className='relative group cursor-pointer'>
                    <img src={movie.img} alt={movie.title} className='rounded-lg object-cover w-full' />
                    {/* {movie.isNew && (
                        <span className='absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full'>NEW 5.0</span>
                    )}
                    <HiOutlineHeart className='absolute top-2 left-2 text-white text-2xl drop-shadow-lg opacity-70 group-hover:opacity-100' />
                    <div className='p-2'>
                        <p className='font-semibold truncate'>{movie.title}</p>
                        <div className='flex items-center space-x-2 text-xs text-[#AECFFF] mt-1'>
                            <span>Production year {movie.year}</span>
                            <span>|</span>
                            <span>{movie.hours}</span>
                            <span>|</span>
                            <div className='flex items-center'>
                                <AiFillStar className='text-[#FFC107] mr-1' />
                                <span>{movie.rating}</span>
                                <span className='ml-1'>({movie.reviews})</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            ))}
        </div>
    );
};

const WriteReviewModal = ({ onClose }) => {
    const [rating, setRating] = useState(0);

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm'>
            <div className='bg-[#0F294E] p-6 rounded-xl w-full max-w-md shadow-2xl'>
                <div className='flex justify-end items-center mb-1'>
                    <button onClick={onClose} className='text-white hover:text-[#AECFFF] text-2xl'>&times;</button>
                </div>

                <h3 className='text-xl text-center mb-2'>Write review</h3>


                <div className='mb-2 bg-[#193866CC] p-3 rounded-md'>

                    <div className='flex items-center gap-x-3 border-b border-b-[#21477C] pb-2'>
                        <p className=''>Select ratings</p>
                        <div className='flex text-lg'>
                            {[1, 2, 3, 4, 5].map(star => (
                                <button key={star} onClick={() => setRating(star)} className={`transition-colors ${star <= rating ? 'text-[#FFC107]' : 'text-gray-500'} hover:text-[#FFC107]`}>
                                    <AiFillStar />
                                </button>
                            ))}
                        </div>
                    </div>

                    <textarea placeholder='Write something' rows='2' className='w-full bg-transparent py-3 outline-none border-none resize-none text-white placeholder-[#AECFFF]'></textarea>
                </div>


                <button
                    className='w-full mt-6 py-3 rounded-full text-base bg-gradient-to-r from-[#18B451] to-[#4DBB9C] hover:from-[#4DBB9C] hover:to-[#18B451] transition-all'
                >
                    Submit
                </button>
            </div>
        </div>
    );
};


const SingleMoviePage = () => {
    const [activeView, setActiveView] = useState('Related Movies');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const renderContent = () => {
        switch (activeView) {
            case 'Related Movies':
                return <RelatedMoviesView />;
            case 'Comments':
                return <CommentsView />;
            case 'Info':
            default:
                return <InfoView onWriteReview={() => setIsModalOpen(true)} />;
        }
    };

    return (
        <div className='text-white'>
            {/* Breadcrumb Header */}
            <div className='h-[3rem] px-4 bg-[#21477C] -mx-5 -mt-5 flex items-center gap-x-2'>
                <p className='text-[#AECFFF]'>Categories</p>
                <IoIosArrowForward />
                <p className='text-[#AECFFF]'>Romance</p>
                <IoIosArrowForward />
                <p>Love After Lockup</p>
            </div>

            {/* Video Player */}
            <div className='my-3'>
                <video src={video_url} autoPlay={false} controls className='bg-cover w-full h-[50vh] bg-[#0F294E] rounded-md' />
            </div>

            {/* VIEWS (Tabs) */}
            <div className='flex border-b border-[#21477C]'>
                <TabItem
                    title='Related Movies'
                    isActive={activeView === 'Related Movies'}
                    onClick={() => setActiveView('Related Movies')}
                />
                <TabItem
                    title={`Comments(20K)`}
                    isActive={activeView === 'Comments'}
                    onClick={() => setActiveView('Comments')}
                />
                <TabItem
                    title='Info'
                    isActive={activeView === 'Info'}
                    onClick={() => setActiveView('Info')}
                />
            </div>

            {/* View Content */}
            <div className='bg-[#0F294E] -mx-5'>
                {renderContent()}
            </div>

            {/* Write Review Modal */}
            {isModalOpen && <WriteReviewModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}

export default SingleMoviePage;