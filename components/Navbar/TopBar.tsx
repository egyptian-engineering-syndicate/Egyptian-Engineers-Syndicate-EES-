import styles from "./Navbar.module.css";
import DateTimeDisplay from "./DateTimeDisplay";
import AccessibilityToolbar from "./AccessibilityToolbar";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>
        <div className={styles.topBarContainer}>
          {/* Date & Time (Displays on the right in RTL) */}
          <DateTimeDisplay />
          
          {/* Accessibility Controls (Displays on the left in RTL) */}
          <AccessibilityToolbar />
        </div>
      </div>
    </div>
  );
}
