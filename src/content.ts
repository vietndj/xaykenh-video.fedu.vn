import { createContext, useContext, createElement } from "react";
import type { ReactNode } from "react";

export interface BlocksMeta {
  order: string[];
  hidden: string[];
  media: Record<string, any[]>;
  custom: Record<string, { title: string; body: string }>;
}

export interface SkillCard {
  n: string;
  title: string;
  desc: string;
  warn?: string;
  gif?: string;
  youtubeId?: string;
  aspectRatio?: string;
}
export interface Stage { n: string; title: string; sub?: string; desc?: string; gif?: string }
export interface ValueLine { label: string; price: string }

export interface PageContent {
  _v?: number;
  price: string;
  value: string;

  // XayKenh dynamic checkout vars
  transferPrefix?: string;
  checkoutTitle?: string;
  checkoutFeatures?: string[];
  checkoutFaqs?: { q: string; a: string }[];
  checkoutTestimonials?: { name: string; role: string; text: string }[];

  heroBadge: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroAccentLine: string;
  heroSub: string;
  heroCta: string;
  heroSubPrice?: string;
  heroVideoYoutubeId?: string;
  heroPoem?: string[];

  painLabel: string;
  painHeading: string;
  painQuote: string;
  painSub: string;
  pains: string[];
  painConclusion?: string;

  // ── Attention ──
  attentionLabel: string;
  attentionHeading: string;
  attentionPara: string;
  attentionItems: { icon: string; title: string; desc: string }[];

  // ── Rule 7-11-4 ──
  ruleLabel: string;
  ruleHeading: string;
  rulePara: string;
  ruleItems: { fail: string; why: string }[];
  ruleConclusion: string;

  cycleLabel: string;
  cycleHeading: string;
  cyclePara: string;
  cycleItems: { fail: string; why: string }[];
  
  discoveryLabel: string;
  discoveryHeading: string;
  discoverySub: string;
  discoveryItems: { title: string; desc: string; gif?: string; placeholderLabel?: string }[];

  solutionLabel: string;
  solutionHeading: string;
  solutionSub: string;
  solutionItems: string[];

  skillsLabel: string;
  skillsHeading: string;
  skillCards: SkillCard[];

  midCtaHeading: string;
  midCtaSub: string;
  midCtaBtn: string;

  baLabel: string;
  baHeading: string;
  baSub: string;
  baBeforeMedia?: string;
  baAfterMedia?: string;
  beforeLabel: string;
  afterLabel: string;
  beforeItems: string[];
  afterItems: string[];

  roadmapLabel: string;
  roadmapHeading: string;
  roadmapPreviewHeading?: string;
  roadmapPreviewDesc?: string;
  roadmapIframeUrl?: string;
  roadmapChaptersHeading?: string;
  stages: Stage[];

  instructorLabel: string;
  instructorHeading: string;
  instructorInitials: string;
  instructorName: string;
  instructorTitle: string;
  instructorBio: string[];
  instructorInsight?: string;

  urgencyBar: string;
  ctaLabel: string;
  ctaHeading: string;
  ctaSub: string;
  countdownLabel: string;
  valueStackTitle: string;
  valueStack: ValueLine[];
  guarantee: string;

  footerBrand: string;
  footerDot: string;
  footerTagline: string;
  footerLinks: string[];
  footerCopyright?: string;
  bonusLabel: string;
  bonusHeading: string;
  bonusSub: string;
  bonusItems: { id: string; title: string; desc: string }[];

  blocksMeta: BlocksMeta;
}

const CONTENT_SCHEMA_VERSION = 7;

