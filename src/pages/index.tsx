import {
  Contact,
  Footer,
  Hero,
  MySkill,
  Portfolio,
  Work,
} from '@/components/organisms';
import { Layout } from '@/components/templates';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Portfolio Ajeye</title>
      </Head>
      <Hero />
      <MySkill />
      <Work />
      <Portfolio />
      <Contact />
      <Footer />
    </Layout>
  );
}
