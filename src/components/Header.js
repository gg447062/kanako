'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/styles/header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {/* <div className={styles.linkContainer}> */}
      <Link className={styles.links} href={'/#work'}>
        {/* <Image
          src="https://res.cloudinary.com/dletnd7ha/image/upload/v1689270475/kanako-site/logo_vvzzmw.png"
          height={30}
          width={30}
          alt="seal"
        /> */}
        Work
      </Link>
      <Link className={styles.links} href={'/screenings'}>
        Screenings
      </Link>
      <Link className={styles.links} href={'/about'}>
        About
      </Link>
      <Link className={styles.links} href={'/contact'}>
        Contact
      </Link>
      {/* </div> */}
    </nav>
  );
}
