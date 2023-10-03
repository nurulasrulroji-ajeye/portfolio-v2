import React, { useEffect, useState } from 'react';
import { CatseeIcon, GoogleIcon, WaIcon, messageSent } from '@/assets';
import { Button } from '@/components/atoms';
import { FormMessage, Modal, Tabs } from '@/components/molecules';
import { ISendGmail, TTabs } from '@/domain/entities/PartsType';
import Lottie from 'lottie-react';
import ContactServices from '@/domain/services/contactServices';
import { useAppSelector } from '@/app/hook';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import {
  basicFadeDown,
  basicFadeUp,
  basicFadeUp2,
  basicScaleDown,
  basicScaleUp,
} from '@/config';

const tabData: TTabs[] = [
  { id: '1', name: 'Gmail', icon: <GoogleIcon /> },
  { id: '2', name: 'Whatsapp', icon: <WaIcon /> },
];

export const Contact = () => {
  const { scrollTop } = useAppSelector((state) => state.scroll);
  const medium = useMediaQuery({ minWidth: 768 });
  const [inputMsg, setInputMsg] = useState<ISendGmail>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [inputMsgWa, setInputMsgWa] = useState<{
    name: string;
    email: string;
    address: string;
    message: string;
  }>({
    name: '',
    email: '',
    address: '',
    message: '',
  });

  const [tab, setTab] = useState<string>(tabData[0].id);

  const [loading, setLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [msgErr, setMsgErr] = useState('');
  const [openThx, setOpenThx] = useState(false);

  const onSend = async () => {
    setLoading(true);
    try {
      const contactServices = new ContactServices();
      if (
        inputMsg.name.length &&
        inputMsg.email.length &&
        inputMsg.subject.length &&
        inputMsg.subject.length
      ) {
        setMsgErr('');
        const payload = await contactServices.sendGmail(inputMsg);

        if (payload.status === 200) {
          setInputMsg({ name: '', email: '', subject: '', message: '' });
          setOpenThx(true);
        }
      } else {
        setIsErr(true);
        setMsgErr('Required! Please Fill All');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onSendWa = () => {
    if (
      inputMsgWa.name.length &&
      inputMsgWa.email.length &&
      inputMsgWa.address.length &&
      inputMsgWa.message.length
    ) {
      const myNumber = +62881010464853;
      const waUrl = `https://wa.me/${myNumber}?text=*Name : ${inputMsgWa.name} %0a *Email: ${inputMsgWa.email} %0a *Address: ${inputMsgWa.address} %0a *Message: %0a%0a ${inputMsgWa.message}`;
      window.open(waUrl, '_blank')?.focus();
      setOpenThx(true);
      setInputMsgWa({ address: '', email: '', message: '', name: '' });
    } else {
      setMsgErr('Required! Please Fill All');
    }
  };

  return (
    <div
      className="w-full px-5 md:px-8 lg:px-16 ll:px-40 bg-white-color pt-32 lg:pt-40 pb-20 relative dark:bg-dark-primary"
      id="contact"
    >
      {scrollTop > (medium ? 3900 : 5200) ? (
        <motion.div
          {...basicFadeUp}
          className="text-[9rem] absolute -top-[4.5rem] inset-x-0 flex justify-center lg:text-[16rem] lg:justify-end lg:pr-40 lg:-top-28"
        >
          <CatseeIcon />
        </motion.div>
      ) : null}
      <div className="flex flex-col gap-4 mb-10 md:mb-20">
        {scrollTop > (medium ? 3900 : 5300) ? (
          <motion.p
            {...basicFadeDown}
            className="text-lg md:text-xl lg:text-2xl font-serif font-bold text-dark-primary md:text-center dark:text-white-color"
          >
            GET IN TOUCH.
          </motion.p>
        ) : null}
        {scrollTop > (medium ? 3900 : 5300) ? (
          <motion.h4
            {...basicScaleUp}
            className="text-3xl md:text-4xl lg:text-5xl font-primary text-dark-primary md:text-center dark:text-white-color"
          >
            Do you have a question, an idea, or a project you need help with?
            Contact me!
          </motion.h4>
        ) : null}
      </div>
      {scrollTop > (medium ? 4000 : 5300) ? (
        <motion.div {...basicFadeUp} className="w-full lg:max-w-3xl lg:mx-auto">
          <Tabs
            layoutId="contact"
            data={tabData}
            activeTab={tab}
            setActiveTab={setTab}
          />
        </motion.div>
      ) : null}
      {scrollTop > (medium ? 4000 : 5500) ? (
        <motion.div
          {...basicFadeUp2}
          className="w-full shadow-6 bg-white-color rounded-[30px] p-5 mt-4 lg:max-w-3xl lg:mx-auto dark:bg-dark-primary dark:shadow-d6"
        >
          {tab === '1' ? (
            <FormMessage
              isWa={false}
              dataMsg={inputMsg}
              setDataMsg={setInputMsg}
              errMsg={msgErr}
              disableSend={loading}
              onSend={onSend}
            />
          ) : (
            <FormMessage
              isWa={true}
              dataMsg={inputMsgWa}
              setDataMsg={setInputMsgWa}
              errMsg={msgErr}
              disableSend={loading}
              onSend={onSendWa}
            />
          )}
        </motion.div>
      ) : null}

      <Modal
        show={openThx}
        onClose={() => {
          setOpenThx(false);
        }}
        backdropStatic
        size="sm"
        backdropNone
      >
        <div className="w-full bg-white-color shadow-6 flex flex-col items-center gap-4 rounded-[30px] p-5">
          <Lottie animationData={messageSent} loop={false} />
          <div className="text-center w-full flex flex-col gap-2">
            <p className="text-xl font-primary font-semibold text-dark-primary">
              Thanks for being awesome!
            </p>
            <p className="text-typo-neutral-80 font-serif">
              I have received your message and would like to thank you for
              writing. If your inquiry is urgent, please use the telephone
              number listed below to talk. :)
            </p>
          </div>
          <div className="mt-2 w-full flex justify-end">
            <Button
              variant="primary"
              onClick={() => {
                setOpenThx(false);
              }}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
