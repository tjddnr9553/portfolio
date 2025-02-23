import '@/app/globals.css';
import { ReactNode } from 'react';
import styles from '@/app/layout.module.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
    <body>
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <Link href="/" className={styles.headerText}>차성욱</Link>
      </div>
      <div className={styles.headerNavbar}>
        <Link href="/about" className={styles.headerText}>About</Link>
        <Link href="/project" className={styles.headerText}>Project</Link>
      </div>
    </header>
    <div className={styles.mainContainer}>
      {children}
    </div>
    <footer className={styles.footer}>푸터</footer>
    </body>
    </html>
  );
}
