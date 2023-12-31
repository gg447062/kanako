import styles from '../styles/contact.module.css';
export default function Contact() {
  return (
    <article className={styles.article}>
      <section className={styles.section}>
        <h3 className={styles.h3}>Email</h3>
        <p>Kanakopooknyw@protonmail.com</p>
      </section>
      <section className={styles.section}>
        <h3 className={styles.h3}>Mailing List</h3>
        <div className={styles.container}>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="email"
          ></input>
        </div>
        <div className={styles.container}>
          <input
            className={styles.input}
            id="snail"
            name="snail"
            placeholder="snail mail"
          ></input>
        </div>
        <div className={styles.container}>
          <input className={styles.button} type="submit"></input>
        </div>
      </section>
    </article>
  );
}
