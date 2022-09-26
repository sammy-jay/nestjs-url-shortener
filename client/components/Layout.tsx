import { ReactFragment, ReactPortal } from 'react';
import Navbar from './Navbar';

type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

export function Layout({ children }: { chidren: ReactNode }) {
  return (
    <main className="bg-gray-200">
      <Navbar />
      {children}
    </main>
  );
}
