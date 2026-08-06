import React, { useState } from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, Label, SH, Sec, CtaButton } from "../components/ui";
import { useIsMobile } from "../components/ui";

export function SolutionsSection() {
  const t = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Bị đơ cứng & Ngại ống kính",
      subtitle: "Phong thái đĩnh đạc, tự nhiên như hơi thở",
      pain: "Nhìn chằm chằm vào camera gây áp lực lớn, nói lóng ngóng như 'trả bài', quay đi quay lại hàng chục lần vẫn không tự nhiên. Cứ bấm record là bị khớp.",
      solution: "Góc quay chéo 3/4 giả lập cuộc hội thoại 1-1 kết hợp hành động vật lý tự nhiên (pha trà, lật sách, viết sổ). Cơ thể thả lỏng, giọng nói tự nhiên, toát lên phong thái chuyên gia đĩnh đạc — không cần diễn.",
      leftLabel: "LÊN HÌNH ĐƠ CỨNG",
      leftDesc: "Mắt nhìn chằm chằm trực diện vào camera gây áp lực lớn cho người xem, nói vấp phải quay lại nhiều lần.",
      rightLabel: "ĐĨNH ĐẠC & TỰ NHIÊN",
      rightDesc: "Góc quay chéo 3/4 thoải mái, cơ thể chuyển động theo hành động vật lý tự nhiên, đắp B-roll che lỗi vấp mượt mà.",
      icon: "🎯"
    },
    {
      title: "Vắt óc nghĩ nội dung mỗi ngày",
      subtitle: "AI viết kịch bản 2 cột trong 5 phút",
      pain: "Mất 2-3 tiếng mỗi ngày chỉ để nghĩ xem hôm nay nói gì, viết kịch bản dở dang rồi bỏ hoang kênh vì kiệt sức. Áp lực ý tưởng là lý do số 1 khiến kênh chết yểu.",
      solution: "Ứng dụng Bộ Prompt AI chuyên sâu cho Nhân hiệu. Biến tri thức ngầm trong đầu bạn thành kịch bản 2 cột (Lời thoại + Gợi ý hình ảnh) chuẩn cấu trúc giữ chân người xem — chỉ trong 5 phút.",
      leftLabel: "VẮT ÓC MỖI NGÀY",
      leftDesc: "2-3 tiếng chỉ để nghĩ chủ đề, cặm cụi viết từng câu thoại — kiệt sức rồi bỏ hoang kênh.",
      rightLabel: "AI LO VIỆC VẮT ÓC",
      rightDesc: "Gõ chủ đề vào Prompt — AI xuất ngay kịch bản 2 cột hoàn chỉnh đúng văn phong của bạn trong 5 phút.",
      icon: "⚡"
    },
    {
      title: "Video phẳng lì, thiếu chiều sâu uy tín",
      subtitle: "Setup 1 lần — hình ảnh đắt tiền mãi mãi",
      pain: "Đứng nói suông từ đầu đến cuối trước bức tường trắng hoặc phòng tối, video nhàm chán làm giảm 50% uy tín chuyên môn. Khán giả lướt qua trong 3 giây đầu tiên.",
      solution: "Setup ánh sáng 3 điểm nổi khối cố định bối cảnh (bật máy lên là quay). Phủ B-roll (Bằng chứng thị giác) che triệt để các điểm nói vấp — video mượt mà liên tục, khán giả không thể rời mắt.",
      leftLabel: "PHẲNG LÌ, THIẾU ÁP",
      leftDesc: "Ánh sáng phòng nhợt nhạt, bối cảnh lộn xộn, đứng nói suông không B-roll — trông như quay tạm.",
      rightLabel: "NỔI KHỐI 3D ĐẮT TIỀN",
      rightDesc: "Ánh sáng 3 điểm tạo chiều sâu, B-roll phủ đúng lúc, khung hình nổi khối như Studio chuyên nghiệp.",
      icon: "✨"
    }
  ];

  return (
    <Sec maxWidth={900}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <Label>Điểm Nghẽn Của Bạn</Label>
          <SH>Chọn Đúng Rào Cản Bạn Đang Gặp Phải</SH>
          <p style={{ fontSize: 18, color: "var(--cl-text-muted, #888)", maxWidth: 620, margin: "-18px auto 0", lineHeight: 1.7 }}>
            Không học chung chung. Hệ thống này giải quyết trực tiếp điểm nghẽn cụ thể của người xây kênh Nhân hiệu.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={80}>
        <div style={{
          display: "flex", background: "var(--cl-card2)", border: `1px solid var(--cl-line)`,
          borderRadius: t.cardRadius, padding: 6, marginBottom: 32, gap: 6, flexWrap: "wrap"
        }}>
          {tabs.map((tab, idx) => {
            const active = idx === activeTab;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  flex: "1 1 200px", background: active ? "var(--cl-accent)" : "transparent",
                  color: active ? "var(--cl-accent-text)" : "var(--cl-text-body, #bbb)",
                  border: "none", borderRadius: Math.max(8, t.cardRadius - 6),
                  padding: "14px 18px", fontSize: 15, fontWeight: 700, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  transition: "all 0.2s ease"
                }}
              >
                <span>{tab.icon}</span><span>{tab.title}</span>
              </button>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={140}>
        <div style={{
          background: `linear-gradient(135deg, var(--cl-card), var(--cl-card2))`, border: `1px solid var(--cl-line)`,
          borderRadius: t.cardRadius, padding: "40px 36px", position: "relative"
        }}>
          <p style={{ fontFamily: t.fontMono, fontSize: 12, color: "var(--cl-accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
            GIẢI PHÁP CHI TIẾT
          </p>
          <h3 style={{ fontFamily: t.fontDisplay, fontSize: 26, fontWeight: 700, marginBottom: 20, color: "var(--cl-text-base, #fff)" }}>
            {tabs[activeTab].subtitle}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--cl-danger)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontFamily: t.fontMono }}>
                ⚠ ĐIỂM ĐAU CỦA BẠN:
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: "var(--cl-text-body, #b0b0b0)", margin: 0 }}>
                {tabs[activeTab].pain}
              </p>
            </div>

            <div style={{ borderTop: `1px solid var(--cl-line)`, paddingTop: 20 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--cl-accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontFamily: t.fontMono }}>
                💡 TOA GIẢI PHÁP ĐÓNG GÓI:
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: "var(--cl-text-base, #f0f0f0)", margin: 0 }}>
                {tabs[activeTab].solution}
              </p>
            </div>

            <div style={{
              marginTop: 16, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20, background: "#08080a", border: `1px solid var(--cl-line)`,
              borderRadius: Math.max(8, t.cardRadius - 4), padding: "24px 20px"
            }}>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--cl-danger)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: t.fontMono }}>
                  ✗ {tabs[activeTab].leftLabel}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#666", margin: 0 }}>
                  {tabs[activeTab].leftDesc}
                </p>
              </div>
              <div style={{ borderLeft: `1px solid var(--cl-line)`, paddingLeft: 20 }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--cl-accent)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: t.fontMono }}>
                  ✓ {tabs[activeTab].rightLabel}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--cl-text-body, #aaa)", margin: 0 }}>
                  {tabs[activeTab].rightDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Sec>
  );
}

