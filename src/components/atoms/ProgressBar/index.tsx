import { HtmlIcon } from '@/assets';
import { animate, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

type ProgressProps = {
  percentage: number;
  classname_progress?: string;
  classname_text?: string;
  icon: JSX.Element;
};
export const ProgressBar = (props: ProgressProps) => {
  const progressTextRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const progressText = progressTextRef.current?.textContent;
    if (progressText != null) {
      animate(parseInt(progressText), props.percentage, {
        duration: 2,
        onUpdate: (cv) => {
          if (progressTextRef.current) {
            progressTextRef.current.textContent = cv.toFixed(0);
          }
        },
      });
    }
  }, [props.percentage]);
  return (
    <div className="flex gap-3 items-center">
      <div className="rounded-full h-8 w-full shadow-6 overflow-hidden dark:shadow-d6">
        <motion.div
          animate={{
            width: `${props.percentage}%`,
          }}
          transition={{
            duration: 2,
          }}
          className={`h-full w-[0%] rounded-s-full rounded-e-full bg-dark-primary flex items-center justify-end dark:bg-white-color ${props.classname_progress}`}
        >
          <span className="bg-dark-primary w-6 h-6 rounded-full flex justify-center items-center mr-1 drop-shadow-md shadow-md text-white-color dark:bg-white-color dark:text-dark-primary">
            {props.icon}
          </span>
        </motion.div>
      </div>
      <div
        className={`text-lg font-baristo text-dark-primary font-bold flex dark:text-white-color  ${props.classname_text}`}
      >
        <p ref={progressTextRef}>0</p>
        <p>%</p>
      </div>
    </div>
  );
};
