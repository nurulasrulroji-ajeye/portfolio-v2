import { WaIcon } from '@/assets';
import { TTabs } from '@/domain/entities/PartsType';
import { motion } from 'framer-motion';
import React from 'react';

type TabsProps = {
  data: TTabs[];
  layoutId: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export const Tabs = (props: TabsProps) => {
  return (
    <div className="flex w-full shadow-6 bg-white-color rounded-full py-1 px-1 dark:bg-dark-primary dark:shadow-d6">
      {props.data.map((tab, idx) => (
        <button
          key={idx}
          onClick={() => props.setActiveTab(tab.id)}
          className={`${
            props.activeTab === tab.id
              ? ''
              : 'hover:text-dark-primary/60 dark:hover:text-white-color/60'
          } relative text-lg font-serif font-semibold text-center w-full  rounded-full py-2 text-dark-primary flex items-center justify-center dark:text-white-color`}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {props.activeTab === tab.id && (
            <React.Fragment>
              <motion.span
                layoutId={props.layoutId}
                className="absolute inset-0 z-10 bg-dark-primary dark:bg-white-color"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
              <span className="absolute inset-0 text-white-color z-20 flex justify-center items-center dark:text-dark-primary">
                {tab.icon ? <span className="mr-2">{tab.icon}</span> : null}
                {tab.name}
              </span>
            </React.Fragment>
          )}
          {tab.icon ? <span className="mr-2">{tab.icon}</span> : null}
          {tab.name}
        </button>
      ))}
    </div>
  );
};