export function DiscoverySection() {
  const c = useContent();
  const t = useTheme();
  const isMobile = useIsMobile();
  return (
    <Sec maxWidth={900}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <Label>{c.discoveryLabel}</Label>
          <SH typed>{c.discoveryHeading}</SH>
          <p style={{ fontSize: 19, color: "var(--cl-text-muted, #888)", maxWidth: 720, margin: "16px auto 0", lineHeight: 1.75, textWrap: "balance" }}>
            {c.discoverySub}
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {c.discoveryItems.map((item, i) => {
            const isEven = i % 2 === 1;
            const isPlaceholder = item.gif.includes("unsplash.com");
            return (
              <div key={i} style={{
                background: "var(--cl-card)", border: `1px solid var(--cl-line)`,
                borderRadius: t.cardRadius, padding: isMobile ? "24px" : "32px",
                display: "grid", gridTemplateColumns: isMobile ? "1fr" : isEven ? "0.9fr 1.1fr" : "1.1fr 0.9fr",
                gap: isMobile ? "24px" : "40px", alignItems: "center"
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, order: isMobile ? 1 : isEven ? 2 : 1 }}>
                  <div style={{ fontFamily: t.fontMono, fontSize: 12, fontWeight: 700, color: "var(--cl-accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    // NGUYÊN LÝ 0{i + 1}
                  </div>
                  <h4 style={{ fontFamily: t.fontDisplay, fontSize: "clamp(20px, 2.5vw, 24px)", fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.3 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--cl-text-body, #b0b0b0)", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{
                  order: isMobile ? 2 : isEven ? 1 : 2, width: "100%", aspectRatio: "4 / 5",
                  borderRadius: 12, overflow: "hidden", border: `1px solid var(--cl-line)`,
                  position: "relative", background: "var(--cl-card2)", display: "flex",
                  alignItems: "center", justifyContent: "center", cursor: "pointer",
                }} className="discovery-gif-container">
                  <img src={item.gif} alt={item.placeholderLabel} loading="lazy" style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    opacity: isPlaceholder ? 0.28 : 1, filter: isPlaceholder ? "grayscale(100%) contrast(1.1)" : "none",
                    transition: "all 0.4s ease"
                  }} />
                  {isPlaceholder && (
                    <div style={{
                      position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 30%, rgba(7,9,14,0.75) 100%)",
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16, textAlign: "center"
                    }}>
                      <span style={{ fontSize: 24, marginBottom: 8, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}>🎬</span>
                      <span style={{
                        fontFamily: t.fontMono, fontSize: 12, fontWeight: 700, color: "var(--cl-accent)", letterSpacing: "0.05em",
                        background: "rgba(0,240,255,0.08)", border: `1px solid rgba(0,240,255,0.2)`, padding: "8px 14px",
                        borderRadius: 20, backdropFilter: "blur(4px)", textTransform: "uppercase"
                      }}>
                        {item.placeholderLabel}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </Sec>
  );
}

export function SolutionSection() {
  const c = useContent();
  const t = useTheme();
  return (
    <Sec maxWidth={800}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <Label>{c.solutionLabel}</Label>
          <SH typed>{c.solutionHeading}</SH>
          <p style={{ fontSize: 19, color: "var(--cl-text-muted, #888)", maxWidth: 720, margin: "16px auto 0", lineHeight: 1.75, textWrap: "balance" }}>
            {c.solutionSub}
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <div style={{
          background: `linear-gradient(135deg, var(--cl-card), var(--cl-card2))`, border: `1px solid var(--cl-line)`,
          borderRadius: t.cardRadius, padding: "40px", display: "flex", flexDirection: "column", gap: 20
        }}>
          {c.solutionItems.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <span style={{ color: "var(--cl-accent)", fontSize: 24, lineHeight: 1 }}>✓</span>
              <p style={{ fontSize: 19, color: "#fff", lineHeight: 1.6, margin: 0 }}>{item}</p>
            </div>
          ))}
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <CtaButton label="Nâng Cấp Gu Hình Ảnh Ngay" />
          </div>
        </div>
      </FadeIn>
    </Sec>
  );
}
