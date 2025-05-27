// /components/Services/ServiceLayout.tsx
import styles from '@/styles/Services/ServiceLayout.module.css';
import { ServiceDataType } from '@/data/services'; // Assumes you're exporting this type

interface Props {
  service: ServiceDataType;
}

const ServiceLayout: React.FC<Props> = ({ service }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{service.title}</h1>
      <img className={styles.image} src={service.image} alt={service.title} />
      <p className={styles.description}>{service.description}</p>
      <ul className={styles.featureList}>
        {service.features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceLayout;
