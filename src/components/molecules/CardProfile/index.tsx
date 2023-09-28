import React from 'react';
import Image from 'next/image';
import { heroImg } from '@/assets';
import { SocmedList } from '@/components/atoms';

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}
interface StaticRequire {
  default: StaticImageData;
}
declare type StaticImport = StaticRequire | StaticImageData;

type CardProfileProps = {
  image: string | StaticImport;
  name: string;
  location: string;
  description: string;
};

export const CardProfile = (props: CardProfileProps) => {
  return (
    <div className="w-fit flex flex-col rounded-xl shadow-6 p-4 gap-3 md:shadow-none md:hover:shadow-6 transition-all ease-in-out duration-500">
      <div className="relative w-[15rem] h-[20rem] md:w-[20rem] md:h-[30rem] overflow-hidden rounded-xl ">
        <Image
          src={props.image}
          alt={props.name}
          fill
          className="object-cover md:hover:scale-110 transition-all ease-in-out duration-700"
        />
      </div>
      <div className="flex flex-col max-w-[15rem]">
        <p className="text-lg font-semibold font-primary leading-none text-typo-neutral-100">
          {props.name}
        </p>
        <p className="font-serif text-sm font-medium text-typo-neutral-80">
          Based On {props.location}
        </p>
      </div>
      <p className="max-w-[15rem] md:max-w-full font-serif">
        {props.description}
      </p>
    </div>
  );
};
