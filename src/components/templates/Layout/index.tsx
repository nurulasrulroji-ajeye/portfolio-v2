import { Navbar } from '@/components/molecules';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen overflow-y-scroll">
      <Navbar />
      <div>{children}</div>
    </main>
  );
};
