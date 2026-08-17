import React from "react";
import Image from "next/image";
import { DirectusAboutData, getDirectusImageUrl } from "@/lib/directus/about";
import RichText from "./RichText";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  data: DirectusAboutData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  const imageUrl = getDirectusImageUrl(data.about_image);

  return (
    <section className={styles.section} aria-label="عن النقابة">
      <div className={styles.container}>
        {/* 1. Image Side with Decorative Green Box (FIRST in DOM -> RIGHT in RTL) */}
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            {/* Green decorative rectangle behind the image */}
            <div className={styles.greenBg} aria-hidden="true" />

            {/* Main About Image */}
            <Image
              src={imageUrl}
              alt={data.about_title || "عن النقابة"}
              width={794}
              height={382}
              className={styles.image}
              priority
              unoptimized
            />
          </div>
        </div>

        {/* 2. Text Content (SECOND in DOM -> LEFT in RTL) */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>{data.about_title}</h1>
          <RichText content={data.about_description} className={styles.description} />
        </div>
      </div>
    </section>
  );
}
