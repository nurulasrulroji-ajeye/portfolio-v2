import React, { useEffect, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { Variants, motion } from 'framer-motion';
import { NavListItem } from '@/components/atoms';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mQuery, setMQuery] = useState<any>({
    matches:
      typeof window !== 'undefined' && window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 768px)');
    mediaQuery.addListener(setMQuery);
    return () => mediaQuery.removeListener(setMQuery);
  }, []);
  return (
    <React.Fragment>
      <div className="w-full fixed top-5 z-[99999] px-5 md:px-16 lg:px-32">
        <nav className="flex w-full justify-between px-5 py-3 items-center top-4 bg-white-color shadow-md rounded-full md:px-8 md:hover:shadow-[5px_5px_rgba(0,0,0,0.5)] md:transition-all md:ease-in-out md:duration-300">
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
      </div>
      {isOpen && !mQuery.matches ? (
        <motion.div
          className="absolute inset-y-0 right-0 bg-yellow-color shadow-lg pt-40 px-4 z-10"
          initial={{ opacity: 0, right: 0 }}
          animate={{ opacity: 1, left: 0 }}
          exit={{ opacity: 0, right: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          <NavListItem />
        </motion.div>
      ) : null}
    </React.Fragment>
  );
};
