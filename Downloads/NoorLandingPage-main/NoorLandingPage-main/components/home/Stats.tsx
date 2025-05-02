import styles from "../../index.module.css";
import { StatData } from "../types";

const Stats: React.FC = () => {
  const stats: StatData[] = [
    { label: "Years of Service", value: 8 },
    { label: "Sq. Meter Area", value: 459 },
    { label: "Nice Rooms", value: 50 },
    { label: "Happy Visitors", value: 3786 },
  ];

  return (
    <section className={`${styles.stats} fade-in-element`}>
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div className={styles.statItem} key={`stat-${index}`}>
            <div className={styles.statValue} data-value={stat.value}>
              {stat.value}
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
