import Image from "next/image";
import styles from "@/styles/NotableClients.module.css";

const clients = [
  { logo: "/logos/saga-wood.png", alt: "Saga Wood", className: styles.sagaWood },
  { logo: "/logos/jcd.png", alt: "JCD", className: styles.jcd },
  { logo: "/logos/chain2bollywood.png", alt: "Chain 2 Bollywood", className: styles.chain2bollywood },
];

export default function NotableClients() {
  return (
    <section className={styles.notableClients}>
      <h2 className={styles.title}>OUR NOTABLE CLIENTS</h2>
      <div className={styles.clientGrid}>
        {clients.map((client, index) => (
          <div key={index} className={styles.clientLogoWrapper}>
            <Image
              src={client.logo}
              alt={client.alt}
              className={`${styles.clientLogo} ${client.className}`} // Apply individual styles
              width={0} // Allow responsive sizing
              height={0} 
              sizes="(max-width: 1200px) 100vw, 250px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
