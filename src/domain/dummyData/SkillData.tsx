import {
  CssIcon,
  ExpressIcon,
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
import { TCertificate, TSkill, TSoftSkill } from '../entities/SkillType';

export const SkillData: TSkill[] = [
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

export const SoftSkillData: TSoftSkill[] = [
  { id: 1, name: 'Problem Solving Computational Thinking' },
  { id: 2, name: 'Fast Learning' },
  { id: 3, name: 'Team Colaboration' },
  { id: 4, name: 'Humility' },
  { id: 5, name: 'Adaptability' },
];

export const CertificateData: TCertificate[] = [
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
