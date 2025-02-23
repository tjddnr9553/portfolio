import styles from '@/app/page.module.css';
import Section1 from '@/components/home/section1';
import Section2 from '@/components/home/section2';
import Section3 from '@/components/home/section3';

export default function Home() {
  return (
    <div className={styles.container}>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
