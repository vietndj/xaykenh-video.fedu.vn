import React from 'react';
import { useTheme } from '../theme';
import { useContent } from '../content';
import { FadeIn, Label, SH, CtaButton } from '../components/ui';

export function PriceAnchorSection() {
  const t = useTheme();
  const c = useContent();

  const handleCta = () => {
    const el = document.getElementById("checkout");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        backgroundColor: t.bg,
        padding: "80px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 1000, width: "100%" }}>
        <FadeIn delay={0.1}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Label>THỰC TẾ CHI PHÍ</Label>
            <SH>Trước khi nhìn con số, hãy tính thật.</SH>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {/* Option 1 */}
          <FadeIn delay={0.2} style={{ height: "100%" }}>
            <div
              style={{
                backgroundColor: t.card,
                borderRadius: t.cardRadius,
                padding: 32,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: `1px solid ${t.line}`,
                opacity: 0.8,
              }}
            >
              <h3
                style={{
                  fontFamily: t.fontDisplay,
                  fontSize: "1.5rem",
                  color: "white",
                  margin: "0 0 8px 0",
                  opacity: 0.8,
                }}
              >
                Tự mày mò
              </h3>
              <div
                style={{
                  fontFamily: t.fontMono,
                  fontSize: "1.2rem",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 24,
                }}
              >
                3-6 tháng thử sai
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, flexGrow: 1 }}>
                {[
                  "Tự tìm kiếm tài liệu rải rác",
                  "Quay rồi xoá, xoá rồi quay",
                  "Không ai feedback, không biết sai ở đâu",
                  "Kênh bỏ hoang vì mất động lực",
                ].map((text, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: 16,
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: t.fontBody,
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: t.danger, marginRight: 12, flexShrink: 0 }}>×</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Option 2 */}
          <FadeIn delay={0.3} style={{ height: "100%" }}>
            <div
              style={{
                backgroundColor: t.card,
                borderRadius: t.cardRadius,
                padding: 32,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: `1px solid ${t.line}`,
                opacity: 0.8,
              }}
            >
              <h3
                style={{
                  fontFamily: t.fontDisplay,
                  fontSize: "1.5rem",
                  color: "white",
                  margin: "0 0 8px 0",
                  opacity: 0.8,
                }}
              >
                Thuê team media
              </h3>
              <div
                style={{
                  fontFamily: t.fontMono,
                  fontSize: "1.2rem",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 24,
                }}
              >
                5-10 triệu đ/tháng
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, flexGrow: 1 }}>
                {[
                  "Video đẹp nhưng không phải giọng bạn",
                  "Phụ thuộc team, không tự chủ được",
                  "Chi phí tháng nào cũng chạy",
                  "Không xây được thương hiệu cá nhân",
                ].map((text, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: 16,
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: t.fontBody,
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: t.danger, marginRight: 12, flexShrink: 0 }}>×</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Option 3 */}
          <FadeIn delay={0.4} style={{ height: "100%" }}>
            <div
              style={{
                backgroundColor: t.card,
                borderRadius: t.cardRadius,
                padding: 32,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: `2px solid ${t.accent}`,
                position: "relative",
                transform: "scale(1.02)",
                boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px ${t.accent}33`,
                zIndex: 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: t.accent,
                  color: t.accentText,
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  letterSpacing: 1,
                  whiteSpace: "nowrap",
                }}
              >
                ★ LỰA CHỌN TỐT NHẤT
              </div>
              
              <h3
                style={{
                  fontFamily: t.fontDisplay,
                  fontSize: "1.75rem",
                  color: "white",
                  margin: "12px 0 8px 0",
                }}
              >
                Hệ thống Xây Kênh & AI
              </h3>
              <div
                style={{
                  fontFamily: t.fontMono,
                  fontSize: "2rem",
                  color: t.accent,
                  fontWeight: "bold",
                  marginBottom: 24,
                }}
              >
                {c.price} VNĐ
              </div>
              
              <ul style={{ listStyle: "none", padding: 0, margin: 0, flexGrow: 1 }}>
                {[
                  "Hệ thống setup 1 lần, dùng mãi mãi",
                  "AI viết kịch bản 2 cột trong 5 phút",
                  "Xem lại trọn đời — không giới hạn",
                  "Kho quà tặng trị giá 1.250.000đ",
                  "Hoàn vốn từ video đầu tiên",
                ].map((text, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: 16,
                      color: "white",
                      fontFamily: t.fontBody,
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "#4ade80", marginRight: 12, flexShrink: 0 }}>✓</span>
                    {text}
                  </li>
                ))}
              </ul>
              
              <div style={{ marginTop: 24 }}>
                <CtaButton onClick={handleCta} style={{ width: "100%" }}>
                  ĐĂNG KÝ NGAY
                </CtaButton>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div
            style={{
              marginTop: 64,
              textAlign: "center",
              fontStyle: "italic",
              color: t.accent,
              fontFamily: t.fontBody,
              fontSize: "1.2rem",
              lineHeight: 1.6,
              maxWidth: 700,
              margin: "64px auto 0",
            }}
          >
            "Câu hỏi thật sự không phải là {c.price}đ có đáng không. Câu hỏi là: bạn đang mất bao nhiêu mỗi tháng khi tiếp tục trì hoãn?"
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
