import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/atoms';
import { dicodingImg } from '@/assets';

type CardCertificationProps = {
  img: string | StaticImageData;
  companyName: string;
  companyLocation: string;
  titleCertificateion: string;
  publish: string;
  id_credential: string;
  link_credential: string;
};

export const CardCertification = (props: CardCertificationProps) => {
  return (
    <div className="w-full p-4 bg-white-color shadow-1 flex flex-col gap-3 rounded-[30px] dark:bg-dark-primary dark:shadow-d1">
      <div className="flex gap-3 items-center">
        <div className="relative w-12 h-12 overflow-hidden rounded-full shadow-md">
          <Image src={props.img} alt="dicoding" fill />
        </div>
        <div className="flex flex-col gap-1">
          <p className="leading-[1] text-lg font-semibold text-dark-primary font-serif dark:text-white-color">
            {props.companyName}
          </p>
          <p className="leading-[1] text-sm text-typo-neutral-80 font-serif dark:text-typo-neutral-40">
            at {props.companyLocation}
          </p>
        </div>
      </div>
      <div>
        <p className="font-semibold font-serif text-dark-primary text-base pb-2 dark:text-white-color">
          {props.titleCertificateion}
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="leading-[1] text-xs text-typo-neutral-80 font-serif underline dark:text-typo-neutral-40">
              Date Published
            </p>
            <p className="leading-[1] text-sm text-dark-primary font-serif dark:text-white-color">
              {props.publish}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="leading-[1] text-xs text-typo-neutral-80 font-serif underline dark:text-typo-neutral-40">
              Credential ID
            </p>
            <p className="leading-[1] text-sm text-dark-primary font-serif dark:text-white-color">
              {props.id_credential}
            </p>
          </div>
        </div>
      </div>
      <a
        href={props.link_credential}
        target="_blank"
        className="leading-[1] text-sm font-serif pt-3 flex w-full justify-end"
      >
        <Button variant="primary">Credential</Button>
      </a>
    </div>
  );
};
