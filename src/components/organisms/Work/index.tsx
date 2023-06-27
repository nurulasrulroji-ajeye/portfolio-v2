import { motion, useMotionValue, useTransform } from 'framer-motion';

export const Work = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const x2 = useMotionValue(0);
  const y2 = useMotionValue(0);
  const rotateX2 = useTransform(y2, [-100, 100], [30, -30]);
  const rotateY2 = useTransform(x2, [-100, 100], [-30, 30]);
  return (
    <div className="w-full bg-baby-red px-5 md:px-16 lg:px-32">
      <div className="pt-24 w-full flex flex-col gap-5 pb-32">
        <div className="flex w-full justify-center items-center">
          <h1 className="text-4xl font-sugarpeachy font-bold border-b-2 border-yellow-color text-green-primary drop-shadow-[5px_0px_#BAD7E9] lg:text-6xl">
            Work Experience.
          </h1>
        </div>
        <p className="text-green-primary/90 drop-shadow-md font-sugarpeachy text-center lg:text-2xl">
          <q>
            Hustle hard, pray harder, and outsmart the game - because fun is the
            secret ingredient to a victorious journey!
          </q>
        </p>
        <div className="w-full flex flex-col gap-16 pt-10 lg:flex-row lg:justify-center">
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}
            className="bg-baby-blue p-4 relative rounded-[30px] shadow-pink-yellow-cream border-r-2 border-black border-b-2 mr-3 "
          >
            <motion.div
              style={{ x, y, rotateX, rotateY, z: 100 }}
              className="w-[50px] h-[50px] bg-yellow-color border-2 shadow-md border-green-primary rounded-full flex justify-center items-center text-2xl absolute -top-8 -left-4 font-baristo"
            >
              1
            </motion.div>
            <h4 className="font-sugarpeachy text-green-primary leading-[1] text-lg md:text-2xl md:leading-[1]">
              Junior Frontend Developer <br />
              <span className="text-sm md:text-base">
                at PT. Opinia Media Technology
              </span>
            </h4>
            <ul className="list-disc font-sugarpeachy text-sm pt-3 pl-3 text-green-primary/80 md:text-lg">
              <li>
                Assisted in developing and maintaining websites using HTML, CSS,
                and TypeScript.
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
            </ul>
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
            className="bg-baby-blue p-4 relative rounded-[30px] shadow-pink-yellow-cream border-r-2 border-black border-b-2 mr-3 "
          >
            <motion.div
              style={{
                x: x2,
                y: y2,
                rotateX: rotateX2,
                rotateY: rotateY2,
                z: 100,
              }}
              className="w-[50px] h-[50px] bg-yellow-color border-2 shadow-md border-green-primary rounded-full flex justify-center items-center text-2xl absolute -top-8 -left-4 font-baristo"
            >
              2
            </motion.div>
            <h4 className="font-sugarpeachy text-green-primary leading-[1] text-lg md:text-2xl md:leading-[1]">
              Freelance Frontend Developer
            </h4>
            <ul className="list-disc font-sugarpeachy text-sm pt-3 pl-3 text-green-primary/80 md:text-lg">
              <li>
                Completed frontend projects for diverse clients with unique
                requirements.
              </li>
              <li>
                Implemented responsive design and enhanced visuals using CSS and
                JavaScript/TypeScript.
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
                Met project deadlines and effectively communicated with clients.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
