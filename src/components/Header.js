'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/styles/header.module.css';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image src={'/logo.png'} alt="logo" width={80} height={80}></Image>
      </Link>
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
    </nav>
  );
}
