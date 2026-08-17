import type { ReactNode } from "react";
import styles from "./RouteLoading.module.css";

type RouteLoadingProps = {
  variant?: "default" | "about" | "news" | "news-detail" | "contact";
};

function Line({ className = "" }: { className?: string }) {
  return <div className={`${styles.line} ${styles.sweep} ${className}`} />;
}

function Card({ children }: { children: ReactNode }) {
  return <div className={`${styles.card} ${styles.sweep}`}>{children}</div>;
}

export default function RouteLoading({ variant = "default" }: RouteLoadingProps) {
  if (variant === "about") {
    return (
      <div className={styles.shell}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={`${styles.kicker} ${styles.sweep}`} />
            <div className={`${styles.title} ${styles.sweep}`} />
            <div className={`${styles.subtitle} ${styles.sweep}`} />
          </div>

          <div className={styles.stack}>
            <div className={`${styles.panel} ${styles.sweep}`}>
              <div className={styles.content}>
                <div className={styles.mediaRow}>
                  <div className={`${styles.thumb} ${styles.sweep}`} />
                  <div className={styles.stack}>
                    <Line className={styles.lineLong} />
                    <Line className={styles.lineMedium} />
                    <Line className={styles.lineShort} />
                    <div className={styles.chipRow}>
                      <div className={`${styles.chip} ${styles.sweep}`} />
                      <div className={`${styles.chip} ${styles.sweep}`} />
                      <div className={`${styles.chip} ${styles.sweep}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.twoCol}>
              <Card>
                <div className={styles.content}>
                  <Line className={styles.lineLong} />
                  <Line className={styles.lineMedium} />
                  <Line className={styles.lineShort} />
                </div>
              </Card>
              <Card>
                <div className={styles.content}>
                  <Line className={styles.lineLong} />
                  <Line className={styles.lineMedium} />
                  <Line className={styles.lineShort} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "news") {
    return (
      <div className={styles.shell}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={`${styles.kicker} ${styles.sweep}`} />
            <div className={`${styles.title} ${styles.sweep}`} />
            <div className={`${styles.subtitle} ${styles.sweep}`} />
          </div>

          <div className={styles.twoCol}>
            <div className={`${styles.panel} ${styles.sweep}`}>
              <div className={styles.content}>
                <div className={`${styles.thumb} ${styles.sweep}`} />
                <Line className={styles.lineLong} />
                <Line className={styles.lineMedium} />
                <Line className={styles.lineShort} />
              </div>
            </div>
            <div className={`${styles.panel} ${styles.sweep}`}>
              <div className={styles.content}>
                <div className={`${styles.thumb} ${styles.sweep}`} />
                <Line className={styles.lineLong} />
                <Line className={styles.lineMedium} />
                <Line className={styles.lineShort} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "news-detail") {
    return (
      <div className={styles.shell}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={`${styles.kicker} ${styles.sweep}`} />
            <div className={`${styles.title} ${styles.sweep}`} style={{ width: "min(560px, 100%)" }} />
            <div className={`${styles.subtitle} ${styles.sweep}`} style={{ width: "min(760px, 100%)" }} />
          </div>

          <div className={styles.mediaRow}>
            <div className={`${styles.panel} ${styles.sweep}`}>
              <div className={styles.content}>
                <div className={`${styles.thumb} ${styles.sweep}`} style={{ minHeight: "380px" }} />
              </div>
            </div>
            <div className={`${styles.panel} ${styles.sweep}`}>
              <div className={styles.content}>
                <Line className={styles.lineLong} />
                <Line className={styles.lineLong} />
                <Line className={styles.lineMedium} />
                <Line className={styles.lineLong} />
                <Line className={styles.lineShort} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div className={styles.shell}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={`${styles.kicker} ${styles.sweep}`} />
            <div className={`${styles.title} ${styles.sweep}`} />
            <div className={`${styles.subtitle} ${styles.sweep}`} />
          </div>

          <div className={styles.mediaRow}>
            <div className={`${styles.panel} ${styles.sweep}`}>
              <div className={styles.content}>
                <Line className={styles.lineLong} />
                <Line className={styles.lineMedium} />
                <Line className={styles.lineShort} />
                <div className={styles.chipRow}>
                  <div className={`${styles.chip} ${styles.sweep}`} />
                  <div className={`${styles.chip} ${styles.sweep}`} />
                  <div className={`${styles.chip} ${styles.sweep}`} />
                </div>
                <div className={`${styles.input} ${styles.sweep}`} />
                <div className={`${styles.input} ${styles.sweep}`} />
                <div className={`${styles.textarea} ${styles.sweep}`} />
              </div>
            </div>
            <div className={`${styles.panel} ${styles.sweep}`}>
              <div className={styles.content}>
                <div className={`${styles.avatar} ${styles.sweep}`} />
                <Line className={styles.lineLong} />
                <Line className={styles.lineMedium} />
                <Line className={styles.lineShort} />
                <Line className={styles.lineLong} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.shell}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={`${styles.kicker} ${styles.sweep}`} />
          <div className={`${styles.title} ${styles.sweep}`} />
          <div className={`${styles.subtitle} ${styles.sweep}`} />
        </div>
        <div className={styles.stack}>
          <Card>
            <div className={styles.content}>
              <Line className={styles.lineLong} />
              <Line className={styles.lineMedium} />
              <Line className={styles.lineShort} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
