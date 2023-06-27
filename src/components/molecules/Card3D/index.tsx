import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { githubAccountImg, heroImg } from '@/assets';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  StarRetro,
  CloudsSvg,
  Github3d,
  GameBot,
  LoveRetro,
  AsIf,
  Radio,
} from '@/assets/svg';

export const Card3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y]);
  return (
    <div>
      <motion.div
        ref={elementRef}
        style={{
          perspective: 500,
          borderRadius: 30,
          backgroundColor: '#fff',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        className="relative"
      >
        <div className="w-[250px] h-[500px] lg:w-[400px] lg:h-[650px] px-5 z-0 border-4 overflow-hidden border-black relative rounded-[30px] shadow-yelow-red-blue md:shadow-none md:hover:shadow-[5px_5px_rgba(249,217,73,1),10px_10px_rgba(225,97,98,1),15px_15px_rgba(186,215,233,1)] md:transition-all md:duration-700 md:ease-in-out">
          <Image
            src={heroImg}
            alt="github-account"
            fill
            className="hover:scale-125 transition-all duration-300 ease-linear"
          />
        </div>
        <motion.div
          style={{
            perspective: 10,
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          className="absolute text-9xl z-[1000] top-10 -right-10 drop-shadow-md md:-right-20"
        >
          <Radio />
        </motion.div>
        <motion.div
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          className="absolute text-8xl -z-[1000] -top-10 -left-10 drop-shadow-md md:text-9xl md:-top-16 md:-left-16"
        >
          <StarRetro />
        </motion.div>
        <motion.div
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          className="absolute text-8xl z-[500] bottom-10 -left-10 drop-shadow-md md:text-9xl md:bottom-16 md:-left-16"
        >
          <GameBot />
        </motion.div>
        <motion.div
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          className="absolute text-8xl z-[500] bottom-60 -left-10 drop-shadow-md md:text-9xl md:bottom-96 md:-left-16"
        >
          <AsIf />
        </motion.div>
        <motion.div
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          className="absolute text-8xl z-[1000] bottom-0 -right-10 drop-shadow-md md:text-9xl md:bottom-0 md:-right-16"
        >
          <LoveRetro />
        </motion.div>
      </motion.div>
    </div>
  );
};
