// /components/Services/ServiceLayout.tsx
import styles from '@/styles/Services/ServiceLayout.module.css';
import { ServiceDataType } from '@/data/services'; // Assumes you're exporting this type
import Image from 'next/image';

interface Props {
  service: ServiceDataType;
}

const ServiceLayout: React.FC<Props> = ({ service }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{service.title}</h1>
      <Image
        className={styles.image}
        src={service.image}
        alt={service.title}
        width={800} // replace with appropriate width
        height={500} // replace with appropriate height
        priority // optional, for above-the-fold images
      />      <p className={styles.description}>{service.description}</p>
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
