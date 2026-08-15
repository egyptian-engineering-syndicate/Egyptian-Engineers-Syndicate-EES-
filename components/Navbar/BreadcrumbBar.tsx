"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BreadcrumbBar.module.css";

const pathLabels: Record<string, string> = {
  "about": "من نحن",
  "services": "الخدمات",
  "syndicate": "الخدمات النقابية",
  "healthcare": "مشروع الرعاية الصحية",
  "loans": "القروض والإعانات",
  "trips": "الرحلات والمصايف",
  "departments": "إدارات النقابة",
  "subscriptions": "إدارة الاشتراكات",
  "public-relations": "إدارة العلاقات العامة",
  "training": "إدارة التدريب والتوظيف",
  "engineering": "الإدارة الهندسية",
  "committees": "اللجان",
  "news": "آخر الأخبار",
  "latest-news": "آخر الأخبار",
  "events": "الفعاليات",
  "contact": "تواصل معنا",
  "profile": "الملف الشخصي",
  "settings": "إعدادات الحساب",
  "digital": "الخدمات الإلكترونية"
};

export default function BreadcrumbBar() {
  const pathname = usePathname();

  // Split paths and filter out empty strings
  const paths = pathname.split("/").filter((p) => p !== "");

  // Always start with Home
  const breadcrumbs = [
    {
      label: "الرئيسية",
      href: "/",
      isLast: paths.length === 0,
    },
  ];

  let currentHref = "";
  paths.forEach((path, index) => {
    currentHref += `/${path}`;
    const label = pathLabels[path] || decodeURIComponent(path);
    breadcrumbs.push({
      label,
      href: currentHref,
      isLast: index === paths.length - 1,
    });
  });

  // If we are on the homepage, we can render the bar with just "الرئيسية"
  // or we can hide it. In the design it shows breadcrumbs for the "اخر الاخبار" page,
  // which is active. Let's make sure it displays beautifully.
  return (
    <div className={styles.barWrapper}>
      <div className={styles.container}>
        <nav aria-label="مسار التنقل">
          <ul className={styles.breadcrumbList}>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className={styles.breadcrumbItem}>
                {idx > 0 && (
                  <svg className={styles.separatorIcon} viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                )}
                
                {crumb.isLast ? (
                  <span className={styles.current} aria-current="page">
                    {idx === 0 && (
                      <svg className={styles.homeIcon} viewBox="0 0 24 24" style={{ marginLeft: "0.35rem", display: "inline-block", verticalAlign: "middle" }}>
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    )}
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className={styles.link}>
                    {idx === 0 && (
                      <svg className={styles.homeIcon} viewBox="0 0 24 24">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    )}
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
