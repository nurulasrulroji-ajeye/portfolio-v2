import {
  AirbnbIcon,
  AfterPayIcon,
  AdobeIcon,
  AmazoneIcon,
  AirStalkerIcon,
  ActiveCampIcon,
} from '@/assets';
import { THorizonInfinity, TNavList, TTabs } from '../entities/PartsType';

export const NavListData: TNavList[] = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'works', label: 'works' },
  { id: 'project', label: 'project' },
  { id: 'contact', label: 'contact' },
];

export const TabsData: TTabs[] = [
  { id: '1', name: 'Hard Skill' },
  { id: '2', name: 'Soft Skill' },
];

export const HorizonInfinityData: THorizonInfinity[] = [
  { id: 1, icon: <AirbnbIcon /> },
  { id: 2, icon: <AfterPayIcon /> },
  { id: 3, icon: <AdobeIcon /> },
  { id: 4, icon: <AmazoneIcon /> },
  { id: 5, icon: <AirStalkerIcon /> },
  { id: 5, icon: <ActiveCampIcon /> },
];
