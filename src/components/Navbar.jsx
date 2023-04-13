import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentHash = location.hash;

    if (currentHash) {
      const matchingLink = navLinks.find((link) => `#${link.id}` === currentHash);
      if (matchingLink) {
        setActive(matchingLink.title);
      }
    } else {
      setActive("");
    }
  }, [location]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            windopw.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain mx-0" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Seongho <span className='sm:block hidden'>| Lee</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}

            >
              <a href={`#${link.id}`}>{link.title}<a />
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20`}></div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar