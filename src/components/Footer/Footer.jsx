/* eslint-disable react/jsx-no-target-blank */
import { BsTelephone, BsInstagram } from 'react-icons/bs';
import { BiLogoTelegram } from 'react-icons/bi';
import { LiaFacebookF } from 'react-icons/lia';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="bg-slate-600 w-full mt-10 dark:bg-slate-800">
      <div className="container w-10/12 h-24 mx-auto text-white flex flex-col lg:flex-row justify-between items-center">
        <p className="text-2xl">Contact us</p>
        <ul className="flex gap-7 my-2">
          <li>
            <a href="tel:+998958331020" target="_blank">
              <BsTelephone className="text-lg transition-all hover:text-green-500 hover:scale-[1.1]" />
            </a>
          </li>
          <li>
            <a href="https://t.me/possibleeducationbot" target="_blank">
              <BiLogoTelegram className="text-xl transition-all hover:text-blue-400 hover:scale-[1.1]" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <LiaFacebookF className="text-xl transition-all hover:text-blue-700 hover:scale-[1.1]" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/possible_company_?igshid=MzRlODBiNWFlZA==" target="_blank">
              <BsInstagram className="instagram text-lg transition-all hover:text-fuchsia-700 hover:scale-[1.1]" />
            </a>
          </li>
        </ul>
        <p className="text-sm">© {new Date().getFullYear()} Copyright Text</p>
      </div>
    </footer>
  );
};

export default Footer;
