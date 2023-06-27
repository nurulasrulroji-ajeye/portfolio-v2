import { Hero, MySkill, Portfolio, Work } from '@/components/organisms';
import { Layout } from '@/components/templates';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <MySkill />
      <Work />
      <Portfolio />
    </Layout>
  );
}
