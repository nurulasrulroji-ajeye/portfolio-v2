import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  CssIcon,
  ExpressIcon,
  Flash,
  HtmlIcon,
  JsIcon,
  NextJsIcon,
  NodeIcon,
  PhpIcon,
  PyIcon,
  ReactIcon,
  Redux,
  TsIcon,
  TwIcon,
  VueIcon,
  dicodingImg,
} from '@/assets';
import { Button, ProgressBar } from '@/components/atoms';
import { CardCertification, Modal } from '@/components/molecules';
import Image from 'next/image';
import { useAppSelector } from '@/app/hook';

const dataSkill = [
  { title: 'HTML5', percnt: 99, icon: <HtmlIcon /> },
  { title: 'CSS3', percnt: 98, icon: <CssIcon /> },
  { title: 'Javascript', percnt: 90, icon: <JsIcon /> },
  { title: 'TypeScript', percnt: 85, icon: <TsIcon /> },
  { title: 'ReactJs', percnt: 95, icon: <ReactIcon /> },
  { title: 'NextJs', percnt: 96, icon: <NextJsIcon /> },
  { title: 'Tailwindcss', percnt: 99, icon: <TwIcon /> },
  { title: 'Redux', percnt: 90, icon: <Redux /> },
  { title: 'VueJs', percnt: 70, icon: <VueIcon /> },
  { title: 'NodeJs', percnt: 55, icon: <NodeIcon /> },
  { title: 'ExpressJs', percnt: 55, icon: <ExpressIcon /> },
  { title: 'Python', percnt: 50, icon: <PyIcon /> },
  { title: 'PHP', percnt: 35, icon: <PhpIcon /> },
];

const dataCertificate = [
  {
    img: dicodingImg,
    company: 'Dicoding',
    from: 'Indonesia',
    title: 'Learn to Build Web Apps with React',
    published: 'July - 2022',
    id_credential: 'L4PQ496E7XO1',
    link_credential: 'https://www.dicoding.com/certificates/L4PQ496E7XO1',
  },
  {
    img: dicodingImg,
    company: 'Dicoding',
    from: 'Indonesia',
    title: 'Learn to Create a Web Front-End for Beginners',
    published: 'July - 2022',
    id_credential: 'JMZVG4OGRZN9',
    link_credential: 'https://www.dicoding.com/certificates/JMZVG4OGRZN9',
  },
  {
    img: dicodingImg,
    company: 'Dicoding',
    from: 'Indonesia',
    title: 'Learn Basic JavaScript Programming',
    published: 'July - 2022',
    id_credential: 'NVP7KQG8WZR0',
    link_credential: 'https://www.dicoding.com/certificates/NVP7KQG8WZR0',
  },
  {
    img: dicodingImg,
    company: 'Dicoding',
    from: 'Indonesia',
    title: 'Learn Basic Web Programming',
    published: 'July - 2022',
    id_credential: '6RPND4554Z2M',
    link_credential: 'https://www.dicoding.com/certificates/6RPND4554Z2M',
  },
  {
    img: dicodingImg,
    company: 'Dicoding',
    from: 'Indonesia',
    title: 'Learn to Create Back-End Applications for Beginners',
    published: 'March - 2023',
    id_credential: 'EYX49D07JPDL',
    link_credential: 'https://www.dicoding.com/certificates/EYX49D07JPDL',
  },
];

