"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DirectusMemberItem, getDirectusImageUrl } from "@/lib/directus/members";
import styles from "./MemberCard.module.css";

interface MemberCardProps {
  member: DirectusMemberItem;
}

export default function MemberCard({ member }: MemberCardProps) {
  const [imgError, setImgError] = useState(false);
  const imageUrl = getDirectusImageUrl(member.image);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {!imgError ? (
          <Image
            src={imageUrl}
            alt={member.name || "عضو النقابة"}
            fill
            className={styles.image}
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 378px"
            onError={() => setImgError(true)}
            unoptimized={typeof imageUrl === "string" && (imageUrl.startsWith("http://") || imageUrl.startsWith("https://"))}
          />
        ) : (
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-400">
            <span>👤</span>
          </div>
        )}
      </div>

      {/* Gradient overlay for readability */}
      <div className={styles.gradientOverlay} />

      {/* Content overlay */}
      <div className={styles.content}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.position}>{member.position}</p>
      </div>
    </div>
  );
}
