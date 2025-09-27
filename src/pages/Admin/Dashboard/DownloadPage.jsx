import React from 'react'
import watchlist_1 from '../../../assets/dashboard/watchlist/watchlist_1.png'
import watchlist_2 from '../../../assets/dashboard/watchlist/watchlist_2.png'
import watchlist_3 from '../../../assets/dashboard/watchlist/watchlist_3.png'
import watchlist_4 from '../../../assets/dashboard/watchlist/watchlist_4.png'
import watchlist_5 from '../../../assets/dashboard/watchlist/watchlist_5.png'
import watchlist_6 from '../../../assets/dashboard/watchlist/watchlist_6.png'

const trendingItems = [
    { image: watchlist_1, title: 'Love after lockup', year: '2021', duration: '2 hours', rating: '249', views: '4.8' },
    { image: watchlist_2, title: 'Double Cross', year: '2023', duration: '2 hours', rating: '249', views: '4.8' },
    { image: watchlist_3, title: 'Double Cross', year: '2023', duration: '2 hours', rating: '249', views: '4.8' },
    { image: watchlist_4, title: 'The Sea Beast', year: '2023', duration: '2 hours', rating: '249', views: '4.8' },
    { image: watchlist_5, title: 'Double Cross', year: '2023', duration: '2 hours', rating: '249', views: '4.8' },
    { image: watchlist_6, title: 'Love after lockup', year: '2021', duration: '2 hours', rating: '249', views: '4.8' },
];


const DownloadPage = () => {
    return (
        <div className='text-white'>
            <div className='h-[3rem] px-4 bg-[#21477C] -mx-5 -mt-5 flex items-center gap-x-4'>
                <p>Downloads</p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {trendingItems.map((item, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
                        <img src={item.image} alt={item.title} className="w-full" />
                        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FaPlayCircle className="text-white text-5xl cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute top-2 right-2 text-white p-2 rounded-full">
                        <FaHeart className="text-gray-400 hover:text-red-500 transition-colors" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                        <p className="text-lg font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-300">{item.year} - {item.duration}</p>
                    </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DownloadPage