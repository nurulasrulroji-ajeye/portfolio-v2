import { useAppSelector } from '@/app/hook';
import { InfinityHorizontalScroll } from '@/components/molecules';
import {
  basicFadeUp,
  basicFadeUp2,
  basicFadeUp3,
  basicScaleUp,
} from '@/config';
import { HorizonInfinityData } from '@/domain/dummyData/PartsData';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const Work = () => {
  const { scrollTop } = useAppSelector((state) => state.scroll);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const x2 = useMotionValue(0);
  const y2 = useMotionValue(0);
  const rotateX2 = useTransform(y2, [-100, 100], [30, -30]);
  const rotateY2 = useTransform(x2, [-100, 100], [-30, 30]);

  return (
    <div
      className="w-full bg-white-color px-5 md:px-8 lg:px-16 ll:px-40 relative pb-10 dark:bg-dark-primary"
      id="works"
    >
      <div className="absolute -bottom-4 md:-bottom-10 inset-x-0 mx-0 md:mx-5 lg:mx-10">
        <InfinityHorizontalScroll data={HorizonInfinityData} />
      </div>
      <div className="pt-32 md:pt-44 w-full flex flex-col gap-5 pb-20 md:pb-32">
        <div className="flex w-full justify-center items-center">
          {scrollTop > 1000 ? (
            <motion.h1
              {...basicScaleUp}
              className="text-3xl md:text-4xl lg:text-5xl font-primary text-dark-primary dark:text-white-color"
            >
              Work Experience.
            </motion.h1>
          ) : null}
        </div>
        {scrollTop > 1300 ? (
          <motion.p
            {...basicFadeUp}
            className="text-typo-neutral-80 drop-shadow-md font-serif text-center text-base md:text-lg lg:text-2xl dark:text-typo-neutral-40"
          >
            <q>
              Hustle hard, pray harder, and outsmart the game - because fun is
              the secret ingredient to a victorious journey!
            </q>
          </motion.p>
        ) : null}

        <div className="w-full flex flex-col gap-16 pt-10 lg:flex-row lg:justify-center">
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}
            className="bg-white-color p-5 relative rounded-[30px] shadow-1 dark:bg-dark-primary dark:shadow-d1"
          >
            <motion.div
              style={{ x, y, rotateX, rotateY, z: 100 }}
              className="w-[50px] h-[50px] bg-white-color shadow-1 rounded-full flex justify-center items-center text-2xl absolute -top-8 -left-4 font-primary dark:bg-dark-primary dark:shadow-d1"
            >
              {scrollTop > 1300 ? (
                <motion.p {...basicScaleUp}>I</motion.p>
              ) : null}
            </motion.div>
            {scrollTop > 1300 ? (
              <motion.h4
                {...basicFadeUp2}
                className="font-primary text-dark-primary leading-[1] text-lg md:text-2xl md:leading-[1] dark:text-white-color"
              >
                Frontend Developer <br />
                <span className="text-sm md:text-base font-serif text-typo-neutral-80 dark:text-typo-neutral-40">
                  at PT. Opinia Media Technology
                </span>
              </motion.h4>
            ) : null}
            {scrollTop > 1300 ? (
              <motion.ul
                {...basicFadeUp3}
                className="list-disc font-serif text-sm pt-3 pl-5 text-dark-primary md:text-lg dark:text-white-color"
              >
                <li>
                  Assisted in developing and maintaining websites using HTML,
                  CSS, and TypeScript.
                </li>
                <li>
                  Utilized JavaScript frameworks like React/NextJs to build
                  dynamic user interfaces.
                </li>
                <li>
                  Implemented responsive design and ensured consistent visuals
                  across devices.
                </li>
                <li>
                  Participated in testing and debugging processes to ensure
                  high-quality code.
                </li>
                <li>
                  Collaborated with development and design teams to meet client
                  requirements.
                </li>
              </motion.ul>
            ) : null}
          </motion.div>
          <motion.div
            style={{
              x: x2,
              y: y2,
              rotateX: rotateX2,
              rotateY: rotateY2,
              z: 100,
            }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}
            className="bg-white-color p-5 relative rounded-[30px] shadow-1 dark:bg-dark-primary dark:shadow-d1"
          >
            <motion.div
              style={{
                x: x2,
                y: y2,
                rotateX: rotateX2,
                rotateY: rotateY2,
                z: 100,
              }}
              className="w-[50px] h-[50px] bg-white-color shadow-1 rounded-full flex justify-center items-center text-2xl absolute -top-8 -left-4 font-primary dark:bg-dark-primary dark:shadow-d1"
            >
              {scrollTop > 1300 ? (
                <motion.p {...basicScaleUp}>II</motion.p>
              ) : null}
            </motion.div>
            {scrollTop > 1300 ? (
              <motion.h4
                {...basicFadeUp2}
                className="font-primary text-dark-primary leading-[1] text-lg md:text-2xl md:leading-[1] dark:text-white-color"
              >
                Freelance Frontend Developer
              </motion.h4>
            ) : null}
            {scrollTop > 1300 ? (
              <motion.ul
                {...basicFadeUp3}
                className="list-disc font-serif text-sm pt-3 pl-5 text-dark-primary md:text-lg dark:text-typo-neutral-40"
              >
                <li>
                  Completed frontend projects for diverse clients with unique
                  requirements.
                </li>
                <li>
                  Implemented responsive design and enhanced visuals using CSS
                  and JavaScript/TypeScript.
                </li>
                <li>
                  Optimized website performance through image compression and
                  caching.
                </li>
                <li>
                  Built interactive user interfaces using JavaScript frameworks
                  like ReactJs/NextJs.
                </li>
                <li>
                  Met project deadlines and effectively communicated with
                  clients.
                </li>
              </motion.ul>
            ) : null}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
