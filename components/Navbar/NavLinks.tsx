"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLinks.module.css";

interface NavLinkItem {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}

const navItems: NavLinkItem[] = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  {
    label: "الخدمات",
    href: "/services",
    dropdownItems: [
      { label: "الخدمات النقابية", href: "/services/syndicate" },
      { label: "مشروع الرعاية الصحية", href: "/services/healthcare" },
      { label: "القروض والإعانات", href: "/services/loans" },
      { label: "الرحلات والمصايف", href: "/services/trips" },
    ],
  },
  {
    label: "إدارات النقابة",
    href: "/departments",
    dropdownItems: [
      { label: "إدارة الاشتراكات", href: "/departments/subscriptions" },
      { label: "إدارة العلاقات العامة", href: "/departments/public-relations" },
      { label: "إدارة التدريب والتوظيف", href: "/departments/training" },
      { label: "الإدارة الهندسية", href: "/departments/engineering" },
    ],
  },
  { label: "اللجان", href: "/committees" },
  { label: "آخر الأخبار", href: "/news" },
  { label: "الفعاليات", href: "/events" },
  { label: "تواصل معنا", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();
  
  // Client state
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  
  const desktopNavRef = useRef<HTMLUListElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);

  // Close menus on page transition
  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMobileToggle = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const handleMobileClose = () => {
    setIsMobileOpen(false);
  };

  const handleMobileAccordionToggle = (index: number) => {
    setMobileExpanded((prev) => (prev === index ? null : index));
  };

  // Determine if a link is active.
  // Special case: If pathname is "/" and the link is "/"
  // Otherwise, match based on starting pathname or exact route
  const isLinkActive = (item: NavLinkItem) => {
    if (item.href === "/") {
      return pathname === "/";
    }
    // Match "/news" as active for latest news
    return pathname.startsWith(item.href);
  };

  return (
    <div className={styles.navContainer}>
      {/* Desktop Navigation Links */}
      <ul className={styles.desktopNav} ref={desktopNavRef}>
        {navItems.map((item, index) => {
          const hasDropdown = !!item.dropdownItems;
          const isActive = isLinkActive(item);
          const isOpen = activeDropdown === index;

          return (
            <li
              key={index}
              className={styles.navItem}
              onMouseEnter={() => hasDropdown && setActiveDropdown(index)}
              onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
            >
              {hasDropdown ? (
                <button
                  className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setActiveDropdown(isOpen ? null : index)}
                  type="button"
                >
                  {item.label}
                  <svg
                    className={`${styles.chevron} ${isOpen ? styles.openChevron : ""}`}
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown Menu */}
              {hasDropdown && isOpen && (
                <div className={styles.dropdown} role="menu">
                  {item.dropdownItems?.map((subItem, sIdx) => (
                    <Link
                      key={sIdx}
                      href={subItem.href}
                      className={styles.dropdownItem}
                      role="menuitem"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Mobile Toggle Burger Button */}
      <button
        className={styles.burgerBtn}
        onClick={handleMobileToggle}
        aria-label="افتح القائمة الجانبية"
        aria-expanded={isMobileOpen}
        type="button"
      >
        <svg className={styles.burgerIcon} viewBox="0 0 24 24">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className={styles.overlay} onClick={handleMobileClose} />
      )}

      {/* Mobile Menu Drawer */}
      {isMobileOpen && (
        <div
          className={styles.mobileDrawer}
          ref={mobileDrawerRef}
          role="dialog"
          aria-label="قائمة الملاحة للهواتف"
        >
          <div className={styles.drawerHeader}>
            <span className={styles.drawerTitle}>نقابة المهندسين بالقاهرة</span>
            <button
              className={styles.closeBtn}
              onClick={handleMobileClose}
              aria-label="إغلاق القائمة"
              type="button"
            >
              <svg className={styles.closeIcon} viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <ul className={styles.mobileNav}>
            {navItems.map((item, index) => {
              const hasDropdown = !!item.dropdownItems;
              const isActive = isLinkActive(item);
              const isExpanded = mobileExpanded === index;

              return (
                <li key={index} className={styles.mobileItem}>
                  {hasDropdown ? (
                    <>
                      <button
                        className={styles.mobileLink}
                        onClick={() => handleMobileAccordionToggle(index)}
                        aria-expanded={isExpanded}
                        type="button"
                      >
                        {item.label}
                        <svg
                          className={`${styles.chevron} ${isExpanded ? styles.openChevron : ""}`}
                          viewBox="0 0 24 24"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      {isExpanded && (
                        <div className={styles.mobileAccordion}>
                          {item.dropdownItems?.map((subItem, sIdx) => (
                            <Link
                              key={sIdx}
                              href={subItem.href}
                              className={styles.mobileSubLink}
                              onClick={handleMobileClose}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${styles.mobileLink} ${isActive ? styles.activeLink : ""}`}
                      onClick={handleMobileClose}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
