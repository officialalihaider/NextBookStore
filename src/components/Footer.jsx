import React from 'react';
import { NavLink } from 'react-router-dom';
import githubIcon from '../assets/socialIcons/github.svg';
import linkedinIcon from '../assets/socialIcons/linkedin.svg';
import instagramIcon from '../assets/socialIcons/instagram.svg';

const Footer = () => {
  return (
    <footer>
      <div className="Footer bottom-0 w-full min-h-[20vh] text-center bg-slate-200 p-2 flex items-center font-modern text-slate-900 cursor-default max-md:flex-col max-md:gap-5 ">
        <div className="w-1/2 max-md:w-4/5 max-md:mt-5">
          <NavLink
            to="/"
            className="text-3xl font-bold max-md:text-2xl max-sm:text-xl"
          >
            NextBookStore
          </NavLink>
          <h1 className="text-sm text-slate-500 max-sm:text-xs">
            &#169;2024 All rights reserved.
          </h1>
        </div>
        <div className="w-1/2 max-md:w-4/5 max-md:mb-5">
          <h1 className="text-lg font-semibold mb-2 max-sm:text-base">
            - Connect with us -
          </h1>
          <div className="flex justify-center items-center gap-8">
            <a href="https://github.com/officialalihaider">
              <img
                src={githubIcon}
                alt="GitHub"
                className="h-12 hover:scale-125 transition-transform max-sm:h-10"
              />
            </a>
            <a href="https://www.linkedin.com/in/ali-haider-command-user/">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="h-12 hover:scale-125 transition-transform max-sm:h-10"
              />
            </a>
            <a href="https://www.instagram.com/oyee_haider">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="h-12 hover:scale-125 transition-transform max-sm:h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer