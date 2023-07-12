import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/styles/header.module.css';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image src={'/logo.png'} alt="logo" width={100} height={100}></Image>
      </Link>
      <Link className={styles.links} href={'/films'}>
        Films
      </Link>
      <Link className={styles.links} href={'/performance'}>
        Performance
      </Link>
      <Link className={styles.links} href={'/about'}>
        About
      </Link>
      <Link className={styles.links} href={'/contact'}>
        Contact
      </Link>
    </nav>
  );
}
