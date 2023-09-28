import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { store } from '@/app/store';
import { Provider } from 'react-redux';

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
    <Provider store={store}>
      <main className={`${sugarPeachy.variable} ${baristo.variable}`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
