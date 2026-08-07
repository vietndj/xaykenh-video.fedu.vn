import React from 'react';
import { useTheme } from '../theme';
import { FadeIn, Label, SH, Sec, Div } from '../components/ui';

const TESTIMONIALS = [
  { name: 'Anh Minh', role: 'Chuyên gia Tài chính', text: 'Trước kia mỗi lần quay video tôi mất 3-4 tiếng chỉ để viết kịch bản. Giờ với Prompt AI, 15 phút là xong. Video tự nhiên hơn nhiều vì không phải cố nhớ từng chữ nữa.', stars: 5 },
  { name: 'Chị Phương', role: 'Founder Thương hiệu Mỹ phẩm', text: 'Điều tôi thích nhất là hệ thống setup 1 lần xong dùng mãi. Mỗi ngày ngồi vào bàn, bật đèn lên, bấm quay — đơn giản vậy thôi mà kênh tăng trưởng đều đặn.', stars: 5 },
  { name: 'Bạn Hùng', role: 'Coach Sức khỏe', text: 'Khóa học này giải quyết đúng vấn đề của tôi: bệnh đơ camera. Sau 2 tuần luyện Vũ đạo ống kính, tôi quay video thoải mái như đang nói chuyện với bạn bè vậy.', stars: 5 },
];

export function TestimonialSection() {
  const t = useTheme();

  return (
    <Sec style={{ padding: '80px 20px', backgroundColor: t.bg }}>
      <Div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Label>Câu Chuyện Thành Công</Label>
            <SH>Cảm nhận từ học viên</SH>
          </div>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {TESTIMONIALS.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div style={{
                backgroundColor: t.card,
                padding: '32px',
                borderRadius: '16px',
                border: `1px solid ${t.line}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ color: t.accent, fontSize: '20px', marginBottom: '16px', letterSpacing: '4px' }}>
                  {Array(item.stars).fill('★').join('')}
                </div>
                <div style={{ 
                  color: t.accentText, 
                  fontSize: '18px', 
                  fontFamily: t.fontBody, 
                  lineHeight: 1.6, 
                  fontStyle: 'italic',
                  marginBottom: '24px',
                  flex: 1 
                }}>
                  "{item.text}"
                </div>
                <div>
                  <div style={{ color: t.accent, fontWeight: 'bold', fontFamily: t.fontDisplay, fontSize: '18px' }}>{item.name}</div>
                  <div style={{ color: t.accentText, opacity: 0.7, fontSize: '14px', fontFamily: t.fontBody, marginTop: '4px' }}>{item.role}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Div>
    </Sec>
  );
}
