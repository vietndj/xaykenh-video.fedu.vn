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
  price: "699.000",
  value: "5.000.000",

  transferPrefix: "XAYKENH",
  checkoutTitle: "Hệ Thống Xây Kênh & Trợ Lý AI:<br />Chấm dứt tự biên tự diễn, lên hình đĩnh đạc",
  checkoutFeatures: [
    "6 buổi đào tạo thực chiến (Video quay sẵn, xem lại mãi mãi)",
    "Trọn bộ Prompt AI viết kịch bản 2 cột — tương thích ChatGPT/Gemini",
    "Hướng dẫn setup góc quay Talking Head đĩnh đạc 1 lần dùng mãi",
    "Kỹ thuật vũ đạo ống kính & tàng hình vết cắt",
    "Kho 50+ âm thanh điện ảnh (SFX) bốc nhất",
    "Kho Nhạc Nền MasterClass Độc Bản sạch bản quyền"
  ],

  // ── Hero ──
  heroBadge: "HỆ THỐNG XÂY KÊNH CHUYÊN GIA",
  heroHeadline1: "Chấm Dứt Sự Bào Mòn.",
  heroHeadline2: "Tự động hóa kịch bản, lên hình\ntự nhiên — xây kênh không kiệt sức.",
  heroPoem: [
    "Không còn vắt óc mỗi ngày,",
    "Cơ thể hát cùng ngôn từ, đĩnh đạc tự nhiên."
  ],
  heroAccentLine: "Tự động hóa khâu kịch bản với Bộ Prompt AI chuyên sâu và làm chủ định dạng quay cố định. Lên hình tự nhiên, đĩnh đạc và duy trì tần suất ra video đều đặn mà không bị vắt kiệt năng lượng.",
  heroSub: "Hệ thống sản xuất nội dung giúp bạn xóa bỏ bệnh \"đơ cứng\" trước camera và giải phóng hoàn toàn gánh nặng kịch bản. Tập trung vào chuyên môn, để hệ thống lo phần còn lại.",
  heroCta: "ĐĂNG KÝ VÀ SỞ HỮU BỘ LỆNH AI NGAY",
  heroVideoYoutubeId: "CaDZiACYrV8",
  heroSubPrice: "(Hệ thống đóng gói hoàn chỉnh. Học trực tuyến 100%)",

  // ── Pain (Nỗi đau) ──
  painLabel: "ĐIỂM NGHẼN CỐT LÕI",
  painHeading: "Bạn rất vững chuyên môn, nhưng cứ bật máy quay lên là bị \"khớp\"?",
  painQuote: "Xây dựng thương hiệu cá nhân cần sự bền bỉ. Nhưng rất nhiều người làm nghề (dịch vụ, đào tạo, review) khởi đầu rất khí thế, rồi nhanh chóng rơi vào bế tắc.",
  painSub: "Bốn lý do khiến người giỏi chuyên môn vẫn thất bại khi xây kênh:",
  pains: [
    "❌ Áp lực ý tưởng: Đi làm về mệt mỏi lại phải ngồi vắt óc nghĩ chủ đề, cặm cụi viết từng câu thoại đến kiệt sức.",
    "❌ Bệnh đơ camera: Cố nhớ từng chữ khiến cơ thể gượng gạo, ánh mắt đờ đẫn, làm mất đi sự tự tin và đĩnh đạc thường ngày.",
    "❌ Sản xuất lắt nhắt: Mỗi ngày hì hục kê bàn, dựng đèn, quay hỏng hàng chục lần chỉ để lấy 1 video ngắn.",
    "❌ Hình ảnh thiếu đồng bộ: Khung hình lộn xộn, setup chắp vá khiến diện mạo thương hiệu trở nên thiếu chỉn chu."
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
  cycleHeading: "Đi tìm lối tắt vô tình làm giảm uy tín của chính bạn.",
  cyclePara: "Để đối phó với việc bí ý tưởng và sợ camera, nhiều người chọn cách:",
  cycleItems: [
    { fail: "Đọc máy nhắc chữ (Teleprompter)", why: "Biến bạn thành một cỗ máy đọc bài vô hồn. Người xem cảm nhận ngay sự thiếu kết nối chân thật — và lập tức mất tin tưởng." },
    { fail: "Cố nhảy múa, diễn hài đu trend", why: "Có thể mang lại lượt xem giải trí, nhưng khách hàng mục tiêu sẽ mất đi sự tôn trọng dành cho một người làm việc nghiêm túc." }
  ],
  cycleConclusion: "Thứ bạn cần không phải là thuộc lòng kịch bản hay diễn hài. Thứ bạn cần là một Hệ thống sản xuất được chuẩn hóa.",

  // ── Discovery ──
  discoveryLabel: "BẢN CHẤT SỰ TỰ NHIÊN",
  discoveryHeading: "Sức hút đến từ sự đồng bộ giữa không gian và hình thể.",
  discoverySub: "Theo tâm lý học thị giác, người xem chỉ tin tưởng khi họ cảm nhận được sự thoải mái của người nói:",
  discoveryItems: [
    {
      title: "Bối cảnh tĩnh (Talking Head)",
      desc: "Thiết lập một góc máy với ánh sáng nổi khối chuẩn Studio. Setup đúng 1 lần duy nhất tại bàn làm việc — dùng cho hàng trăm video về sau, không cần loay hoay kê bàn dựng đèn mỗi ngày.",
      gif: "/gifs/lighting-art.gif",
      placeholderLabel: "Setup 1 lần"
    },
    {
      title: "Cơ thể hát cùng ngôn từ",
      desc: "Giải phóng đôi tay, dùng cử chỉ để minh họa từ khóa. Khi cơ thể bạn tự nhiên, não bộ khán giả sẽ ngay lập tức ghi nhận sự chân thành — xóa bỏ hoàn toàn bệnh đơ cứng trước ống kính.",
      gif: "/gifs/spatial-direction.gif",
      placeholderLabel: "Tự nhiên"
    },
    {
      title: "Bằng chứng thay lời nói (B-roll)",
      desc: "Nhường không gian cho cảnh trám. B-roll vừa giúp bài chia sẻ sinh động, vừa khéo léo che đi những đoạn lỡ miệng nói vấp — video mượt mà như một dòng chảy liên tục.",
      gif: "/gifs/mechanical-cut.gif",
      placeholderLabel: "B-roll"
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

  skillsLabel: "4 KỸ NĂNG CỐT LÕI",
  skillsHeading: "4 Kỹ năng giúp bạn làm chủ ống kính.",
  skillCards: [
    { n: "01", title: "Setup Không Gian Tĩnh", desc: "Định vị diện mạo thương hiệu đàng hoàng. Chỉ cần 2 chiếc đèn đúng góc, setup 1 lần duy nhất — tiết kiệm 80% công sức chuẩn bị cho mỗi video.", gif: "/gifs/lighting-3d.gif" },
    { n: "02", title: "Điều Khiển AI Kịch Bản", desc: "Dùng Prompt chuyên sâu biến ChatGPT/Gemini thành người viết kịch bản cá nhân hóa đúng văn phong của bạn. Gõ chủ đề — nhận kịch bản 2 cột trong 1 phút.", gif: "/gifs/invisible-cut.gif" },
    { n: "03", title: "Vũ Đạo Ống Kính", desc: "Chữa triệt để bệnh đơ camera. Luyện ánh mắt, đôi tay và sức mạnh của khoảng lặng đóng băng để cơ thể hát cùng ngôn từ một cách tự nhiên.", gif: "/gifs/shot-sizes.gif" },
    { n: "04", title: "Quy Hoạch B-roll", desc: "Biết cách dùng cảnh trám làm minh họa sắc bén, che lỗi cắt ghép tàng hình. B-roll là bằng chứng thép bẻ gãy phòng thủ của khán giả.", youtubeId: "Ew-yWd0riEQ", aspectRatio: "9 / 16" }
  ],

  // ── Mid CTA ──
  midCtaHeading: "Đầu tư hệ thống một lần, giải phóng thời gian mãi mãi.",
  midCtaSub: "Chỉ với 699.000 VNĐ, bạn sở hữu toàn bộ: 6 buổi học thực chiến + Bộ Prompt AI + Setup Talking Head — trọn đời.",
  midCtaBtn: "ĐĂNG KÝ VÀ SỞ HỮU BỘ LỆNH AI NGAY",

  // ── Before & After ──
  baLabel: "SỰ KHÁC BIỆT KHI CÓ HỆ THỐNG CHUẨN",
  baHeading: "Sự khác biệt khi bạn có hệ thống chuẩn.",
  baSub: "",
  baBeforeMedia: "",
  baAfterMedia: "",
  beforeLabel: "Trước đây",
  afterLabel: "Khi có hệ thống",
  beforeItems: [
    "Ánh mắt đờ đẫn, vai gồng cứng đọc kịch bản",
    "Ánh sáng phòng nhợt nhạt, bối cảnh lộn xộn",
    "Vắt óc 2-3 tiếng chỉ để nghĩ ra chủ đề hôm nay",
    "Quay hỏng hàng chục lần vì nói vấp không che được",
    "Kênh đăng không đều, bỏ hoang vì kiệt sức"
  ],
  afterItems: [
    "Góc nghiêng 3/4 tự nhiên, cơ thể minh họa linh hoạt",
    "Ánh sáng ven ấm tạo khối, phong thái đĩnh đạc chỉn chu",
    "AI xuất kịch bản 2 cột trong chưa đến 5 phút",
    "B-roll che lỗi vấp tàng hình, video mượt như dòng chảy",
    "Quy trình chuẩn hóa — ra video đều đặn, không tốn sức"
  ],

  // ── Roadmap ──
  roadmapLabel: "LỘ TRÌNH THỰC CHIẾN",
  roadmapHeading: "Lộ trình 6 buổi tối ưu hóa quy trình làm nội dung",
  roadmapPreviewHeading: "Trải nghiệm trực quan một bài học mẫu",
  roadmapPreviewDesc: "Video thực tế nằm trong chương trình học của bạn — đi thẳng vào bản chất và dễ áp dụng ngay.",
  roadmapIframeUrl: "https://www.youtube.com/embed/qi-R_AIWjZM?rel=0&modestbranding=1",
  roadmapChaptersHeading: "Hệ thống hóa toàn bộ quy trình làm video của bạn:",
  stages: [
    { n: "[1]", title: "Giải mã thuật toán & Nhịp điệu", desc: "Hiểu luật 3 giây để giữ chân người xem bằng sự mượt mà thay vì các hiệu ứng rối mắt. Nền tảng tư duy trước khi bấm máy." },
    { n: "[2]", title: "Kiến trúc Không gian", desc: "Setup góc quay Talking Head cố định, đánh sáng 3 điểm tôn nét mặt. Quay bao nhiêu video cũng chỉ cần ngồi vào là bấm máy." },
    { n: "[3]", title: "Trợ lý AI Kịch bản", desc: "Thực hành dùng Prompt trên ChatGPT/Gemini để viết kịch bản 2 cột hàng loạt. Rút ngắn từ 2 tiếng xuống còn 5 phút." },
    { n: "[4]", title: "Bằng chứng thị giác (B-roll)", desc: "Cách quy hoạch B-roll (cảnh trám) để minh họa sắc bén và che lỗi nói vấp một cách tàng hình." },
    { n: "[5]", title: "Vũ đạo trước ống kính", desc: "Luyện 'Cơ thể hát', giao tiếp ánh mắt và sử dụng khoảng lặng đóng băng để loại bỏ hoàn toàn bệnh đơ cứng." },
    { n: "[6]", title: "Hoàn thiện quy trình", desc: "Đóng gói quy trình tự quay dựng tối giản cá nhân hóa. Ra video đều đặn mà không bị vắt kiệt năng lượng." }
  ],

  // ── Instructor ──
  instructorLabel: "NGƯỜI ĐỒNG HÀNH",
  instructorHeading: "Người đồng hành chuẩn hóa\nhình ảnh cùng bạn",
  instructorInitials: "NĐV",
  instructorName: "Nguyễn Đức Việt",
  instructorTitle: "Kỹ sư Công nghệ Phần mềm (ĐH Bách Khoa). 15 năm Giảng viên Mỹ thuật đa phương tiện tại FPT Arena.",
  instructorBio: [
    "Kỹ sư Bách Khoa — mang đến tư duy hệ thống hóa, biến việc làm nội dung từ lộn xộn thành một quy trình bài bản, tiết kiệm sức lực tối đa.",
    "15 năm Giảng viên FPT Arena — nền tảng vững chắc về ngôn ngữ điện ảnh và nghệ thuật điều hướng thị giác.",
    "Mình không dạy bạn mẹo vặt bấm nút. Mình ở đây để giúp bạn định vị hình ảnh cá nhân một cách đàng hoàng và chỉn chu nhất."
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
  urgencyBar: "⚠ ĐẶC QUYỀN ĐĂNG KÝ HÔM NAY — CHỈ CÒN 699.000 VNĐ",
  ctaLabel: "// BƯỚC CUỐI CÙNG",
  ctaHeading: "Đừng để kỹ thuật lặt vặt cản bước bạn trao đi giá trị chuyên môn.",
  ctaSub: "Hãy xây dựng một hệ thống để nội dung của bạn tự động lan tỏa, còn bạn được tập trung vào chuyên môn thực sự. Từ video tiếp theo, sự gượng gạo sẽ hoàn toàn biến mất.",
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
    order: ["hero", "pain", "cycle", "discovery", "aiweapon", "solutions", "skills", "midCta", "before-after", "roadmap", "instructor", "bonus", "cta", "footer"],
    hidden: ["attention", "rule", "solution"],
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
