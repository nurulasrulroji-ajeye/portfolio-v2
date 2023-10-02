import React from 'react';
import Link from 'next/link';
import { TSocmed } from '@/domain/entities/SocmedType';

type TSocmedListProps = {
  data: TSocmed[];
};

export const SocmedList = (props: TSocmedListProps) => {
  return (
    <div className="flex gap-2 md:gap-3">
      {props.data.map((item) => (
        <Link
          href={item.link}
          target="_blank"
          key={item.id}
          className="text-base w-7 h-7 md:text-lg md:h-8 md:w-8 lg:text-2xl lg:w-10 lg:h-10 rounded-full bg-dark-primary flex justify-center items-center text-white hover:bg-white-color hover:text-dark-primary hover:border hover:border-dark-primary transition-all ease-in duration-300 dark:bg-white-color dark:text-dark-primary dark:hover:border-white-color dark:hover:bg-dark-primary dark:hover:text-white-color"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};
