import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/molecules';
import { Transition } from '@headlessui/react';
import { useAppDispatch } from '@/app/hook';
import { setScrollTop } from '@/features/scroll/slice';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [hideNav, setHideNav] = useState<boolean>(true);

  const handleScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    const element = e.currentTarget;
    const currentScrollPos = element.scrollTop;
    dispatch(setScrollTop(currentScrollPos));
    if (currentScrollPos > scrollPos) {
      setHideNav(false);
    } else if (currentScrollPos < scrollPos) {
      setHideNav(true);
    }
    setScrollPos(currentScrollPos);
  };
  return (
    <main className="w-full h-screen overflow-y-scroll" onScroll={handleScroll}>
      <Navbar hideNav={hideNav} />
      <div>{children}</div>
    </main>
  );
};
