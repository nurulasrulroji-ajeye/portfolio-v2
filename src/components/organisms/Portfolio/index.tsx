import { dashboardlotties, project, projectProcess, todoApp } from '@/assets';
import Spline from '@splinetool/react-spline';
import { CardProject } from '@/components/molecules';
import Lottie from 'lottie-react';
import { Button } from '@/components/atoms';

export const Portfolio = () => {
  return (
    <div className="bg-baby-red relative">
      <div className="w-full bg-green-primary rounded-t-[80px] lg:rounded-t-[200px] shadow-[0px_-10px_rgba(249,217,73,0.9),0px_-14px_rgba(0,0,0,1),0px_-24px_#1B9C85,0px_-28px_rgba(0,0,0,1),0px_-38px_#BAD7E9,0px_-42px_rgba(0,0,0,1)] px-5 pb-24 lg:px-32">
        <div className="pt-24">
          <h1 className="text-4xl font-sugarpeachy text-yellow-color drop-shadow-[0px_4px_#000] lg:text-7xl">
            My Project.
          </h1>
          <div className="w-full flex-col gap-5 flex pt-5">
            <p className="font-sugarpeachy text-yellow-color/80">
              Unlocking the power of design and code, my portfolio is a canvas
              where imagination meets innovation. Explore a collection of
              visually captivating and seamlessly functional projects that push
              the boundaries of frontend development. Join me on this inspiring
              journey as we create digital experiences that leave a lasting
              impact. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore labore modi rerum consequuntur ratione totam quos, sunt
              adipisci culpa omnis, aspernatur est impedit a, quae obcaecati.
              Reiciendis sit obcaecati animi!
            </p>
            <div className="w-full flex flex-col justify-center items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-x-20">
              <div className="lg:row-span-2">
                <div className="w-full rounded-[30px] overflow-hidden mb-8">
                  <Lottie
                    animationData={projectProcess}
                    className="mix-blend-multiply"
                  />
                </div>
                <div className="flex flex-col gap-8 bg-baby-blue p-3 rounded-[30px] shadow-pink-yellow-cream mr-4 lg:basis-1/2 border-r-2 border-black border-b-2">
                  <div className="relative w-full h-[400px] lg:w-full lg:h-[600px] bg-yellow-color rounded-[30px] shadow-md">
                    <Spline
                      className="absolute"
                      scene="https://prod.spline.design/hyvleovaJTvACmTR/scene.splinecode"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-sugarpeachy font-semibold text-green-primary">
                      Opinia.id (Social Media Apps)
                    </h3>
                    <p className="text-sm font-sugarpeachy text-green-primary/70">
                      Opinion is an Inspiring and Fun social media platform! A
                      fun place for you to network, interact, share literacy,
                      and inspire each other.
                    </p>
                  </div>
                  <div>
                    <a
                      href="https://opinia.id/home"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="green-secondary">Visit Now!</Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 bg-baby-blue p-3 rounded-[30px] shadow-pink-yellow-cream mr-4 lg:basis-1/2 border-r-2 border-black border-b-2">
                <div className="overflow-hidden w-full p-5 bg-yellow-color rounded-[30px] shadow-md">
                  <Lottie
                    animationData={dashboardlotties}
                    className="drop-shadow-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-sugarpeachy font-semibold text-green-primary">
                    Dashboard Opinia.id
                  </h3>
                  <p className="text-sm font-sugarpeachy text-green-primary/70">
                    Opinion is an Inspiring and Fun social media platform! A fun
                    place for you to network, interact, share literacy, and
                    inspire each other.
                  </p>
                </div>
                <div>
                  <a
                    href="https://github.com/nurulasrulroji-ajeye?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="green-secondary">Visit Now!</Button>
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-8 bg-baby-blue p-3 rounded-[30px] shadow-pink-yellow-cream mr-4 lg:basis-1/2 border-r-2 border-black border-b-2">
                <div className="overflow-hidden w-full p-5 bg-yellow-color rounded-[30px] shadow-md">
                  <Lottie animationData={todoApp} className="drop-shadow-md" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-sugarpeachy font-semibold text-green-primary">
                    Todo Apps
                  </h3>
                  <p className="text-sm font-sugarpeachy text-green-primary/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos illo eaque doloribus reprehenderit autem, vitae
                    ratione aliquid consectetur incidunt rem, nesciunt culpa
                    quas nostrum, mollitia itaque quisquam! Deleniti, modi
                    optio?
                  </p>
                </div>
                <div>
                  <a
                    href="https://github.com/nurulasrulroji-ajeye?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="green-secondary">Visit Now!</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
