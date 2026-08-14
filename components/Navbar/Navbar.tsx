import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import TopBar from "./TopBar";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";
import BreadcrumbBar from "./BreadcrumbBar";

export default function Navbar() {
  return (
    <header className={styles.headerWrapper}>
      {/* 1. Accessibility toolbar and Date/Time */}
      <TopBar />

      {/* 2. Main Syndicate Brand Header */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.mainHeaderContainer}>
            {/* Brand Logo & Title on the right in RTL */}
            <Link href="/" className={styles.logoBrand}>
              <Image
                src="/images/syndicate-logo.png"
                alt="شعار نقابة المهندسين بالقاهرة"
                width={50}
                height={50}
                className={styles.logoImage}
                priority
              />
              <span className={styles.syndicateTitle}>
                نقابة المهندسين بالقاهرة
              </span>
            </Link>

            {/* Navigation links in the middle */}
            <NavLinks />

            {/* User Profile on the left in RTL */}
            <UserProfile />
          </div>
        </div>
      </div>

      {/* 3. Bottom Green sub-bar for Breadcrumbs */}
      <BreadcrumbBar />
    </header>
  );
}
