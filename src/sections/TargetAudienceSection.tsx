import React from 'react';
import { useTheme } from '../theme';
import { FadeIn, Label, SH, Sec, Div } from '../components/ui';

const PERSONAS = [
  { icon: '🎓', title: 'Chuyên gia / Giảng viên', text: 'Có kiến thức chuyên sâu nhưng ngại lên hình. Muốn xây kênh để tăng uy tín và thu hút học viên/khách hàng.' },
  { icon: '💼', title: 'Freelancer / Chủ doanh nghiệp nhỏ', text: 'Cần video để xây dựng thương hiệu cá nhân nhưng không có team media, phải tự mình làm hết.' },
  { icon: '🚀', title: 'Người mới bắt đầu xây kênh', text: 'Chưa biết bắt đầu từ đâu, setup thế nào, và nói gì trước camera. Cần một hệ thống từ A đến Z.' },
];

export function TargetAudienceSection() {
  const t = useTheme();

  return (
    <Sec style={{ padding: '80px 20px', backgroundColor: t.bg }}>
      <Div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Label>Đối Tượng Phù Hợp</Label>
            <SH>Khóa học này dành cho ai?</SH>
            <p style={{
              color: t.accentText,
              fontFamily: t.fontBody,
              fontSize: '18px',
              maxWidth: '600px',
              margin: '20px auto 0',
              lineHeight: 1.6,
              opacity: 0.8
            }}>
              Không phải ai cũng cần khóa học này — nhưng nếu bạn thuộc nhóm dưới đây, đây chính là thứ bạn cần.
            </p>
          </div>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {PERSONAS.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div style={{
                backgroundColor: t.card,
                padding: '32px',
                borderRadius: '16px',
                borderTop: `4px solid ${t.accent}`,
                borderLeft: `1px solid ${t.line}`,
                borderRight: `1px solid ${t.line}`,
                borderBottom: `1px solid ${t.line}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>
                  {item.icon}
                </div>
                <h3 style={{ 
                  color: t.accent, 
                  fontFamily: t.fontDisplay, 
                  fontSize: '22px', 
                  marginBottom: '16px',
                  fontWeight: 'bold'
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: t.accentText, 
                  fontFamily: t.fontBody, 
                  lineHeight: 1.6, 
                  fontSize: '16px',
                  opacity: 0.9,
                  margin: 0
                }}>
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Div>
    </Sec>
  );
}
