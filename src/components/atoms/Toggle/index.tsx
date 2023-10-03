import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Moon, Sun } from '@/assets';

export const Toggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const currentTheme = theme === 'system' ? systemTheme || '' : theme || '';

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initTheme = () => {
    setTheme(currentTheme);
  };

  useEffect(() => {
    // console.log(systemTheme);
    initTheme();
    setMounted(true);
  }, [currentTheme, initTheme]);

  return (
    <button
      onClick={() =>
        currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
      }
      className="w-20 shadow-1 dark:shadow-d1 p-1 flex justify-start dark:justify-end rounded-full "
    >
      {mounted && theme == 'dark' ? (
        <motion.div
          layout
          className="text-lg bg-white-color text-dark-primary shadow-md p-1 rounded-full"
        >
          <Moon />
        </motion.div>
      ) : (
        <motion.div
          layout
          className="text-lg bg-dark-primary text-white-color shadow-md p-1 rounded-full"
        >
          <Sun />
        </motion.div>
      )}
    </button>
  );
};
