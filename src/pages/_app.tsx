import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const sugarPeachy = localFont({
  src: [
    {
      path: '../../public/fonts/Sugarpeachy.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Sugarpeachy.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Sugarpeachy.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Sugarpeachy.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-sugarpeachy',
});

const baristo = localFont({
  src: [
    {
      path: '../../public/fonts/baristo.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/baristo.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/baristo.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/baristo.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-baristo',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sugarPeachy.variable} ${baristo.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
