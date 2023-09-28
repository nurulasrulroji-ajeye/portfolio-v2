import {
  DiscordIcon,
  DribleIcon,
  GithubIcon,
  IgIcon,
  LinkedInIcon,
  MediumIcon,
  PhpIcon,
} from '@/assets';
import { TSocmed } from '../entities/SocmedType';

export const SocmedData: TSocmed[] = [
  { id: 1, icon: <IgIcon />, link: 'https://www.instagram.com/ajeye_/?hl=id' },
  {
    id: 2,
    icon: <LinkedInIcon />,
    link: 'https://www.linkedin.com/in/nurul-asrul-roji-092610238/',
  },
  {
    id: 3,
    icon: <GithubIcon />,
    link: 'https://github.com/nurulasrulroji-ajeye',
  },
  {
    id: 4,
    icon: <DiscordIcon />,
    link: 'https://discord.com/channels/@ajeye_',
  },
  {
    id: 5,
    icon: <MediumIcon />,
    link: 'https://medium.com/@asrulrojin',
  },
  {
    id: 6,
    icon: <DribleIcon />,
    link: 'https://dribbble.com/ajeye15',
  },
];
