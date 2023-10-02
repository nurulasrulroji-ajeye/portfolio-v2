import {
  DashboardSvg,
  TodoSvg,
  dashboardlotties,
  project,
  projectProcess,
  todoApp,
} from '@/assets';
import Spline from '@splinetool/react-spline';
import { CardProject } from '@/components/molecules';
import Lottie from 'lottie-react';
import { Button } from '@/components/atoms';

export const Portfolio = () => {
  return (
    <div
      className="w-full px-5 md:px-8 lg:px-16 ll:px-40 bg-white pb-20 md:pb-24 pt-28 lg:pt-40 dark:bg-black"
      id="project"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-primary text-dark-primary dark:text-white-color">
        My Project.
      </h1>
      <div className="w-full flex-col gap-5 flex pt-5">
        <p className="font-serif text-typo-neutral-80 text-base md:text-lg lg:text-2xl dark:text-typo-neutral-40">
          Unlocking the power of design and code, my portfolio is a canvas where
          imagination meets innovation. Explore a collection of visually
          captivating and seamlessly functional projects that push the
          boundaries of frontend development. Join me on this inspiring journey
          as we create digital experiences that leave a lasting impact.
        </p>
        <div className="w-full flex flex-col justify-center items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-x-20">
          <div className="lg:row-span-2">
            <div className="w-full rounded-[30px] overflow-hidden mb-8">
              <Lottie animationData={projectProcess} className="" />
            </div>
            <div className="flex flex-col gap-8 bg-white p-4 rounded-[30px] lg:basis-1/2 shadow-1 lg:shadow-none lg:hover:shadow-1 lg:transition-all lg:ease-in-out lg:duration-500 dark:bg-black dark:lg:hover:shadow-d1 dark:shadow-d1">
              <div className="relative w-full h-[200px] md:h-[400px] lg:w-full lg:h-[600px] rounded-[30px] shadow-6 dark:shadow-d6">
                <Spline scene="https://prod.spline.design/hyvleovaJTvACmTR/scene.splinecode" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-primary font-semibold text-dark-primary">
                  Opinia.id (Social Media Apps)
                </h3>
                <p className="text-base md:text-lg font-serif text-typo-neutral-80">
                  Opinion is an Inspiring and Fun social media platform! A fun
                  place for you to network, interact, share literacy, and
                  inspire each other.
                </p>
              </div>
              <div>
                <a
                  href="https://opinia.id/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">Visit Now!</Button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 bg-white p-4 rounded-[30px] lg:basis-1/2 shadow-1 lg:shadow-none lg:hover:shadow-1 lg:transition-all lg:ease-in-out lg:duration-500 dark:bg-black dark:lg:hover:shadow-d1 dark:shadow-d1">
            <div className="overflow-hidden w-full p-5 rounded-[30px] shadow-6 dark:shadow-d6 text-[12rem] flex justify-center md:text-[18rem] ll:text-[20rem]">
              {/* <Lottie
                animationData={dashboardlotties}
                // className="drop-shadow-md"
              /> */}
              <DashboardSvg />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-primary font-semibold text-dark-primary dark:text-white-color">
                Dashboard Opinia.id
              </h3>
              <p className="text-base md:text-lg font-serif text-typo-neutral-80 dark:text-typo-neutral-40">
                Opinion is an Inspiring and Fun social media platform! A fun
                place for you to network, interact, share literacy, and inspire
                each other.
              </p>
            </div>
            <div>
              <a
                href="https://github.com/nurulasrulroji-ajeye?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Visit Now!</Button>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8 bg-white p-4 rounded-[30px] shadow-1 lg:basis-1/2 lg:shadow-none lg:hover:shadow-1 lg:transition-all lg:ease-in-out lg:duration-500 dark:bg-black dark:lg:hover:shadow-d1 dark:shadow-d1">
            <div className="overflow-hidden w-full p-5 rounded-[30px] shadow-6 dark:shadow-d6 text-[12rem] flex justify-center md:text-[18rem] ll:text-[20rem] dark:text-dark-primary">
              {/* <Lottie animationData={todoApp} className="drop-shadow-md" /> */}
              <TodoSvg />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-primary font-semibold text-dark-primary dark:text-white-color">
                Todo Apps
              </h3>
              <p className="text-base md:text-lg font-serif text-typo-neutral-80 dark:text-typo-neutral-40">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos illo eaque doloribus reprehenderit autem, vitae
                ratione aliquid consectetur incidunt rem, nesciunt culpa quas
                nostrum, mollitia itaque quisquam! Deleniti, modi optio?
              </p>
            </div>
            <div>
              <a
                href="https://github.com/nurulasrulroji-ajeye?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary">Visit Now!</Button>
              </a>
            </div>
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