export const MySkill = () => {
  const { scrollTop } = useAppSelector((state) => state.scroll);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const [openModalSkill, setOpenModalSkill] = useState(false);
  const [openModalCertificate, setOpenModalCertificate] = useState(false);

  return (
    <div className="w-full bg-white-color pt-16 px-5 md:px-16 lg:px-32 pb-10 lg:pb-44">
      <h1 className="text-3xl lg:text-6xl text-dark-primary font-primary">
        My Skill.
      </h1>
      <div className="pt-5 flex flex-col gap-10 md:flex-row lg:gap-16 md:items-center">
        <div className="w-full md:basis-[60%]">
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}
            className="bg-dark-primary hidden relative p-5 rounded-[30px] md:flex flex-col gap-4 "
          >
            {dataSkill.slice(0, -6).map((item, idx) => {
              return (
                <div key={idx} className="flex flex-col w-full gap-1">
                  <span className="text-baby-blue font-primary font-bold">
                    {item.title}
                  </span>
                  <ProgressBar percentage={item.percnt} icon={item.icon} />
                </div>
              );
            })}
            <motion.div
              style={{ x, y, rotateX, rotateY, z: 100 }}
              className="pt-3 w-full flex justify-center"
              onClick={() => setOpenModalSkill(true)}
            >
              <Button variant="baby-blue"> See More</Button>
            </motion.div>
            {/* <motion.div
              style={{ x, y, rotateX, rotateY, z: 1000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: 'grabbing' }}
              className="md:text-9xl text-7xl absolute md:-top-20 md:-right-20 -right-8 -top-10"
            >
              <Flash />
            </motion.div> */}
          </motion.div>
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}
            className="shadow-1 flex relative p-5 rounded-[30px] md:hidden flex-col gap-4"
          >
            <h3 className="text-2xl font-primary">Hard Skill.</h3>
            {dataSkill.slice(0, -8).map((item, idx) => {
              return (
                <div key={idx} className="flex flex-col w-full gap-1">
                  <span className="text-dark-primary font-primary font-bold">
                    {item.title}
                  </span>
                  <ProgressBar
                    percentage={scrollTop > 600 ? item.percnt : 0}
                    icon={item.icon}
                  />
                </div>
              );
            })}
            <motion.div
              style={{ x, y, rotateX, rotateY, z: 100 }}
              className="pt-5 w-full flex justify-center"
              onClick={() => setOpenModalSkill(true)}
            >
              <Button variant="dark" className="text-sm">
                {' '}
                See More
              </Button>
            </motion.div>
            {/* <motion.div
              style={{ x, y, rotateX, rotateY, z: 1000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: 'grabbing' }}
              className="md:text-9xl text-7xl absolute md:-top-20 md:-right-20 -right-8 -top-10"
            >
              <Flash />
            </motion.div> */}
          </motion.div>
        </div>
        <div className="md:basis-[40%]">
          <p className="font-serif text-center text-green-primary/80 md:text-xl lg:text-3xl md:text-left">
            Embracing a never-ending learning journey, I delight in leveling up
            my frontend expertise. With boundless enthusiasm, I chase
            opportunities to broaden my skill set. Fueled by a zest for growth,
            I fearlessly tackle challenges, unlocking the secrets to becoming a
            fun and accomplished frontend wizard.
          </p>
          <div className="pt-5 w-full flex justify-end">
            <Button
              onClick={() => setOpenModalCertificate(true)}
              variant="green-primary"
            >
              Licenses and Certifications
            </Button>
          </div>
        </div>
      </div>
      <Modal
        show={openModalSkill}
        onClose={() => setOpenModalSkill(false)}
        size="lg"
      >
        <div className="w-full p-5 rounded-[30px]  bg-white-color flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-green-primary pb-5 font-primary">
            All Hard Skill.
          </h2>
          <div className="flex flex-col h-[400px] overflow-y-scroll gap-4 pr-4 pb-3">
            {dataSkill.map((item, idx) => {
              return (
                <div key={idx} className="flex flex-col w-full gap-1">
                  <span className="font-primary font-bold text-green-primary">
                    {item.title}
                  </span>
                  <ProgressBar percentage={item.percnt} icon={item.icon} />
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-end pt-5 ">
            <Button variant="dark" onClick={() => setOpenModalSkill(false)}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
      <Modal
        show={openModalCertificate}
        onClose={() => setOpenModalCertificate(false)}
        size="lg"
      >
        <div className="bg-baby-blue w-full p-5 rounded-[30px] border-4 border-green-primary flex flex-col gap-5">
          <h2 className="lg:text-2xl text-lg font-bold font-primary drop-shadow-[3px_0px_rgb(249,217,73,1)]">
            Licenses and Certifications
          </h2>
          <div className="flex flex-col h-[400px] overflow-y-scroll gap-6 pr-7 pb-8 lg:grid lg:grid-cols-2">
            {dataCertificate.map((item, idx) => (
              <React.Fragment key={idx}>
                <CardCertification
                  img={item.img}
                  companyName={item.company}
                  companyLocation={item.from}
                  titleCertificateion={item.title}
                  publish={item.published}
                  id_credential={item.id_credential}
                  link_credential={item.link_credential}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="flex w-full justify-end">
            <Button
              onClick={() => setOpenModalCertificate(false)}
              variant="green-secondary"
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
