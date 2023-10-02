import React from 'react';
import {
  AirbnbIcon,
  AfterPayIcon,
  AdobeIcon,
  AmazoneIcon,
  AirStalkerIcon,
  ActiveCampIcon,
} from '@/assets';
import { THorizonInfinity } from '@/domain/entities/PartsType';

type InfinityHorizontalScrollProps = {
  data: THorizonInfinity[];
};

export const InfinityHorizontalScroll = (
  props: InfinityHorizontalScrollProps
) => {
  return (
    <div className="w-full inline-flex flex-nowrap bg-white overflow-hidden shadow-1 rounded-none md:rounded-full dark:bg-black dark:shadow-d1">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-6 lg:[&_li]:mx-8 animate-infinite-scroll">
        {props.data.map((icon) => (
          <li
            className="text-6xl md:text-7xl lg:text-8xl ll:text-9xl text-dark-primary dark:text-white-color"
            key={icon.id}
          >
            {icon.icon}
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-6 lg:[&_li]:mx-8 animate-infinite-scroll"
        aria-hidden="true"
      >
        {props.data.map((icon) => (
          <li
            className="text-6xl md:text-7xl lg:text-8xl ll:text-9xl text-dark-primary dark:text-white-color"
            key={icon.id}
          >
            {icon.icon}
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-6 lg:[&_li]:mx-8 [&_svg]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {props.data.map((icon) => (
          <li
            className="text-6xl md:text-7xl lg:text-8xl ll:text-9xl text-dark-primary dark:text-white-color"
            key={icon.id}
          >
            {icon.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};