export const DEFAULT_CONTENT: PageContent = {
  _v: CONTENT_SCHEMA_VERSION,
  price: "599.000",
  value: "5.000.000",

  transferPrefix: "XAYKENH",
  checkoutTitle: "Quay Dựng Chuyển Đổi:<br />Kiến tạo niềm tin từ sự mượt mà thị giác",
  checkoutFeatures: [
    "Quy trình xây kênh Tiktok/Reels chuẩn tệp Chuyên gia",
    "Trợ lý AI viết kịch bản hàng loạt, nhường việc vắt óc cho AI",
    "Setup không gian quay tĩnh 1 lần dùng mãi mãi",
    "Kỹ thuật vũ đạo ống kính & tàng hình vết cắt",
    "Kho 50+ âm thanh điện ảnh (SFX) bốc nhất",
    "Kho Nhạc Nền MasterClass Độc Bản sạch bản quyền"
  ],

  // ── Hero ──
  heroBadge: "HỆ THỐNG XÂY KÊNH CHUYÊN GIA",
  heroHeadline1: "Quay Dựng Chuyển Đổi.",
  heroHeadline2: "Kiến tạo niềm tin từ\nsự mượt mà thị giác.",
  heroPoem: [
    "Không còn gượng gạo, đơ cứng,",
    "Cơ thể hát cùng ngôn từ, đĩnh đạc tự nhiên."
  ],
  heroAccentLine: "Video ngắn bản chất là một Slide Thuyết trình ở cấp độ động. Sự mượt mà của khung hình chính là ngôn ngữ chốt sale quyền lực nhất.",
  heroSub: "Hệ thống sản xuất nội dung tự động giúp bạn xóa bỏ bệnh \"đơ cứng\" trước camera. Biến mỗi video thành một điểm chạm êm ái, bẻ gãy rào cản phòng thủ và kiến tạo niềm tin tuyệt đối từ khách hàng.",
  heroCta: "KIẾN TẠO NIỀM TIN NGAY HÔM NAY",
  heroVideoYoutubeId: "CaDZiACYrV8",
  heroSubPrice: "(Hệ thống đóng gói hoàn chỉnh. Học trực tuyến 100%)",

  // ── Pain (Nỗi đau) ──
  painLabel: "SỰ THẬT TÀN NHẪN",
  painHeading: "Khách hàng không mua vì họ \"phòng thủ\", không phải vì sản phẩm tệ.",
  painQuote: "Khi bạn giỏi chuyên môn nhưng lên hình lại lóng ngóng, người xem sẽ lập tức nghi ngờ năng lực thực sự của bạn. Sự ma sát thị giác đã giết chết niềm tin.",
  painSub: "Ba triệu chứng khiến uy tín chuyên gia của bạn tụt dốc thảm hại trên video:",
  pains: [
    "❌ Lệch pha nhịp điệu: Bật máy lên là đơ cứng, gượng gạo. Cảm giác như đang \"trả bài\" khiến não bộ người xem lập tức phòng thủ.",
    "❌ Sự mù lòa tĩnh lặng: Góc máy đứng im một chỗ, làm não bộ mệt mỏi, sinh ra \"ma sát thị giác\" khiến họ lập tức lướt qua.",
    "❌ Bản slide vô hồn: Đứng nói suông từ đầu đến cuối mà không có Bằng chứng thị giác (B-roll), khiến lời nói trở nên sáo rỗng."
  ],

  // ── Attention ──
  attentionLabel: "BA CÁCH GÂY CHÚ Ý PHỔ BIẾN NHẤT",
  attentionHeading: "Ba thứ khiến não bộ không thể không nhìn",
  attentionPara: "Trong cuộc sống hay trên video, não người phản ứng y hệt nhau. Và ai làm nội dung cũng biết ba thứ này.",
  attentionItems: [
    { icon: "✦", title: "Nội dung gợi cảm", desc: "Gặp người thu hút ngoài phố, mắt tự quay sang — nhưng không ai dừng lại hỏi ‘bạn dạy gì vậy?’" },
    { icon: "✦", title: "Thông tin đe dọa", desc: "Tin cảnh báo kéo view rất mạnh — nhưng người xem đang phòng thủ, không phải tin tưởng." },
    { icon: "✦", title: "Xuất hiện kỳ lạ", desc: "Làm lố để kéo view — họ sẽ nhớ cái lố lăng, nhưng không nhớ chuyên môn của bạn là gì." }
  ],

  // ── Rule 7-11-4 ──
  ruleLabel: "LUẬT CHƠI TIẾP THỊ SỐ",
  ruleHeading: "Quy tắc 7-11-4: Vì sao video quyết định sự sống còn?",
  rulePara: "Một người lạ chỉ xuống tiền mua hàng khi họ đã tích lũy đủ 7 tiếng xem nội dung, qua 11 lần gặp trên 4 nền tảng.",
  ruleItems: [
    { fail: "Niềm tin", why: "Video chính là cầu nối. Nếu video sượng, họ sẽ rời đi trước cả khi chạm mốc 7 tiếng." },
    { fail: "Tự động hóa", why: "Video làm việc trên 4 nền tảng cùng lúc, cày view và lấy niềm tin cả khi bạn đang ngủ." }
  ],
  ruleConclusion: "Khán giả sẽ không bao giờ kiên nhẫn ngồi xem một chuyên gia gượng gạo suốt 7 tiếng. Sự mượt mà thị giác chính là chìa khóa.",

  // ── Cycle ──
  cycleLabel: "VÒNG LẶP THỬ SAI",
  cycleHeading: "Sự mượt mà không sinh ra từ bộ lọc (filter) của phần mềm.",
  cyclePara: "Nhiều người nghĩ muốn video \"đắt tiền\" thì phải mua điện thoại đời mới nhất, hoặc tải các app có kỹ xảo đồ họa phức tạp.",
  cycleItems: [
    { fail: "Ranh giới Chuyên gia", why: "Sự khác biệt nằm ở Tư duy Không gian và sự tự nhiên. Người chuyên nghiệp biết cách mượn chính những chuyển động vật lý thật để kiến tạo niềm tin." }
  ],

  // ── Discovery ──
  discoveryLabel: "CÔNG THỨC BÍ MẬT",
  discoveryHeading: "Lộ trình thao túng tâm lý: Từ Ánh nhìn đến Chuyển đổi",
  discoverySub: "Sự mượt mà thị giác không đến từ thiết bị, nó đến từ việc làm chủ quy luật tâm lý của người xem:",
  discoveryItems: [
    {
      title: "Khung hình nổi khối",
      desc: "Đánh sáng 3 điểm tôn nét đĩnh đạc. Setup không gian tĩnh một lần dùng mãi mãi, không cần loay hoay mỗi ngày.",
      gif: "/gifs/lighting-art.gif",
      placeholderLabel: "Ánh sáng"
    },
    {
      title: "Vũ đạo ống kính",
      desc: "Sử dụng góc chéo 3/4 giả lập hội thoại tự nhiên. Xóa bỏ cảm giác gượng gạo như đang bị thẩm vấn trước máy quay.",
      gif: "/gifs/spatial-direction.gif",
      placeholderLabel: "Góc quay"
    },
    {
      title: "Cắt ghép tàng hình",
      desc: "Mượn chuyển động vật lý để giấu nhẹm vết cắt. Trám B-roll vào những lúc nói vấp để video luôn mượt mà.",
      gif: "/gifs/mechanical-cut.gif",
      placeholderLabel: "Tàng hình"
    }
  ],

  // ── Solution ──
  solutionLabel: "HỆ THỐNG NHÀN HẠ",
  solutionHeading: "Giải phóng bản thân, nhường việc vắt óc cho AI.",
  solutionSub: "Để trở thành cỗ máy nhân bản nhân hiệu, bạn cần ứng dụng 4 trụ cột kiến trúc thị giác này:",
  solutionItems: [
    "❌ Kiệt sức vì viết kịch bản ➞ ✅ Trợ lý AI lo liệu: Lên kịch bản 2 cột tự động.",
    "❌ Gượng gạo trước ống kính ➞ ✅ Góc máy 3/4 tự nhiên: Giao tiếp đĩnh đạc như một chuyên gia.",
    "❌ Ánh sáng phẳng lì, tối tăm ➞ ✅ Setup 1 lần dùng mãi: Không gian nổi khối 3D đắt tiền.",
    "❌ Video buồn ngủ, đứt đoạn ➞ ✅ Bằng chứng thép tàng hình: Dùng B-roll che vết cắt êm ái."
  ],

  skillsLabel: "TRỤ CỘT KIẾN TẠO SỰ MƯỢT MÀ",
  skillsHeading: "Hệ thống hóa toàn bộ chuỗi tâm lý hành vi chỉ với 4 nguyên lý:",
  skillCards: [
    { n: "01", title: "Cơ thể hát cùng ngôn từ", desc: "Loại bỏ bệnh đơ cứng bằng cách đồng bộ nhịp độ cơ thể và giọng nói. Biến video thành cuộc trò chuyện sâu sắc.", gif: "/gifs/invisible-cut.gif" },
    { n: "02", title: "Setup Không Gian Tĩnh", desc: "Chỉ cần 2 chiếc đèn đặt đúng góc. Setup 1 lần duy nhất, từ nay chỉ việc bật máy là quay. Không còn nỗi lo ánh sáng tệ.", gif: "/gifs/lighting-3d.gif" },
    { n: "03", title: "Điểm Nối Tàng Hình", desc: "Vứt bỏ hiệu ứng lật trang sến súa. Dùng chuyển động cơ học để nối cảnh, khiến video mượt mà không có điểm chết.", gif: "/gifs/shot-sizes.gif" },
    { n: "04", title: "Bằng chứng thị giác (B-roll)", desc: "Không chỉ che vết cắt lúc nói vấp, B-roll cung cấp bằng chứng thép để bẻ gãy phòng thủ của khách hàng.", youtubeId: "Ew-yWd0riEQ", aspectRatio: "9 / 16" }
  ],

  // ── Mid CTA ──
  midCtaHeading: "Biến mỗi video thành cỗ máy chuyển đổi tự động.",
  midCtaSub: "Chỉ với 599.000 VNĐ, bạn sẽ sở hữu kiến trúc thị giác đắt tiền trọn đời.",
  midCtaBtn: "SỞ HỮU HỆ THỐNG NGAY",

  // ── Before & After ──
  baLabel: "SỰ KHÁC BIỆT KHI CÓ TƯ DUY ĐÚNG",
  baHeading: "Sự khác biệt khi nắm trong tay luật chơi hình ảnh:",
  baSub: "",
  baBeforeMedia: "",
  baAfterMedia: "",
  beforeLabel: "Cách cũ",
  afterLabel: "Hệ thống mới",
  beforeItems: [
    "Lóng ngóng, gượng gạo như trả bài",
    "Kiệt sức vì phải viết kịch bản hàng ngày",
    "Ánh sáng phẳng lì, nhìn không uy tín",
    "Nói vấp phải quay lại từ đầu",
    "Video buồn ngủ, tỷ lệ thoát trang cao"
  ],
  afterItems: [
    "Phong thái đĩnh đạc, tự nhiên như hơi thở",
    "Nhường việc vắt óc viết kịch bản cho AI",
    "Khung hình nổi khối 3D đắt tiền (setup 1 lần)",
    "B-roll che vết cắt êm ái, tàng hình",
    "Khán giả thư giãn, dễ dàng kết nối và tin tưởng"
  ],

  // ── Roadmap ──
  roadmapLabel: "LỘ TRÌNH THỰC CHIẾN",
  roadmapHeading: "Lộ trình kiến tạo Cỗ máy nhân hiệu",
  roadmapPreviewHeading: "Trải nghiệm trực quan một bài học mẫu",
  roadmapPreviewDesc: "Video thực tế nằm trong chương trình học của bạn — đi thẳng vào bản chất và dễ áp dụng.",
  roadmapIframeUrl: "https://www.youtube.com/embed/qi-R_AIWjZM?rel=0&modestbranding=1",
  roadmapChaptersHeading: "Hệ thống hóa toàn bộ tư duy làm video của bạn:",
  stages: [
    { n: "[1]", title: "Giải phóng ý tưởng", desc: "Sử dụng Trợ lý AI để tự động hóa khâu kịch bản 2 cột. Nhẹ đầu, tập trung vào chuyên môn." },
    { n: "[2]", title: "Kiến trúc Không gian", desc: "Setup ánh sáng 3 điểm và góc máy 3/4. Quay bao nhiêu video cũng chỉ cần ngồi vào là bấm máy." },
    { n: "[3]", title: "Vũ đạo Ống kính", desc: "Học cách luân chuyển cỡ cảnh và dùng tay tạo điểm nối tàng hình. Xóa bỏ ma sát thị giác." },
    { n: "[4]", title: "Bằng chứng thép", desc: "Phủ B-roll đúng lúc đúng chỗ để che vết cắt lúc nói vấp, tạo ra sự mượt mà thuyết phục tuyệt đối." }
  ],

  // ── Instructor ──
  instructorLabel: "NGƯỜI ĐỒNG HÀNH",
  instructorHeading: "Quay phim có điểm dừng\ndựng phim có điểm chạm",
  instructorInitials: "NĐV",
  instructorName: "Nguyễn Đức Việt",
  instructorTitle: "Kỹ sư Công nghệ Phần mềm (ĐH Bách Khoa). 15 năm Giảng viên Mỹ thuật đa phương tiện tại FPT Arena.",
  instructorBio: [
    "Mình không dạy bạn các mẹo vặt lắt nhắt mau quên. Mình sẽ hệ thống hóa các nguyên lý hình ảnh thành những bước thực hành đơn giản nhất, để bạn tận hưởng niềm vui khi tạo ra một thước phim đàng hoàng và lôi cuốn mọi ánh nhìn."
  ],

  // ── Bonus ──
  bonusLabel: "QUÀ TẶNG ĐI KÈM KHÔNG THỂ BỎ QUA",
  bonusHeading: "Tặng kèm kho \"đồ chơi\" nâng tầm khung hình trị giá 1.250.000đ",
  bonusSub: "Chỉ dành cho những ai đăng ký trong đợt này — không bán riêng lẻ",
  bonusItems: [
    { id: "01", title: "Kho 50+ Âm Thanh Điện Ảnh (SFX)", desc: "Nếu bạn chỉ đơn giản dùng tiếng Whoosh, Pop, Glitch, Impact có sẵn trong CapCut thì tiếng sẽ ko có lực, nó bẹt và ko sâu, đại trà. Nếu muốn xịn thì cần có nhiều lớp âm thanh chồng nhau. Trong tài nguyên này mình đã mua và tổng hợp lại để bạn nâng cấp cho âm thanh video. Vì là hiệu ứng âm thanh (SFX) nên bạn dùng thoải mái không lo dính gậy bản quyền nhé. Dán vào đúng điểm cắt là khung hình lên cấp ngay." },
    { id: "02", title: "Kho Nhạc Nền \"MasterClass\" Độc Bản", desc: "Thư viện nhạc nền đặc quyền đã lọc sạch bản quyền, học viên chỉ cần tải về dùng ngay và được cập nhật mới thường xuyên." },
    { id: "03", title: "Sơ đồ Đánh Sáng 3 Điểm (Cho Phòng Nhỏ)", desc: "Cheat-sheet đặt góc đèn cho 5 kiểu phòng nhà ống điển hình. Tạo chiều sâu 3D ngay lập tức chỉ với 2 chiếc đèn giá rẻ." },
    { id: "04", title: "Bộ Template CapCut Chuyển Cảnh", desc: "Chỉ cần thả source quay vào là có ngay video nhịp điệu cực cuốn. Tiết kiệm 80% thời gian dựng." },
    { id: "05", title: "Checklist 15 Điểm QC Trước Khi Đăng", desc: "Bộ lọc kỹ thuật (Bitrate, tỷ lệ khung hình, chống rung) để đảm bảo video up lên luôn sắc nét, không bị nền tảng bóp tương tác." }
  ],

  // ── CTA ──
  urgencyBar: "⚠ ĐẶC QUYỀN ĐĂNG KÝ HÔM NAY — CHỈ CÒN 599.000 VNĐ",
  ctaLabel: "// BƯỚC CUỐI CÙNG",
  ctaHeading: "Làm chủ tư duy quay dựng mượt mà ngay hôm nay.",
  ctaSub: "Trang bị hệ thống kiến trúc thị giác đắt tiền cho những thước phim của bạn. Từ video tiếp theo, sự gượng gạo sẽ hoàn toàn biến mất.",
  countdownLabel: "⏳ Ưu đãi kết thúc sau:",
  valueStackTitle: "TỔNG GIÁ TRỊ BẠN NHẬN ĐƯỢC:",
  valueStack: [
    { label: "Hệ thống Quay Dựng Chuyển Đổi", price: "3.750.000 VNĐ" },
    { label: "Bộ 5 Quà Tặng Độc Quyền", price: "1.250.000 VNĐ" }
  ],
  guarantee: "Bảo hành chất lượng: Xem bài đầu tiên có thể tự tin áp dụng vào quay kênh được luôn.",

  // ── Footer ──
  footerBrand: "FEDU",
  footerDot: ".",
  footerTagline: "Quay Dựng Chuyển Đổi: Kiến tạo niềm tin từ sự mượt mà thị giác.",
  footerLinks: [],
  footerCopyright: "COPYRIGHT 2026 | NGUYỄN ĐỨC VIỆT",

  blocksMeta: {
    order: ["hero", "pain", "attention", "rule", "cycle", "discovery", "solution", "skills", "midCta", "before-after", "roadmap", "instructor", "bonus", "cta", "footer"],
    hidden: ["attention", "rule", "cycle"],
    media: {},
    custom: {},
  },
};

export const ContentCtx = createContext<PageContent>(DEFAULT_CONTENT);

export function useContent(): PageContent {
  return useContext(ContentCtx);
}

export function ContentProvider({ children }: { children: ReactNode }) {
  return createElement(ContentCtx.Provider, { value: DEFAULT_CONTENT }, children);
}
