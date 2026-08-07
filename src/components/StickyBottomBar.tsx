import { useEffect, useState } from "react";
import { useTheme } from "../theme";
import { useContent } from "../content";

export function StickyBottomBar() {
  const t = useTheme();
  const c = useContent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolling past viewport height (approximate end of hero)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "rgba(10, 9, 8, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: `1px solid ${t.accent}4D`, // 4D is ~30% opacity
        transform: isVisible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        height: "64px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: t.fontDisplay,
            fontSize: "20px",
            fontWeight: 700,
            color: t.textBase,
            letterSpacing: "0.05em",
          }}
        >
          {c.footerBrand || "FEDU"}<span style={{ color: t.accent }}>{c.footerDot || "."}</span>
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              fontFamily: t.fontMono,
              color: t.accent,
              fontSize: "16px",
              fontWeight: 600,
              display: "none",
            }}
            // Use a media query approach via style trick or just hide on mobile via className if we used CSS
            className="hide-on-mobile"
          >
            {c.price} VNĐ
          </div>
          
          <a
            href="#dang-ky"
            style={{
              background: t.accent,
              color: t.accentText,
              padding: "10px 24px",
              borderRadius: `${t.btnRadius}px`,
              fontFamily: t.fontBody,
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "transform 0.2s ease, opacity 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ĐĂNG KÝ NGAY
          </a>
        </div>
      </div>
      
      <style>{`
        @media (min-width: 640px) {
          .hide-on-mobile {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
