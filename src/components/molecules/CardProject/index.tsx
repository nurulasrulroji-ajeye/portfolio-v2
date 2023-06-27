import { opiniaMobile } from '@/assets';
import Image from 'next/image';
import React from 'react';

export const CardProject = () => {
  return (
    <div className="p-4 bg-yellow-color rounded-[30px]">
      <div className="relative w-full h-[300px] overflow-hidden rounded-[30px] border-2 border-green-primary">
        <Image src={opiniaMobile} alt="opiniamob" height={800} width={600} />
      </div>
    </div>
  );
};
