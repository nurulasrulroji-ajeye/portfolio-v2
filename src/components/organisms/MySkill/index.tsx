import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Button, ProgressBar } from '@/components/atoms';
import { CardCertification, Modal, Tabs } from '@/components/molecules';
import { useAppSelector } from '@/app/hook';
import {
  CertificateData,
  SkillData,
  SoftSkillData,
} from '@/domain/dummyData/SkillData';
import { TabsData } from '@/domain/dummyData/PartsData';
import { CatstandIcon } from '@/assets';

export const MySkill = () => {
  const { scrollTop } = useAppSelector((state) => state.scroll);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const [activeTab, setActiveTab] = useState<string>(TabsData[0].id);
  const [openModalSkill, setOpenModalSkill] = useState(false);
  const [openModalCertificate, setOpenModalCertificate] = useState(false);

  // console.log(scrollTop);

  return (
    <div
      className="w-full bg-white-color pt-32 lg:pt-40 px-5 md:px-8 lg:px-16 ll:px-40 lg:pb-20 pb-5 relative dark:bg-dark-primary"
      id="skills"
    >
      <div className="text-[9rem] absolute -top-[4.5rem] inset-x-0 flex justify-center lg:text-[16rem] lg:justify-end lg:pr-40 lg:-top-28">
        <CatstandIcon />
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-dark-primary font-primary dark:text-white-color">
        My Skill.
      </h1>
      <div className="pt-5 flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="w-full lg:basis-[60%] flex flex-col gap-4 md:gap-8">
          <Tabs
            layoutId="skill"
            data={TabsData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}
            className="bg-white-color hover:shadow-6 hidden relative p-5 rounded-[30px] md:flex flex-col gap-4 dark:hover:shadow-d6 dark:bg-dark-primary"
          >
            {activeTab === '1' ? (
              <React.Fragment>
                {SkillData.slice(0, -6).map((item, idx) => {
                  return (
                    <div key={idx} className="flex flex-col w-full gap-1">
                      <span className="text-dark-primary font-primary font-bold dar">
                        {item.title}
                      </span>
                      <ProgressBar
                        percentage={scrollTop > 658 ? item.percnt : 0}
                        icon={item.icon}
                      />
                    </div>
                  );
                })}
                <motion.div
                  style={{ x, y, rotateX, rotateY, z: 100 }}
                  className="pt-3 w-full flex justify-center"
                  onClick={() => setOpenModalSkill(true)}
                >
                  <Button variant="primary"> See More</Button>
                </motion.div>
              </React.Fragment>
            ) : (
              <ul className="flex flex-col gap-3">
                {SoftSkillData.map((item) => (
                  <li
                    key={item.id}
                    className="w-full py-3 rounded-full shadow-6 px-4 bg-white-color text-sm font-serif font-semibold truncate dark:bg-dark-primary dark:shadow-d6"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}
            className="shadow-1 flex relative p-5 rounded-[30px] md:hidden flex-col gap-4 dark:shadow-d1"
          >
            {activeTab === '1' ? (
              <React.Fragment>
                {SkillData.slice(0, -8).map((item, idx) => {
                  return (
                    <div key={idx} className="flex flex-col w-full gap-1">
                      <span className="text-dark-primary font-primary font-bold dark:text-white-color">
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
                  <Button variant="primary" className="text-sm">
                    See More
                  </Button>
                </motion.div>
              </React.Fragment>
            ) : (
              <ul className="flex flex-col gap-3">
                {SoftSkillData.map((item) => (
                  <li
                    key={item.id}
                    className="w-full py-3 rounded-full shadow-6 px-4 bg-white-color text-sm font-serif font-semibold truncate dark:bg-dark-primary dark:shadow-d6"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
        <div className="lg:basis-[40%] flex flex-col justify-center items-center">
          <p className="font-serif text-center text-typo-neutral-80 text-base md:text-lg lg:text-2xl lg:text-left dark:text-typo-neutral-40">
            Embracing a never-ending learning journey, I delight in leveling up
            my frontend expertise. With boundless enthusiasm, I chase
            opportunities to broaden my skill set. Fueled by a zest for growth,
            I fearlessly tackle challenges, unlocking the secrets to becoming a
            fun and accomplished frontend wizard.
          </p>
          <div className="pt-5 w-full flex justify-end">
            <Button
              onClick={() => setOpenModalCertificate(true)}
              variant="primary"
            >
              Licenses and Certifications
            </Button>
          </div>
        </div>
      </div>
      <Modal
        show={openModalSkill}
        onClose={() => setOpenModalSkill(false)}
        size="sm"
      >
        <div className="w-full p-5 rounded-[30px] bg-white-color flex flex-col gap-5 shadow-6 dark:bg-dark-primary dark:shadow-d6">
          <h2 className="text-3xl font-bold text-dark-primary pb-5 font-primary dark:text-white-color">
            All Hard Skill.
          </h2>
          <div className="flex flex-col h-[400px] overflow-y-scroll gap-4 pr-4 pb-3">
            {SkillData.map((item, idx) => {
              return (
                <div key={idx} className="flex flex-col w-full gap-1">
                  <span className="font-primary font-bold text-dark-primary dark:text-white-color">
                    {item.title}
                  </span>
                  <ProgressBar percentage={item.percnt} icon={item.icon} />
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-end pt-5 ">
            <Button variant="primary" onClick={() => setOpenModalSkill(false)}>
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
        <div className="bg-white-color w-full p-5 rounded-[30px] flex flex-col gap-5 shadow-6 dark:bg-dark-primary dark:shadow-d6">
          <h2 className="lg:text-2xl text-xl font-bold font-primary text-dark-primary dark:text-white-color">
            Licenses and Certifications
          </h2>
          <div className="flex flex-col h-[400px] overflow-y-scroll gap-6 px-2 py-2 lg:grid lg:grid-cols-2">
            {CertificateData.map((item, idx) => (
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
              variant="primary"
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
