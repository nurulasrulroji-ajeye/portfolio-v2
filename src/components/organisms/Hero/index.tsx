import Typewriter from 'typewriter-effect';
import { SocmedData } from '@/domain/dummyData/SocmedData';
import { heroImg } from '@/assets';
import { SocmedList } from '@/components/atoms';
import { CardProfile } from '@/components/molecules';
import { motion } from 'framer-motion';
import { basicFadeLeft, basicFadeRight, basicScaleUp } from '@/config';

export const Hero = () => {
  return (
    <div
      className="bg-white w-full items-center pt-32 px-5 pb-20 lg:pb-28 flex flex-col-reverse md:flex-row gap-10 ll:gap-20 md:items-center md:px-8 lg:px-16 ll:px-40 md:justify-between dark:bg-black"
      id="about"
    >
      <CardProfile
        image={heroImg}
        name="Nurul Asrul Roji"
        location="South Jakarta, Indonesia"
        description="Creative, Great UX, Flexible and Affordable Website"
      />
      <div className="flex flex-col gap-3 md:gap-8">
        <motion.div {...basicFadeLeft}>
          <h4 className="font-serif font-bold text-sm text-dark-primary md:text-lg lg:text-xl dark:text-white-color">
            Hallo, I{"'"}m a
          </h4>
          <Typewriter
            options={{
              wrapperClassName:
                'font-primary text-3xl text-dark-primary md:text-4xl lg:text-5xl font-semibold dark:text-white-color',
              cursorClassName:
                'text-3xl md:text-4xl lg:text-5xl text-dark-primary dark:text-white-color',
              strings: ['Frontend Developer.', 'Website Developer.'],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
        <motion.p
          {...basicFadeRight}
          className="font-serif text-typo-neutral-80 leading-tight text-base md:text-lg lg:text-2xl dark:text-typo-neutral-40"
        >
          Creative frontend wizard with expertise in HTML, CSS, and
          JavaScript/TypeScript. Crafting captivating web experiences is i{"'"}m
          specialty. With a keen eye for design and a passion for innovation, i
          {"'"}m bring your digital vision to life. Get in touch to unlock the
          full potential of your online presence.
        </motion.p>
        <motion.div
          {...basicScaleUp}
          className="pt-5 w-full flex justify-start md:justify-center lg:pt-6"
        >
          <SocmedList data={SocmedData} />
        </motion.div>
      </div>
    </div>
  );
};
