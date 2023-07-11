import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav>
      <Link href={'/'}>
        <Image src={'/logo.png'} alt="logo" width={100} height={100}></Image>
      </Link>
      <Link href={'/films'}>Films</Link>
      <Link href={'/performance'}>Performance</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/contact'}>Contact</Link>
    </nav>
  );
}
