// app/page.tsx
import Header from './components/Header';
import styles from './Home.module.css';

export default function Home() {
  return (
    // Use a React Fragment <> to return multiple elements
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Meet Your Personal AI Journal</h1>
          <p className={styles.subtitle}>
            Capture your thoughts, find patterns, and unlock a better
            understanding of yourself.
          </p>
          <button className={styles.heroButton}>Try for Free</button>
          
          {/* This is a placeholder for a product image or video */}
          <div className={styles.imagePlaceholder}></div>
        </section>
      </main>
    </>
  );
}