import { StaticImageData } from "next/image";

export type TSkill = {
    title: string;
    percnt: number;
    icon: React.JSX.Element;
}

export type TSoftSkill = {
    id: number;
    name: string;
}

export type TCertificate = {
    img: StaticImageData;
    company: string;
    from: string;
    title: string;
    published: string;
    id_credential: string;
    link_credential: string;
}