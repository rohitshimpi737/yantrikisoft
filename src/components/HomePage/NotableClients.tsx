import Image from "next/image";
import styles from "@/styles/HomePage/NotableClients.module.css";

const clients = [
  { logo: "/logos/saga-wood.png", alt: "Saga Wood", className: styles.sagaWood },
  { logo: "/logos/jcd.png", alt: "JCD", className: styles.jcd },
  { logo: "/logos/chain2bollywood.png", alt: "Chain 2 Bollywood", className: styles.chain2bollywood },
  { logo: "/logos/hindconnect.png", alt: "hindconnect", className: styles.hindconnect },
  { logo: "/logos/get2act.png", alt: "get2act", className: styles.get2act },


];

export default function NotableClients() {
  return (
    <section className={styles.notableClients}>
      <h2 className={styles.title}>Our Notable Clients</h2>
      <div className={styles.clientGrid}>
        {clients.map((client, index) => (
          <div key={index} className={styles.clientLogoWrapper}>
            {/* <Image
              src={client.logo}
              alt={client.alt}
              className={`${styles.clientLogo} ${client.className}`} // Apply individual styles
              width={0} // Allow responsive sizing
              height={0} 
              sizes="(max-width: 1200px) 100vw, 250px"
            /> */}

            <img
              src={client.logo}
              alt={client.alt}
              className={`${styles.clientLogo} ${client.className}`}
              width={0}
              height={0}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 250px"
              style={{ width: "100%", height: "auto" }}
            />

          </div>
        ))}
      </div>
    </section>
  );
}
