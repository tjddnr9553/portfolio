import styles from '@/components/home/section2.module.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { CarouselProject } from '@/components/home/carouselProject';

export default function Section2() {
  return (
    <section className={styles.section}>
      <div className={styles.projectHeader}>
        Project
      </div>
      <div className={styles.projectMain}>
        <CarouselProject/>
      </div>
      <div>
      </div>
    </section>
  );
}
