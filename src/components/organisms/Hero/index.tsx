import { Button } from '@/components/atoms';
import { Card3D } from '@/components/molecules';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <div className="bg-baby-blue relative">
      <div className="w-full bg-green-primary pt-32 px-5 pb-20 lg:pb-28 flex flex-col md:flex-row gap-10 md:items-center md:px-16 lg:px-32 md:justify-between  lg:rounded-b-[200px] rounded-b-[80px] shadow-[0px_10px_rgba(249,217,73,0.9),0px_14px_rgba(0,0,0,1),0px_24px_rgba(225,97,98,1),0px_28px_rgba(0,0,0,1),0px_38px_rgba(247,134,232,1),0px_42px_rgba(0,0,0,1)] ">
        <div className="flex flex-col gap-3 md:gap-8">
          <div>
            <h4 className="font-primary text-xl text-yellow-color md:text-2xl lg:text-3xl">
              Hallo, I{"'"}m Ajeye !
            </h4>
            <Typewriter
              options={{
                wrapperClassName:
                  'font-primary text-3xl font-bold text-yellow-color md:text-5xl lg:text-7xl',
                cursorClassName:
                  'text-3xl md:text-5xl lg:text-7xl text-yellow-color',
                strings: ['Frontend Developer', 'Website Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="font-primary text-yellow-color leading-tight text-sm md:text-base lg:text-xl">
            Creative frontend wizard with expertise in HTML, CSS, and
            JavaScript/TypeScript. Crafting captivating web experiences is i
            {"'"}m specialty. With a keen eye for design and a passion for
            innovation, i{"'"}m bring your digital vision to life. Get in touch
            to unlock the full potential of your online presence.
          </p>
          <div className="pt-3">
            <Button className="py-3 flex gap-3 bg-[#BAD7E9] text-dark-primary rounded-full px-8 md:hover:shadow-pink-yellow-cream md:transition-all md:duration-500 md:ease-in-out md:text-xl border-r-2 border-b-2 border-black">
              Lets Talk
            </Button>
          </div>
        </div>
        {/* <div className="w-full flex justify-center items-center pt-10 lg:pt-14">
          <Card3D />
        </div> */}
      </div>
    </div>
  );
};
