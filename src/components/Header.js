'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/styles/header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  function handleClick(e) {
    const height = pathname == '/' ? '80' : '120';
    e.target.height = height;
    e.target.width = height;
  }

  return (
    <nav className={styles.nav}>
      <Link href={pathname == '/' ? '/work' : '/'}>
        <Image
          src={
            'https://res.cloudinary.com/dletnd7ha/image/upload/v1689270475/kanako-site/logo_vvzzmw.png'
          }
          alt="logo"
          width={120}
          height={120}
          className={styles.navImage}
          onClick={(e) => handleClick(e)}
        ></Image>
      </Link>

      {pathname !== '/' && (
        <div className={styles.linkContainer}>
          <Link className={styles.links} href={'/work'}>
            Work
          </Link>
          <Link className={styles.links} href={'/about'}>
            About
          </Link>
          <Link className={styles.links} href={'/contact'}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
