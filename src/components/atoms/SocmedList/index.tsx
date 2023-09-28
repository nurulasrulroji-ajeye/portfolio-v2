import React from 'react';
import Link from 'next/link';
import { TSocmed } from '@/domain/entities/SocmedType';

type TSocmedListProps = {
  data: TSocmed[];
};

export const SocmedList = (props: TSocmedListProps) => {
  return (
    <div className="flex w-full gap-3">
      {props.data.map((item) => (
        <Link
          href={item.link}
          target="_blank"
          key={item.id}
          className="text-lg w-8 h-8 md:text-2xl md:h-10 md:w-10 rounded-full bg-dark-primary flex justify-center items-center text-white hover:bg-white-color hover:text-dark-primary hover:border hover:border-dark-primary transition-all ease-in duration-300"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};
