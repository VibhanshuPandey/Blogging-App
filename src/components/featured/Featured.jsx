import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey MNV here!</b> Discover our stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>The Future is Now: Upcoming Technologies to Watch in 2024</h1>
          <p className={styles.postDesc}>
          The world of technology is rapidly evolving, and as we move into 2024, several emerging technologies are set to transform our lives. Artificial intelligence and machine learning are becoming increasingly integrated into healthcare, finance, and retail, offering improved diagnostics, personalized experiences, and enhanced security. Quantum computing is nearing practical application, promising breakthroughs in drug discovery, cryptography, and optimization. The rollout of 5G will enable smart cities, autonomous vehicles, and expanded IoT networks. Extended Reality (XR) will revolutionize education, entertainment, and remote work with immersive experiences. Biotechnology advances in gene editing and personalized medicine will redefine healthcare, while clean energy technologies like advanced solar power and hydrogen fuel will drive sustainability. Robotics and automation will enhance manufacturing, healthcare, and service industries. Blockchain will bring transparency to supply chains, decentralized finance, and secure digital identities. Space exploration is set to expand with commercial space travel, enhanced satellite technology, and the potential for space mining. Embracing these innovations will be key to leveraging their potential for personal and professional growth.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;