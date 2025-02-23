import styles from '@/components/home/section1.module.css';
import { Button } from '@/components/ui/button';
import { GithubIcon, House, Mail } from 'lucide-react';

export default function Section1() {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <img src="./about.jpg" alt="About" />
      </div>
      <div className={styles.introduceContainer}>
        <h1>안녕하세요</h1>
        <h3><strong>즐겁게</strong> 개발하고있는 프론트엔드 개발자 차성욱입니다.</h3>
        <div className={styles.buttonContainer}>
          <Button variant="outline" size="icon"><GithubIcon />&nbsp; 깃허브</Button>
          <Button variant="outline"><Mail />&nbsp; 메일</Button>
          <Button variant="outline"><House />&nbsp; 블로그</Button>
        </div>
      </div>
    </section>
  );
}
