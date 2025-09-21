import React, { useEffect, useRef, useState } from 'react';
import { adminNav } from '../../../constants/sidebarData';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoLogOut } from 'react-icons/io5';
import { useSidebar } from '../../../context/SidebarContext';
import { RxCross2 } from 'react-icons/rx';
import Logo from '../../../assets/logo.png'

const Sidebar = () => {
  const location = useLocation().pathname.split("/")[2];
  console.log(location,'location')
  const [showLogout, setshowLogout] = useState(false)
  const { isNavOpen, toggleNav } = useSidebar();
  const sidebarRef = useRef(null);
  const nav = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleNav();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleNav]);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`lg:block hidden w-[15rem] h-[100vh] bg-[#0F294E] relative border-r border-r-[#21477C]`}>
        <div className="px-5 py-2 -ml-3 border-b border-b-[#21477C]">
          <img src={Logo} alt="" className='' />
        </div>
        <div className='mt-4'>
          {adminNav?.map((i) => (
            <Link 
              to={`/dashboard/${i.link}`} 
              key={i.id} 
              className={`flex items-center gap-x-3 mb-2 cursor-pointer transition-all duration-200 
                ${location === i.link ? "bg-[#21477C] shadow-[0_4px_15px_rgba(0,0,0,0.2)] rounded-lg py-2 px-5 p-2 mx-2" : "py-2 px-5 hover:bg-[#15345b] hover:shadow-lg"}`}
            >
              <div className='text-white'>{i.icon}</div>
              <p className={`text-sm ${location === i.link ? "text-[#fff]" : "text-[#8F8F8F]"}`}>{i.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar */}
      {
        isNavOpen && (
          <div className={`lg:hidden block w-[14rem] z-50 h-[100vh] bg-[#0F294E] border-r border-r-[#21477C] fixed top-0 left-0 transition-all duration-300 ease-in-out ${isNavOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`} ref={sidebarRef}>
            <div className="px-5 py-1 -ml-3 border-b border-b-[#21477C]">
              <img src={Logo} alt="" className='' />
            </div>
            <div className='mt-4'>
              {adminNav?.map((i) => (
                <Link 
                  to={`/dashboard/${i.link}`} 
                  key={i.id} 
                  className={`flex items-center gap-x-3 mb-2 cursor-pointer transition-all duration-200
                    ${location === i.link 
                      ? "bg-[#21477C] shadow-[0_4px_15px_rgba(0,0,0,0.2)] rounded-lg py-2 px-5 p-2 mx-2" 
                      : "py-2 px-5 hover:bg-[#15345b] hover:shadow-lg"
                    }`}
                >
                  <div className='text-white'>{i.icon}</div>
                  <p className={`text-sm ${location === i.link ? "text-[#fff]" : "text-[#8F8F8F]"}`}>{i.name}</p>
                </Link>
              ))}
            </div>
          </div>
        )
      }
    </>
  );
};

export default Sidebar;
