"use client"
import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import styles from './Workflow.module.css'

const steps = [
  {
    num: '01',
    title: 'Знакомство и оценка',
    desc: 'Мы обсуждаем вашу идею и бизнес-цели. Мы вникаем в задачу, предлагаем лучшие варианты решения и бесплатно рассчитываем точные сроки и бюджет.',
  },
  {
    num: '02',
    title: 'Продумывание логики',
    desc: 'Прежде чем писать код, мы детально планируем, как всё будет работать. Делаем так, чтобы продукт был максимально удобен для ваших клиентов и решал свои задачи.',
  },
  {
    num: '03',
    title: 'Создание продукта',
    desc: 'Мы воплощаем проект в реальность. Никаких «черных ящиков» — мы регулярно выходим на связь и показываем промежуточные результаты, чтобы вы видели прогресс.',
  },
  {
    num: '04',
    title: 'Запуск и гарантия',
    desc: 'Размещаем готовый проект в интернете, настраиваем всё необходимое и передаем вам доступы. После сдачи проекта мы всегда остаемся на связи для поддержки.',
  },
]

export default function Workflow() {
  const [activeIndices, setActiveIndices] = useState([]);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setActiveIndices((prev) => {
          let updated = [...prev];
          entries.forEach((entry) => {
            const idx = Number(entry.target.dataset.index);
            if (entry.isIntersecting) {
              if (!updated.includes(idx)) updated.push(idx);
            } else {
              updated = updated.filter((i) => i !== idx);
            }
          });
          return updated;
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="workflow" className={`section ${styles.workflow}`}>
      <div className="container">
        <Reveal as="div" className="section-label">// Процесс</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>Как мы будем работать</Reveal>
        <Reveal as="p" className="section-subtitle" delay={0.1}>
          Прозрачное сотрудничество: вы всегда понимаете, за что платите и на каком этапе находится ваш проект. Минимум технических терминов, максимум результата.
        </Reveal>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div 
              key={index} 
              ref={(el) => (stepRefs.current[index] = el)}
              data-index={index}
              className={`${styles.step} ${activeIndices.length > 0 && Math.min(...activeIndices) === index ? styles.active : ''}`}
            >
              <div className={styles.stepNumber}>{step.num}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
