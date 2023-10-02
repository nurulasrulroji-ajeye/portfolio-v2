import React from 'react';
import { Button } from '@/components/atoms';

export interface IDataMsgGmail {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export interface IDataMsgWa {
  name: string;
  email: string;
  address: string;
  message: string;
}
type FormMessageProps<T extends boolean> = {
  isWa: T;
  dataMsg: T extends true ? IDataMsgWa : IDataMsgGmail;
  setDataMsg: React.Dispatch<
    React.SetStateAction<T extends true ? IDataMsgWa : IDataMsgGmail>
  >;
  errMsg: string;
  disableSend: boolean;
  onSend: T extends true ? () => void : () => Promise<void>;
};

export const FormMessage = <T extends boolean>(props: FormMessageProps<T>) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-col gap-3 md:flex-row md:gap-6">
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="name"
            className="font-serif font-semibold text-dark-primary dark:text-white-color"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Fill Your Name"
            className="py-3 px-4 outline-none rounded-full shadow-1 bg-white-color text-dark-primary font-serif border border-dark-primary dark:bg-dark-primary dark:text-white-color dark:border-white-color dark:shadow-d1"
            value={props.dataMsg.name}
            onChange={(e) =>
              props.setDataMsg({ ...props.dataMsg, name: e.target.value })
            }
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="email"
            className="font-serif font-semibold text-dark-primary"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Fill Your Email"
            className="py-3 px-4 outline-none rounded-full shadow-1 bg-white-color text-dark-primary font-serif border border-dark-primary dark:bg-dark-primary dark:text-white-color dark:border-white-color dark:shadow-d1"
            value={props.dataMsg.email}
            onChange={(e) =>
              props.setDataMsg({ ...props.dataMsg, email: e.target.value })
            }
          />
        </div>
      </div>
      {props.isWa ? (
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="Address"
            className="font-serif font-semibold text-dark-primary"
          >
            Address
          </label>
          <input
            id="Address"
            type="text"
            placeholder="Fill Your Address"
            className="py-3 px-4 outline-none rounded-full shadow-1 bg-white-color text-dark-primary font-serif border border-dark-primary dark:bg-dark-primary dark:text-white-color dark:border-white-color dark:shadow-d1"
            value={(props.dataMsg as IDataMsgWa).address}
            onChange={(e) =>
              props.setDataMsg({ ...props.dataMsg, address: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-1">
          <label
            htmlFor="subject"
            className="font-serif font-semibold text-dark-primary"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Fill Your Subject"
            className="py-3 px-4 outline-none rounded-full shadow-1 bg-white-color text-dark-primary font-serif border border-dark-primary dark:bg-dark-primary dark:text-white-color dark:border-white-color dark:shadow-d1"
            value={(props.dataMsg as IDataMsgGmail).subject}
            onChange={(e) =>
              props.setDataMsg({ ...props.dataMsg, subject: e.target.value })
            }
          />
        </div>
      )}
      <div className="w-full flex flex-col gap-1">
        <label
          htmlFor="message"
          className="font-serif font-semibold text-dark-primary"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Fill Your Message"
          className="py-3 px-4 outline-none rounded-[30px] shadow-1 bg-white-color text-dark-primary font-serif h-60 resize-none border border-dark-primary dark:bg-dark-primary dark:text-white-color dark:border-white-color dark:shadow-d1"
          value={props.dataMsg.message}
          onChange={(e) =>
            props.setDataMsg({ ...props.dataMsg, message: e.target.value })
          }
        />
      </div>
      <p className="text-sm font-serif text-red-700 dark:text-red-300">
        {props.errMsg}
      </p>
      <div className="w-full flex justify-end mt-4">
        <Button
          variant="primary"
          onClick={props.onSend}
          disabled={props.disableSend}
          className="disabled:cursor-not-allowed disabled:border-none disabled:bg-typo-neutral-80 disabled:text-white-color disabled:hover:bg-typo-neutral-80 disabled:hover:text-white-color dark:disabled:bg-typo-neutral-40 dark:disabled:text-dark-primary dark:disabled:hover:bg-typo-neutral-40 dark:disabled:hover:text-dark-primary"
        >
          Send!
        </Button>
      </div>
    </div>
  );
};
