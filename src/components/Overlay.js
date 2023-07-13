import styles from '../app/styles/home.module.css';
import Image from 'next/image';
export default function Overlay() {
  return (
    <>
      <Image
        className={styles.imageOne}
        src="https://res.cloudinary.com/dletnd7ha/image/upload/v1689270478/kanako-site/topp_vziosf.png"
        alt="abstract-shape"
        width={1200}
        height={600}
      ></Image>
      <Image
        className={styles.imageTwo}
        src="https://res.cloudinary.com/dletnd7ha/image/upload/v1689270444/kanako-site/_middle.png"
        alt="abstract-shape"
        width={1200}
        height={600}
      ></Image>
      <Image
        className={styles.imageThree}
        src="https://res.cloudinary.com/dletnd7ha/image/upload/v1689270443/kanako-site/_bottom_wru6bd.png"
        alt="abstract-shape"
        width={1200}
        height={600}
      ></Image>
      <Image
        className={styles.imageFour}
        src="https://res.cloudinary.com/dletnd7ha/image/upload/v1689280897/bottom_circle_ygoscu.png"
        alt="abstract-shape"
        width={1200}
        height={600}
      ></Image>
    </>
  );
}
