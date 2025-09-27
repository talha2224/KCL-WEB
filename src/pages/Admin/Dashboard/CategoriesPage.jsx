import React from 'react';
import { Link } from 'react-router-dom';
import cat_1 from '../../../assets/dashboard/categories/cat1.png';
import cat_2 from '../../../assets/dashboard/categories/cat2.png';
import cat_3 from '../../../assets/dashboard/categories/cat3.png';
import cat_4 from '../../../assets/dashboard/categories/cat4.png';
import cat_5 from '../../../assets/dashboard/categories/cat5.png';
import cat_6 from '../../../assets/dashboard/categories/cat6.png';
import cat_7 from '../../../assets/dashboard/categories/cat7.png';
import cat_8 from '../../../assets/dashboard/categories/cat8.png';
import cat_9 from '../../../assets/dashboard/categories/cat9.png';
import cat_10 from '../../../assets/dashboard/categories/cat10.png';
import cat_11 from '../../../assets/dashboard/categories/cat11.png';
import cat_12 from '../../../assets/dashboard/categories/cat12.png';
import cat_13 from '../../../assets/dashboard/categories/cat13.png';
import cat_14 from '../../../assets/dashboard/categories/cat14.png';
import cat_15 from '../../../assets/dashboard/categories/cat15.png';
import cat_16 from '../../../assets/dashboard/categories/cat16.png';

const categories = [
    { name: 'Action', image: cat_1 },
    { name: 'Comedy', image: cat_2 },
    { name: 'Adventure', image: cat_3 },
    { name: 'Romance', image: cat_4 },
    { name: 'Musical', image: cat_5 },
    { name: 'Crime', image: cat_6 },
    { name: 'Drama', image: cat_7 },
    { name: 'Horror', image: cat_8 },
    { name: 'Thriller', image: cat_9 },
    { name: 'Fiction', image: cat_10 },
    { name: 'Mystery', image: cat_11 },
    { name: 'Fantasy', image: cat_12 },
    { name: 'Animation', image: cat_13 },
    { name: 'Documentary', image: cat_14 },
    { name: 'Biography', image: cat_15 },
    { name: 'War', image: cat_16 },
];

const CategoriesPage = () => {
    return (
        <div className='text-white'>
            <div className='h-[3rem] px-4 bg-[#21477C] -mx-5 -mt-5 flex items-center gap-x-4'>
                <p>Categories</p>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                        <Link to={`/dashboard/categories/movie/${index}`}>
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                            <p className="text-xl font-bold">{category.name}</p>
                        </div> */}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
