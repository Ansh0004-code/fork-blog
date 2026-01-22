import styles from "./card.module.css";
import icon from "/vite.svg"; 


interface InfoCardProps {
  tag?: string;
  time?: string;
  title?: string;
  description?: string;
  category?: string;
  onClick?: () => void;   
  isActive?: boolean;
}

const InfoCard = ({
  tag = "REGULATIONS",
  time = "1 week ago",
  title = "Understanding Tax Reforms",
  description =
    "A comprehensive breakdown of the new tax laws introduced this fiscal year and their impact...",
  category = "Taxation",
  onClick,
  isActive = false,
}: InfoCardProps) => {
  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0} 
    >
      <div className={styles.header}>
        <span className={styles.tag}>
          <img className={styles.icon} src={icon} alt="tag icon" />
          {tag}
        </span>
        <span className={styles.time}>{time}</span>
      </div>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <span className={styles.category}>{category}</span>
    </div>
  );
};

export default InfoCard;
