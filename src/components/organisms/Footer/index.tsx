import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroImg } from '@/assets';
import { Button, SocmedList } from '@/components/atoms';
import { NavListData } from '@/domain/dummyData/PartsData';
import { SocmedData } from '@/domain/dummyData/SocmedData';
import { useAppSelector } from '@/app/hook';
import { useMediaQuery } from 'react-responsive';
import { basicFadeUp, basicFadeUp2, basicFadeUp3 } from '@/config';
import { motion } from 'framer-motion';

export const Footer = () => {
  const { scrollTop } = useAppSelector((state) => state.scroll);
  const medium = useMediaQuery({ minWidth: 768 });

  return (
    <footer className="w-full bg-white-color px-3 md:px-5 pb-5 pt-5 dark:bg-dark-primary">
      {scrollTop > (medium ? 4700 : 6000) ? (
        <motion.div
          {...basicFadeUp3}
          className="bg-dark-primary dark:bg-white-color w-full rounded-[2rem] pb-8 pt-8 lg:pt-10 flex flex-col items-center gap-4"
        >
          <div className="p-4 shadow-d1 rounded-3xl flex flex-col items-center gap-3 dark:shadow-1">
            <div className="w-20 h-20 lg:w-40 lg:h-40 rounded-full relative overflow-hidden">
              <Image src={heroImg} alt="pp" fill className="object-cover" />
            </div>
            <div className="leading-none text-center font-serif">
              <p className="text-white-color font-medium text-sm lg:text-lg dark:text-dark-primary">
                Nurul Asrul Roji(Aji/Ajeye)
              </p>
              <p className="text-typo-neutral-30 text-xs lg:text-sm dark:text-typo-neutral-80">
                Frontend Developer | Web Developer
              </p>
              <p className="text-typo-neutral-50 text-[0.6rem] lg:text-sm leading-4 ">
                Based on South Jakarta, Indonesia
              </p>
            </div>
            <p className="text-justify max-w-[13rem] lg:max-w-[18rem] text-white-color font-serif py-2 text-xs lg:text-base dark:text-dark-primary">
              Embracing a never-ending learning journey, I delight in leveling
              up my frontend expertise.
            </p>
            <a
              href="https://github.com/nurulasrulroji-ajeye/portfolio-v2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="light" className="!py-2 text-xs">
                Source Code
              </Button>
            </a>
          </div>
          <SocmedList data={SocmedData} />
          <nav className="w-full mt-20 flex justify-center border-b border-white-color px-6 pb-4 divide-x divide-typo-neutral-30 dark:border-dark-primary dark:divide-dark-primary">
            {NavListData.map((item, idx) => (
              <Link
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();

                  const href = e.currentTarget.href;
                  const targetId = href.replace(/.*\#/, '');
                  const elem = document.getElementById(targetId);
                  elem?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
                key={idx}
                className="text-white-color font-serif px-2 md:px-4 lg:px-6 lg:text-lg lg:hover:text-typo-neutral-50 dark:text-dark-primary "
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div>
            <p className="text-white-color font-serif text-sm font-semibold pt-2 dark:text-dark-primary">
              Copyright © 2023 Nurul Asrul Roji
            </p>
          </div>
        </motion.div>
      ) : null}
    </footer>
  );
};
