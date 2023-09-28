import React, { Fragment, useEffect, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { useMediaQuery } from 'react-responsive';
import { NavListItem } from '@/components/atoms';
import { useAppSelector } from '@/app/hook';
import { Transition } from '@headlessui/react';

type NavbarProps = {
  hideNav: boolean;
};

export const Navbar = (props: NavbarProps) => {
  const { scrollTop } = useAppSelector((state) => state.scroll);
  const [isOpen, setIsOpen] = useState(false);
  const medium = useMediaQuery({ minWidth: 768 });

  return (
    <React.Fragment>
      <div className="w-full fixed top-5 z-50 px-5 md:px-16 lg:px-32">
        <Transition
          show={props.hideNav}
          enter="transform transition ease-out duration-300"
          enterFrom="-translate-y-[10rem]"
          enterTo="translate-y-0"
          leave="transform transition ease-in duration-300"
          leaveFrom="translate-y-0"
          leaveTo=" -translate-y-[10rem]"
        >
          <nav
            className={`${scrollTop > 0 ? 'shadow-6' : ''} ${
              scrollTop > 864 ? 'bg-white-color' : ''
            } flex w-full justify-between px-5 py-3 items-center top-4 bg-white rounded-full md:px-8 md:transition-all md:ease-in-out md:duration-300`}
          >
            <div className="font-sugarpeachy text-4xl text-shadow-retro-small text-dark-primary md:text-5xl lg:text-[50px] ">
              Ajeye
            </div>
            <div className="hidden md:block">
              <NavListItem />
            </div>
            <div className="block md:hidden">
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
        </Transition>
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
        <div className="fixed inset-0 bg-white-color z-10 pt-40 px-4">
          <NavListItem />
        </div>
      </Transition>
      {/* {isOpen && !medium ? (
      ) : null} */}
    </React.Fragment>
  );
};
