import React, { Fragment, useEffect, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { useMediaQuery } from 'react-responsive';
import { NavListItem, Toggle } from '@/components/atoms';
import { useAppSelector } from '@/app/hook';
import { Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { Logo } from '@/assets';

type NavbarProps = {
  hideNav: boolean;
};

export const Navbar = (props: NavbarProps) => {
  const { scrollTop } = useAppSelector((state) => state.scroll);
  const [isOpen, setIsOpen] = useState(false);
  const medium = useMediaQuery({ minWidth: 768 });

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <React.Fragment>
      <div className="w-full fixed top-5 z-50 px-4 md:px-6 lg:px-8 ll:px-32">
        {/* <Transition
          show={props.hideNav}
          enter="transform transition ease-out duration-300"
          enterFrom="-translate-y-[10rem]"
          enterTo="translate-y-0"
          leave="transform transition ease-in duration-300"
          leaveFrom="translate-y-0"
          leaveTo=" -translate-y-[10rem]"
        > */}
        <nav
          className={`${scrollTop > 0 ? 'shadow-6 dark:shadow-d6' : ''} ${
            scrollTop > 864 ? 'bg-white-color dark:bg-dark-primary' : ''
          } flex w-full justify-between px-5 items-center top-4 bg-white dark:bg-typo-neutral-100 rounded-full md:px-8 md:transition-all md:ease-in-out md:duration-300`}
        >
          {/* <button
            onClick={() =>
              theme == 'dark' ? setTheme('light') : setTheme('dark')
            }
            className="text-black"
          >
            Toggle Mode
          </button> */}
          <div className="dark:text-white-color text-dark-primary font-primary font-semibold text-6xl md:text-7xl lg:text-[5rem] flex items-center -ml-2">
            <Logo />
            <Transition
              show={scrollTop === 0}
              enter="transform transition ease-out duration-300"
              enterFrom="-translate-x-[2rem]"
              enterTo="translate-x-0"
              leave="transform transition ease-in duration-300"
              leaveFrom="translate-x-0"
              leaveTo=" -translate-x-[2rem]"
            >
              <p className="text-lg md:text-xl lg:text-2xl font-serif -ml-2">
                jeye_
              </p>
            </Transition>
          </div>
          <div className="hidden md:flex md:gap-4">
            <NavListItem onClick={scrollToSection} />
            <Toggle />
          </div>
          <div className="flex md:hidden items-center">
            <div>
              <Toggle />
            </div>
            <Hamburger
              toggled={isOpen}
              onToggle={(toogled) => {
                if (toogled) {
                  setIsOpen(true);
                } else {
                  setIsOpen(false);
                }
              }}
              size={20}
              rounded
            />
          </div>
        </nav>
        {/* </Transition> */}
      </div>
      <Transition
        as={Fragment}
        show={isOpen && !medium}
        enter="transform transition ease-out duration-500"
        enterFrom="translate-x-[30rem]"
        enterTo="translate-y-0"
        leave="transform transition ease-in duration-500"
        leaveFrom="translate-y-0"
        leaveTo=" translate-x-[30rem]"
      >
        <div className="fixed inset-0 bg-white-color z-30 pt-32 px-4 dark:bg-dark-primary">
          <NavListItem onClick={scrollToSection} />
        </div>
      </Transition>
      {/* {isOpen && !medium ? (
      ) : null} */}
    </React.Fragment>
  );
};
