import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAppSelector } from '@/app/hook';
import { motion } from 'framer-motion';
import { NavListData } from '@/domain/dummyData/PartsData';

type NavListItemProps = {
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export const NavListItem = (props: NavListItemProps) => {
  const { pageScroll } = useAppSelector((state) => state.scroll);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-1 lg:gap-3">
      {NavListData.map((item, idx) => (
        <Link
          key={idx}
          className="relative text-3xl font-bold font-serif py-3 text-center md:border-none md:text-lg lg:text-xl md:font-normal md:text-dark-secondary md:cursor-pointer md:py-1 md:px-4 md:rounded-full md:w-full lg:hover:text-typo-neutral-60 transition-all ease-in-out duration-500 dark:text-white-color dark:lg:hover:text-typo-neutral-50"
          href={`#${item.id}`}
          onClick={props.onClick}
        >
          {pageScroll === item.id && (
            <React.Fragment>
              <motion.span
                layoutId="navlist"
                className="absolute inset-0 z-10 bg-dark-primary dark:bg-white-color"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
              <span className="absolute inset-0 text-white z-20 flex justify-center items-center dark:text-dark-primary">
                {item.label}
              </span>
            </React.Fragment>
          )}
          {item.label}
        </Link>
      ))}
    </div>
  );
};
