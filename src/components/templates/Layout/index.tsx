import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/molecules';
import { Transition } from '@headlessui/react';
import { useAppDispatch } from '@/app/hook';
import { setScrollPage, setScrollTop } from '@/features/scroll/slice';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const [pageScrolled, setPageScrolled] = useState<
    'about' | 'skills' | 'works' | 'project' | 'contact'
  >('about');
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [hideNav, setHideNav] = useState<boolean>(true);

  const handleScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    const element = e.currentTarget;
    const currentScrollPos = element.scrollTop;
    dispatch(setScrollTop(currentScrollPos));

    const aboutPage = document.getElementById('about');
    const skillsPage = document.getElementById('skills');
    const worksPage = document.getElementById('works');
    const projectPage = document.getElementById('project');
    const contactPage = document.getElementById('contact');

    const aboutPageHeight = aboutPage ? aboutPage.offsetTop : 0;
    const skillsPageHeight = skillsPage ? skillsPage.offsetTop : 0;
    const worksPageHeight = worksPage ? worksPage.offsetTop : 0;
    const projectPageHeight = projectPage ? projectPage.offsetTop : 0;
    const contactPageHeight = contactPage ? contactPage.offsetTop : 0;

    // console.log(worksPageHeight, skillsPageHeight, aboutPageHeight);
    if (currentScrollPos >= 0 && currentScrollPos < aboutPageHeight) {
      // console.log('About page');
    } else if (
      currentScrollPos >= aboutPageHeight &&
      currentScrollPos < skillsPageHeight
    ) {
      setPageScrolled('about');
    } else if (
      currentScrollPos >= skillsPageHeight &&
      currentScrollPos < worksPageHeight
    ) {
      setPageScrolled('skills');
    } else if (
      currentScrollPos >= worksPageHeight &&
      currentScrollPos < projectPageHeight
    ) {
      setPageScrolled('works');
    } else if (
      currentScrollPos >= projectPageHeight &&
      currentScrollPos < contactPageHeight
    ) {
      setPageScrolled('project');
    } else {
      setPageScrolled('contact');
      // console.log('Other page or above/below specified pages');
    }

    if (currentScrollPos > scrollPos) {
      setHideNav(false);
    } else if (currentScrollPos < scrollPos) {
      setHideNav(true);
    }
    setScrollPos(currentScrollPos);
  };

  useEffect(() => {
    dispatch(setScrollPage(pageScrolled));
  }, [dispatch, pageScrolled]);

  return (
    <main className="w-full h-screen overflow-y-scroll" onScroll={handleScroll}>
      <Navbar hideNav={hideNav} />
      <div>{children}</div>
    </main>
  );
};
