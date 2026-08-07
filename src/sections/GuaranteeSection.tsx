import { useTheme } from "../theme";
import { useContent } from "../content";
import { FadeIn, Label, SH } from "../components/ui";

export function GuaranteeSection() {
  const t = useTheme();
  const c = useContent();

  return (
    <section
      style={{
        padding: "100px 24px",
        background: t.card2,
        position: "relative",
        borderTop: `1px solid ${t.line}`,
        borderBottom: `1px solid ${t.line}`,
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <FadeIn>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: `${t.accent}1A`, // 10% opacity
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              color: t.accent,
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
            <Label>CAM KẾT CHẤT LƯỢNG</Label>
            <SH>Cam kết của chúng tôi</SH>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: t.fontBody,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              color: t.textBase,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Xem bài đầu tiên, nếu không áp dụng được ngay vào kênh của bạn — liên hệ để được hỗ trợ 1-1 miễn phí cho đến khi ra kết quả.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            style={{
              fontFamily: t.fontAccent,
              fontSize: "clamp(16px, 2vw, 20px)",
              color: t.textMuted,
              fontStyle: "italic",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            "Nếu chúng tôi không tự tin hệ thống này hoạt động, chúng tôi đã không đưa ra cam kết này."
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div style={{ marginTop: "16px" }}>
            <a
              href="#dang-ky"
              style={{
                display: "inline-block",
                background: t.accent,
                color: t.accentText,
                padding: `${t.btnPaddingY}px ${t.btnPaddingX}px`,
                borderRadius: `${t.btnRadius}px`,
                fontFamily: t.fontBody,
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "all 0.2s ease",
                boxShadow: t.accentGlow ? `0 0 20px ${t.accent}4D` : "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                if (t.accentGlow) {
                  e.currentTarget.style.boxShadow = `0 0 30px ${t.accent}80`;
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                if (t.accentGlow) {
                  e.currentTarget.style.boxShadow = `0 0 20px ${t.accent}4D`;
                }
              }}
            >
              ĐĂNG KÝ NGAY — {c.price} VNĐ
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
