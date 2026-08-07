import React from "react";
import { useContent } from "./content";
import { useTheme } from "./theme";
import { ThemeSyncer, Div } from "./components/ui";
import { HeroSection } from "./sections/HeroSection";
import { PainSection } from "./sections/PainSection";
import { TargetAudienceSection } from "./sections/TargetAudienceSection";
import { AttentionSection } from "./sections/AttentionSection";
import { RuleSection } from "./sections/RuleSection";
import { CycleSection } from "./sections/CycleSection";
import { DiscoverySection, SolutionsSection } from "./sections/DiscoverySection";
import { SolutionSection } from "./sections/DiscoverySection";
import { SkillsSection } from "./sections/SkillsSection";
import { MidCtaSection } from "./sections/MidCtaSection";
import { BeforeAfterSection } from "./sections/BeforeAfterSection";
import { RoadmapSection } from "./sections/RoadmapSection";
import { InstructorSection } from "./sections/InstructorSection";
import { TestimonialSection } from "./sections/TestimonialSection";
import { BonusSection } from "./sections/BonusSection";
import { PriceAnchorSection } from "./sections/PriceAnchorSection";
import { CtaSection } from "./sections/CtaSection";
import { GuaranteeSection } from "./sections/GuaranteeSection";
import { StickyBottomBar } from "./components/StickyBottomBar";
import LiveSocialProof from "./LiveSocialProof";
import "./landing.css";

export default function App() {
  const t = useTheme();
  const c = useContent();
  const isHidden = (id: string) => c.blocksMeta?.hidden?.includes(id) ?? false;

  return (
    <div style={{ background: t.bg, color: t.textBase ?? "#f0f0f0", fontFamily: t.fontBody, minHeight: "100vh", overflowX: "hidden" }}>
      <ThemeSyncer />

      {/* 1. HERO */}
      {!isHidden("hero") && <HeroSection />}
      <Div />

      {/* 2. PAIN */}
      {!isHidden("pain") && <PainSection />}
      <Div />

      {/* 3. DÀNH CHO AI */}
      {!isHidden("target-audience") && <TargetAudienceSection />}
      <Div />

      {/* 4. CHÚ Ý & LUẬT CHƠI (Optional/Hidden in default) */}
      {!isHidden("attention") && <AttentionSection />}
      {!isHidden("attention") && <Div />}

      {!isHidden("rule") && <RuleSection />}
      {!isHidden("rule") && <Div />}

      {/* 5. VÒNG LẶP THỬ SAI */}
      {!isHidden("cycle") && <CycleSection />}
      <Div />

      {/* 6. BẢN CHẤT & HỆ THỐNG */}
      {!isHidden("discovery") && <DiscoverySection />}
      <Div />

      {!isHidden("solutions") && <SolutionsSection />}
      <Div />

      {!isHidden("solution") && <SolutionSection />}
      {!isHidden("solution") && <Div />}

      {/* 7. 4 KỸ NĂNG CỐT LÕI */}
      {!isHidden("skills") && <SkillsSection />}
      <Div />

      {/* 8. MID CTA */}
      {!isHidden("midCta") && <MidCtaSection />}
      <Div />

      {/* 9. BEFORE / AFTER */}
      {!isHidden("before-after") && <BeforeAfterSection />}
      <Div />

      {/* 10. LỘ TRÌNH THỰC CHIẾN */}
      {!isHidden("roadmap") && <RoadmapSection />}
      <Div />

      {/* 11. NGƯỜI ĐỒNG HÀNH */}
      {!isHidden("instructor") && <InstructorSection />}
      <Div />

      {/* 12. CẢM NHẬN HỌC VIÊN */}
      {!isHidden("testimonials") && <TestimonialSection />}
      <Div />

      {/* 13. QUÀ TẶNG KÈM */}
      {!isHidden("bonus") && <BonusSection />}
      <Div />

      {/* 14. PRICE ANCHORING (SO SÁNH 3 LỰA CHỌN) */}
      {!isHidden("price-anchor") && <PriceAnchorSection />}
      <Div />

      {/* 15. ĐĂNG KÝ (CTA FORM) */}
      {!isHidden("cta") && <CtaSection />}

      {/* 16. CAM KẾT HOÀN PHÍ / HỖ TRỢ */}
      {!isHidden("guarantee") && <GuaranteeSection />}

      {/* 17. FOOTER */}
      {!isHidden("footer") && (
        <footer className="cl-footer" style={{ borderTop: `1px solid ${t.line}`, fontFamily: t.fontBody }}>
          <div className="cl-footer__brand" style={{ fontFamily: t.fontDisplay }}>
            {c.footerBrand}<span style={{ color: t.accent }}>{c.footerDot}</span>VIDEO
          </div>
          <p className="cl-footer__tagline">{c.footerTagline}</p>
          <div className="cl-footer__links">
            {c.footerLinks.map((link) => (
              <a key={link} href="#" className="cl-footer__link">{link}</a>
            ))}
          </div>
          <p className="cl-footer__copy">{c.footerCopyright}</p>
        </footer>
      )}

      {/* 18. STICKY BOTTOM BAR & SOCIAL PROOF */}
      <StickyBottomBar />
      <LiveSocialProof />
    </div>
  );
}

