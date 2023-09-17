/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';
import logo from '../../assets/logo.png';
import MyToggle from '../MyToggle/MyToggle';

const items = [
  {
    id: 1,
    to: 'home',
    title: 'Home',
  },
  {
    id: 2,
    to: 'about',
    title: 'About',
  },
  {
    id: 3,
    to: 'services',
    title: 'Services',
  },
  {
    id: 4,
    to: 'contact',
    title: 'Contact me',
  },
];

const Navbar = ({ changeMode }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="header w-full bg-white dark:bg-slate-600 top-0 h-20 fixed shadow-md flex justify-center z-50">
      <nav className="nav container w-10/12 flex items-center justify-between">
        <div className="w-24">
          <img className="w-full" src={logo} alt="" />
        </div>
        <ul
          className={`${
            !open ? 'hidden' : 'flex'
          } sm:w-2/4 xl:w-2/5 2xl:w-2/6 md:flex ul justify-between shadow-none max-md:shadow-md max-md:bg-slate-200 dark:max-md:bg-slate-400`}>
          {items.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer uppercase font-normal text-sm mt-px dark:text-white">
              <Link activeClass="active" offset={-80} smooth spy to={item.to}>
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <MyToggle changeMode={changeMode} />
          </li>
        </ul>
        <svg
          onClick={() => {
            setOpen(!open);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${open ? 'hidden' : 'block'} w-6 h-6 md:hidden dark:text-white`}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
        <svg
          onClick={() => {
            setOpen(!open);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${!open ? 'hidden' : 'block'} w-6 h-6 md:hidden dark:text-white`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </nav>
    </header>
  );
};

export default Navbar;
