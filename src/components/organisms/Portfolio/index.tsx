import { DashboardSvg, ProjectSvg, SocmedSvg, TodoSvg } from '@/assets';
import { Button } from '@/components/atoms';
import { useAppSelector } from '@/app/hook';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  basicFadeDown,
  basicFadeUp2,
  basicFadeUp3,
  basicScaleDown,
  basicScaleUp,
} from '@/config';
import { useMediaQuery } from 'react-responsive';

export const Portfolio = () => {
  const { scrollTop } = useAppSelector((state) => state.scroll);
  const medium = useMediaQuery({ minWidth: 768 });

  return (
    <div
      className="w-full px-5 md:px-8 lg:px-16 ll:px-40 bg-white pb-20 md:pb-24 pt-28 lg:pt-40 dark:bg-black"
      id="project"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-primary text-dark-primary dark:text-white-color">
        My Project.
      </h1>
      <div className="w-full flex-col gap-5 flex pt-5">
        {scrollTop > (medium ? 2300 : 2700) ? (
          <motion.p
            {...basicFadeDown}
            className="font-serif text-typo-neutral-80 text-base md:text-lg lg:text-2xl dark:text-typo-neutral-40 pb-3 lg:pb-10"
          >
            Unlocking the power of design and code, my portfolio is a canvas
            where imagination meets innovation. Explore a collection of visually
            captivating and seamlessly functional projects that push the
            boundaries of frontend development. Join me on this inspiring
            journey as i create digital experiences that leave a lasting impact.
          </motion.p>
        ) : null}
        <div className="w-full flex flex-col justify-center items-center gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-20">
          <div className="lg:row-span-2">
            <div className=" mb-8 shadow-6 p-4 rounded-[2rem]">
              {scrollTop > (medium ? 2400 : 2800) ? (
                <motion.div
                  {...basicScaleDown}
                  className="w-full text-[18rem] -my-10 flex justify-center md:text-[25rem] ll:text-[32rem]"
                >
                  <ProjectSvg />
                </motion.div>
              ) : null}
              {scrollTop > (medium ? 2400 : 2800) ? (
                <motion.p
                  {...basicFadeUp2}
                  className="font-serif text-sm lg:text-base"
                >
                  Every journey begins with an observation or insight. During
                  this phase, you can identify your ultimate goal or
                  destination. Once you have your ultimate goal in mind, you can
                  establish your first micro goal. As you work towards your
                  micro goal, you may encounter obstacles. Defining these
                  problems clearly will make it easier to find solutions. After
                  achieving your first micro goal, take what you have learned
                  and be prepared for the next one, and so on, until you reach
                  your final destination. Use Discovery Questions to help define
                  your micro goals and stay focused on your journey.
                </motion.p>
              ) : null}
            </div>
            <div className="flex flex-col gap-8 bg-white p-4 rounded-[30px] lg:basis-1/2 shadow-1 lg:shadow-none lg:hover:shadow-1 lg:transition-all lg:ease-in-out lg:duration-500 dark:bg-black dark:lg:hover:shadow-d1 dark:shadow-d1">
              {scrollTop > (medium ? 3000 : 3100) ? (
                <motion.div
                  {...basicScaleUp}
                  className="relative w-full rounded-[30px] shadow-6 dark:shadow-d6 stroke-dark-primary text-white-color dark:stroke-white-color dark:text-dark-primary text-[14rem] flex justify-center md:text-[20rem] ll:text-[22rem]"
                >
                  <SocmedSvg />
                </motion.div>
              ) : null}
              <div className="flex flex-col gap-1">
                {scrollTop > (medium ? 3100 : 3300) ? (
                  <motion.h3
                    {...basicFadeUp2}
                    className="text-xl font-primary font-semibold text-dark-primary dark:text-white-color"
                  >
                    Opinia.id (Social Media Apps)
                  </motion.h3>
                ) : null}
                {scrollTop > (medium ? 3100 : 3300) ? (
                  <motion.p
                    {...basicFadeUp3}
                    className="text-base md:text-lg font-serif text-typo-neutral-80 dark:text-typo-neutral-40"
                  >
                    Opinion is an Inspiring and Fun social media platform! A fun
                    place for you to network, interact, share literacy, and
                    inspire each other.
                  </motion.p>
                ) : null}
              </div>
              {scrollTop > (medium ? 3100 : 3300) ? (
                <motion.div
                  {...basicScaleDown}
                  className="w-full flex justify-end"
                >
                  <a
                    href="https://opinia.id/home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary">Visit Now!</Button>
                  </a>
                </motion.div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-8 bg-white p-4 rounded-[30px] lg:basis-1/2 shadow-1 lg:shadow-none lg:hover:shadow-1 lg:transition-all lg:ease-in-out lg:duration-500 dark:bg-black dark:lg:hover:shadow-d1 dark:shadow-d1">
            {scrollTop > (medium ? 2400 : 3900) ? (
              <motion.div
                {...basicScaleUp}
                className="overflow-hidden w-full p-5 rounded-[30px] shadow-6 dark:shadow-d6 text-[12rem] flex justify-center md:text-[18rem] ll:text-[20rem]"
              >
                <DashboardSvg />
              </motion.div>
            ) : null}
            <div className="flex flex-col gap-1">
              {scrollTop > (medium ? 2400 : 4100) ? (
                <motion.h3
                  {...basicFadeUp2}
                  className="text-xl font-primary font-semibold text-dark-primary dark:text-white-color"
                >
                  Dashboard Opinia.id
                </motion.h3>
              ) : null}
              {scrollTop > (medium ? 2400 : 4100) ? (
                <motion.p
                  {...basicFadeUp3}
                  className="text-base md:text-lg font-serif text-typo-neutral-80 dark:text-typo-neutral-40"
                >
                  Opinion is an Inspiring and Fun social media platform! A fun
                  place for you to network, interact, share literacy, and
                  inspire each other.
                </motion.p>
              ) : null}
            </div>
            {scrollTop > (medium ? 2400 : 4100) ? (
              <motion.div
                {...basicScaleDown}
                className="w-full flex justify-end"
              >
                <a
                  href="https://github.com/nurulasrulroji-ajeye?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">Visit Now!</Button>
                </a>
              </motion.div>
            ) : null}
          </div>
          <div className="flex flex-col gap-8 bg-white p-4 rounded-[30px] shadow-1 lg:basis-1/2 lg:shadow-none lg:hover:shadow-1 lg:transition-all lg:ease-in-out lg:duration-500 dark:bg-black dark:lg:hover:shadow-d1 dark:shadow-d1">
            {scrollTop > (medium ? 3000 : 4400) ? (
              <motion.div
                {...basicScaleDown}
                className="overflow-hidden w-full p-5 rounded-[30px] shadow-6 dark:shadow-d6 text-[12rem] flex justify-center md:text-[18rem] ll:text-[20rem] "
              >
                <TodoSvg />
              </motion.div>
            ) : null}
            <div className="flex flex-col gap-1">
              {scrollTop > (medium ? 3200 : 4600) ? (
                <motion.h3
                  {...basicFadeUp2}
                  className="text-xl font-primary font-semibold text-dark-primary dark:text-white-color"
                >
                  Todo Apps
                </motion.h3>
              ) : null}
              {scrollTop > (medium ? 3200 : 4600) ? (
                <motion.p
                  {...basicFadeUp3}
                  className="text-base md:text-lg font-serif text-typo-neutral-80 dark:text-typo-neutral-40"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos illo eaque doloribus reprehenderit autem, vitae
                  ratione aliquid consectetur incidunt rem, nesciunt culpa quas
                  nostrum, mollitia itaque quisquam! Deleniti, modi optio?
                </motion.p>
              ) : null}
            </div>
            {scrollTop > (medium ? 3200 : 4600) ? (
              <motion.div {...basicScaleUp} className="w-full flex justify-end">
                <a
                  href="https://github.com/nurulasrulroji-ajeye?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">Visit Now!</Button>
                </a>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10 lg:mt-20">
        <a
          href="https://github.com/nurulasrulroji-ajeye?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base md:text-lg font-primary text-dark-primary hover:border-b border-dark-primary font-semibold dark:text-white-color dark:border-white-color"
        >
          And Many More.
        </a>
      </div>
    </div>
  );
};
