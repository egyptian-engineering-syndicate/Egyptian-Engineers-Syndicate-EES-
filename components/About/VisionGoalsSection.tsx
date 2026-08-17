import React from "react";
import Image from "next/image";
import { DirectusAboutData, getDirectusImageUrl } from "@/lib/directus/about";
import RichText from "./RichText";
import styles from "./VisionGoalsSection.module.css";

interface VisionGoalsSectionProps {
  data: DirectusAboutData;
}

export default function VisionGoalsSection({ data }: VisionGoalsSectionProps) {
  const visionImageUrl = getDirectusImageUrl(data.vision_image);

  return (
    <section className={styles.section} aria-label="رؤية وأهداف النقابة">
      <div className={styles.container}>
        {/* Section 2: Vision Card (Right in RTL) */}
        <article className={`${styles.card} ${styles.visionCard}`}>
          <div className={styles.visionContent}>
            <h2 className={styles.cardTitle}>{data.vision_title}</h2>
            <RichText content={data.vision_description} className={styles.cardDescription} />
          </div>

          <div className={styles.visionIconRow}>
            <Image
              src="/images/Vector (1).png"
              alt="رؤية النقابة"
              width={112}
              height={112}
              className={styles.mountainIcon}
              aria-hidden="true"
            />
          </div>
        </article>

        {/* Center: Vision Image */}
        <div className={styles.imageColumn}>
          <Image
            src={visionImageUrl}
            alt={data.vision_title || "رؤية النقابة"}
            width={518}
            height={321}
            className={styles.visionImage}
            unoptimized
          />
        </div>

        {/* Section 3: Goals Card (Left in RTL) */}
        <article className={`${styles.card} ${styles.goalsCard}`}>
          {/* Icon on its own line */}
          <div className={styles.goalsIconRow}>
            <svg
              className={styles.targetIcon}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="32"
                cy="32"
                r="26"
                stroke="#038653"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r="18"
                stroke="#038653"
                strokeWidth="3.5"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r="10"
                stroke="#038653"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="32" cy="32" r="4.5" fill="#038653" />
              <path
                d="M46 18L30 34M46 18H37M46 18V27"
                stroke="#038653"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Title then Description below icon */}
          <h2 className={styles.cardTitle}>{data.goals_title}</h2>
          <RichText content={data.goals_description} className={styles.cardDescription} />
        </article>
      </div>
    </section>
  );
}
