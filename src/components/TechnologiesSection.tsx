"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/TechnologiesSection.module.css";

export default function TechnologiesSection() {
  // Hardcoded Tech Stacks & Their Technologies
  const techStacks = [
    {
      name: "Frontend",
      icon: "/icons/frontend.png",
      technologies: [
        { name: "AngularJS", icon: "/icons/angular.png" },
        { name: "ReactJS", icon: "/icons/react.png" },
        { name: "Vue.js", icon: "/icons/vue.png" },
        { name: "JavaScript", icon: "/icons/javascript.png" },
        { name: "CSS3", icon: "/icons/css3.png" },
        { name: "HTML5", icon: "/icons/html5.png" },
        { name: "TezJS", icon: "/icons/tezjs.png" },
        { name: "Meteor", icon: "/icons/meteor.png" },
      ],
    },
    {
      name: "Backend",
      icon: "/icons/backend.png",
      technologies: [
        { name: "Node.js", icon: "/icons/nodejs.png" },
        { name: "PHP", icon: "/icons/php.png" },
        { name: "Java", icon: "/icons/java.png" },
        { name: "Python", icon: "/icons/python.png" },
        { name: ".NET", icon: "/icons/dotnet.png" },
        { name: "GO", icon: "/icons/go.png" },
        { name: "C++", icon: "/icons/cplusplus.png" },
      ],
    },
    {
      name: "Mobile",
      icon: "/icons/mobile.png",
      technologies: [
        { name: "Flutter", icon: "/icons/flutter.png" },
        { name: "React Native", icon: "/icons/react.png" },
        { name: "Swift", icon: "/icons/swift.png" },
        { name: "Kotlin", icon: "/icons/kotlin.png" },
        { name: "Dart", icon: "/icons/dart.png" },
      ],
    },
    {
      name: "Databases",
      icon: "/icons/database.png",
      technologies: [
        { name: "MongoDB", icon: "/icons/mongodb.png" },
        { name: "PostgreSQL", icon: "/icons/postgresql.png" },
        { name: "MySQL", icon: "/icons/mysql.png" },
        { name: "Firebase", icon: "/icons/firebase.png" },
        { name: "DynamoDB", icon: "/icons/dynamodb.png" },
      ],
    },
    {
      name: "Cloud DB",
      icon: "/icons/cloud.png",
      technologies: [
        { name: "AWS", icon: "/icons/aws.png" },
        { name: "Azure", icon: "/icons/azure.png" },
        { name: "Google Cloud", icon: "/icons/googlecloud.png" },
        { name: "IBM Cloud", icon: "/icons/ibmcloud.png" },
        { name: "Oracle Cloud", icon: "/icons/oracle.png" },
      ],
    },
    {
      name: "DevOps",
      icon: "/icons/devops.png",
      technologies: [
        { name: "Docker", icon: "/icons/docker.png" },
        { name: "Kubernetes", icon: "/icons/kubernetes.png" },
        { name: "Jenkins", icon: "/icons/jenkins.png" },
        { name: "Terraform", icon: "/icons/terraform.png" },
        { name: "Ansible", icon: "/icons/ansible.png" },
      ],
    },
    {
      name: "Testing",
      icon: "/icons/testing.png",
      technologies: [
        { name: "Selenium", icon: "/icons/selenium.png" },
        { name: "JUnit", icon: "/icons/junit.png" },
        { name: "Mockito", icon: "/icons/mockito.png" },
        { name: "Cypress", icon: "/icons/cypress.png" },
        { name: "Postman", icon: "/icons/postman.png" },
        { name: "Jest", icon: "/icons/jest.png" },
      ],
    },
    {
      name: "UI/UX Design",
      icon: "/icons/design.png",
      technologies: [
        { name: "Figma", icon: "/icons/figma.png" },
        { name: "Adobe XD", icon: "/icons/adobe-xd.png" },
        { name: "Sketch", icon: "/icons/sketch.png" },
        { name: "InVision", icon: "/icons/invision.png" },
        { name: "Photoshop", icon: "/icons/photoshop.png" },
      ],
    },
    {
      name: "Project Management",
      icon: "/icons/project.png",
      technologies: [
        { name: "Jira", icon: "/icons/jira.png" },
        { name: "Trello", icon: "/icons/trello.png" },
        { name: "Asana", icon: "/icons/asana.png" },
        { name: "ClickUp", icon: "/icons/clickup.png" },
        { name: "Monday.com", icon: "/icons/monday.png" },
        { name: "Notion", icon: "/icons/notion.png" },
      ],
    },
  ];

  const [selectedStack, setSelectedStack] = useState(techStacks[0]);

  return (
    <section className={styles.techSection}>
      <h2 className={styles.sectionTitle}>Technologies and Platforms We Use</h2>
      <p className={styles.sectionSubtitle}>
        The mobile and web apps we build are driven by quality and durability,
        utilizing state-of-the-art technologies, tools, and frameworks. As part
        of our development process, we adhere to industry standards and develop
        digital solutions that are aligned with your business goals.
      </p>

      <div className={styles.techContainer}>
        {/* Left Panel - Tech Stack Names */}
        <div className={styles.stackList}>
          <div className={styles.stackScroll}>
            {techStacks.map((stack) => (
              <div
                key={stack.name}
                className={`${styles.stackItem} ${
                  stack.name === selectedStack.name ? styles.active : ""
                }`}
                onClick={() => setSelectedStack(stack)}
              >
                <Image
                  src={stack.icon}
                  alt={stack.name}
                  width={24}
                  height={24}
                  unoptimized
                  style={{ filter: "invert(1) brightness(2)" }} // Invert color for dark mode
                />
                {stack.name}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Technologies for Selected Stack */}
        <div className={styles.techDetails}>
          {selectedStack.technologies.map((tech) => (
            <div key={tech.name} className={styles.techItem}>
              <Image src={tech.icon} alt={tech.name} width={24} height={24} />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
