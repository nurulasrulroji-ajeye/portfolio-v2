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
    <div className="w-full p-4 bg-green-primary flex flex-col gap-3 shadow-yellow-red-blues rounded-[30px]">
      <div className="flex gap-3 items-center">
        <div className="relative w-12 h-12 overflow-hidden rounded-full shadow-md">
          <Image src={props.img} alt="dicoding" fill />
        </div>
        <div className="flex flex-col gap-1">
          <p className="leading-[1] text-lg font-semibold text-yellow-color font-primary">
            {props.companyName}
          </p>
          <p className="leading-[1] text-sm text-yellow-color/80 font-primary">
            at {props.companyLocation}
          </p>
        </div>
      </div>
      <div>
        <p className="font-semibold font-primary text-yellow-color text-base pb-2">
          {props.titleCertificateion}
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="leading-[1] text-xs text-baby-blue font-primary underline">
              Date Published
            </p>
            <p className="leading-[1] text-sm text-yellow-color font-primary">
              {props.publish}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="leading-[1] text-xs text-baby-blue font-primary underline">
              Credential ID
            </p>
            <p className="leading-[1] text-sm text-yellow-color font-primary">
              {props.id_credential}
            </p>
          </div>
        </div>
      </div>
      <a
        href={props.link_credential}
        target="_blank"
        className="leading-[1] text-sm font-primary pt-3 flex w-full justify-end"
      >
        <Button variant="baby-blue">Credential</Button>
      </a>
    </div>
  );
};
