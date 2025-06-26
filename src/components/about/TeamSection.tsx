'use client';
import styles from '@/styles/about/TeamSection.module.css';
import Image from 'next/image';

const team = [
  { name: 'Mihir Tiwari', role: 'Finance', src: '/images/team/mihir.jpg' },
  { name: 'Hitanshi Shroff', role: 'Business & Marketing', src: '/images/team/hitanshi.jpg' },
  { name: 'Parth Garud', role: 'UI Designer', src: '/images/team/parth.jpg' },
  { name: 'Prachi Patel', role: 'UI Designer', src: '/images/team/prachi.jpg' },
  { name: 'Rohit Shimpi', role: 'Web Developer', src: '/images/team/rohit.jpg' },
  // Add more members if needed
];

const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.heading}>Our Team</h2>
      <p className={styles.subheading}>
        Meet the experts behind Yantrikisoft’s success and innovation.
      </p>
      <div className={styles.scrollContainer}>
        <div className={styles.teamRow}>
          {team.map((member, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={member.src}
                alt={member.name}
                width={140}
                height={140}
                className={styles.avatar}
              />
              <p className={styles.name}>{member.name}</p>
              <p className={styles.role}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
