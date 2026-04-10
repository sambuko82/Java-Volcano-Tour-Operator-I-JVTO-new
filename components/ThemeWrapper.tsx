'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isForensic = pathname?.startsWith('/verify-jvto');

  useEffect(() => {
    if (isForensic) {
      document.body.classList.add('forensic-mode');
      document.body.classList.remove('travel-mode', 'font-sans', 'bg-jvto-off', 'text-jvto-navy');
    } else {
      document.body.classList.remove('forensic-mode');
      document.body.classList.add('travel-mode', 'font-sans', 'bg-jvto-off', 'text-jvto-navy');
    }
  }, [isForensic]);

  return <>{children}</>;
}
