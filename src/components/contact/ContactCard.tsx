import styles from "@/styles/contact/ContactCard.module.css";

interface Props {
  icon: string;
  title: string;
  detail: string;
}

export default function ContactCard({ icon, title, detail }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.detail}>{detail}</p>
    </div>
  );
}
