import { Button } from '@/components/atoms';
import {
  basicFadeUp,
  basicFadeUp2,
  basicFadeUp3,
  basicScaleUp,
} from '@/config';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
    <motion.div
      {...basicFadeUp}
      className="w-fit flex flex-col rounded-xl shadow-6 p-4 gap-3 lg:shadow-none lg:hover:shadow-6 transition-all ease-in-out duration-500 dark:lg:hover:shadow-d6"
    >
      <motion.div
        {...basicScaleUp}
        className="relative w-[15rem] h-[20rem] lg:w-[17rem] lg:h-[25rem] ll:w-[20rem] ll:h-[27rem] overflow-hidden rounded-xl "
      >
        <Image
          src={props.image}
          alt={props.name}
          fill
          className="object-cover md:hover:scale-110 transition-all ease-in-out duration-700"
        />
      </motion.div>
      <motion.div {...basicFadeUp2} className="flex flex-col max-w-[15rem]">
        <p className="text-lg font-semibold font-primary leading-none text-typo-neutral-100 dark:text-white-color">
          {props.name}
        </p>
        <p className="font-serif text-sm font-medium text-typo-neutral-80 dark:text-typo-neutral-40">
          Based On {props.location}
        </p>
      </motion.div>
      <motion.p
        {...basicFadeUp3}
        className="max-w-[15rem] md:max-w-full font-serif"
      >
        {props.description}
      </motion.p>
      <motion.div
        {...basicFadeUp3}
        className="w-full flex gap-3 mt-4 justify-end"
      >
        {/* <Link
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const href = e.currentTarget.href;
            const targetId = href.replace(/.*\#/, '');
            const elem = document.getElementById(targetId);
            elem?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
          className="w-full"
        >
          <Button variant="primary" className="w-full">
            Lets Talk
          </Button>
        </Link> */}
        <a href="/files/cv.pdf" target="_blank">
          <Button variant="primary">CV</Button>
        </a>
      </motion.div>
    </motion.div>
  );
};
