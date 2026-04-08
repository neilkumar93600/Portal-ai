import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen bg-black">
      {children}
    </div>
  );
};

export default Layout;
