import Typewriter from 'typewriter-effect';
import { SocmedData } from '@/domain/dummyData/SocmedData';
import { heroImg } from '@/assets';
import { SocmedList } from '@/components/atoms';
import { CardProfile } from '@/components/molecules';

export const Hero = () => {
  return (
    <div className="bg-white w-full items-center pt-32 px-5 pb-20 lg:pb-28 flex flex-col-reverse md:flex-row gap-10 md:items-center md:px-16 lg:px-32 md:justify-between lg:gap-20">
      <CardProfile
        image={heroImg}
        name="Nurul Asrul Roji"
        location="South Jakarta, Indonesia"
        description="Creative, Great UX, Flexible and Affordable Website"
      />
      <div className="flex flex-col gap-3 md:gap-8">
        <div>
          <h4 className="font-primary text-xl text-dark-primary md:text-2xl lg:text-3xl">
            Hallo, I{"'"}m a
          </h4>
          <Typewriter
            options={{
              wrapperClassName:
                'font-primary text-3xl font-bold text-dark-primary md:text-5xl lg:text-7xl',
              cursorClassName:
                'text-3xl md:text-5xl lg:text-7xl text-dark-primary',
              strings: ['Frontend Developer', 'Website Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="font-serif text-neutral-800 leading-tight text-sm md:text-base lg:text-xl">
          Creative frontend wizard with expertise in HTML, CSS, and
          JavaScript/TypeScript. Crafting captivating web experiences is i{"'"}m
          specialty. With a keen eye for design and a passion for innovation, i
          {"'"}m bring your digital vision to life. Get in touch to unlock the
          full potential of your online presence.
        </p>
        <div className="pt-3">
          <SocmedList data={SocmedData} />
        </div>
      </div>
    </div>
  );
};
