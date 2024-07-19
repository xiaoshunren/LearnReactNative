import React from 'react';
import styled from 'styled-components';
import PageContainer from './PageContainer';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import LoadMore from './LoadMore';
import FeedbackForm from './FeedbackForm';
import ScrollAnimation from './ScrollAnimation';

const Section = styled.div`
  margin-bottom: 3em;
`;

const Banner = styled.div`
  background: url('') no-repeat center center/cover;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 3em;
  margin-bottom: 0.5em;
  background: linear-gradient(90deg, #ff00cc, #333399, #00ffcc, #ff00cc);
  background-size: 300% 300%;
  animation: gradient-flow 8s ease infinite;
  -webkit-background-clip: text;
  color: transparent;
`;

const SubHeading = styled.h2`
  font-size: 1.5em;
  margin-bottom: 1em;
  color: #ccc;
`;

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 10px;
  padding: 1.5em;
  margin: 1em 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Video = styled.video`
  width: 100%;
  border-radius: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5em;
`;

const ServiceCard = styled(Card)`
  text-align: center;
`;

const TeamCard = styled(Card)`
  text-align: center;
  padding: 1.5em;
  background: linear-gradient(135deg, rgba(255, 0, 204, 0.1), rgba(51, 51, 153, 0.1));
  border: 1px solid rgba(255, 0, 204, 0.3);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(255, 0, 204, 0.3);
  }
`;

const TeamImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1em;
`;

const TeamName = styled.h3`
  font-size: 1.25em;
  color: #ff00cc;
`;

const TeamRole = styled.p`
  font-size: 1em;
  color: #aaa;
  margin-bottom: 0.5em;
`;

const TeamDescription = styled.p`
  font-size: 0.875em;
  color: #aaa;
`;

const TestimonialCard = styled(Card)`
  text-align: center;
`;

const members = [
  { name: '徐 力明', role: '指導者', img: '/images/members/徐 力明.png', description: 'Description for member 1' },
  { name: '王暁', role: '指導者', img: '/images/members/GL_王暁.png', description: 'Description for member 2' },
  { name: '馬 青松', role: '指導者', img: '/images/members/馬 青松.png', description: 'Description for member 3' },
  { name: '于 成林', role: '指導者', img: '/images/members/于 成林.png', description: 'Description for member 4' },
  { name: '于 成林', role: '指導者', img: '/images/members/于 氷飛.png', description: 'Description for member 5' },
  { name: '葛 妮娜', role: '指導者', img: '/images/members/葛 妮娜 (Selina).png', description: 'Description for member 6' },
  { name: '夏 思萌', role: 'SM', img: '/images/members/夏 思萌.png', description: 'Description for member 7' },
  { name: '王 璟恬', role: 'SM辅佐', img: '/images/members/王 璟恬.png', description: 'Description for member 8' },
  { name: '王 月宵', role: 'UIUX設計', img: '/images/members/王 月宵.png', description: 'Description for member 9' },
  { name: '赫 昊宇', role: 'インフラ', img: '/images/members/赫 昊宇.png', description: 'Description for member 10' },
  { name: '黄 軻', role: 'フロントエンド開発', img: '/images/members/黄 軻.png', description: 'Description for member 11' },
  { name: '宋 爽', role: 'フロントエンド開発', img: '/images/members/宋 爽.png', description: 'Description for member 12' },
  { name: '梁 紫莹', role: 'バックエンド開発', img: '/images/members/梁 紫莹.png', description: 'Description for member 13' },
  { name: '李 夢磊', role: 'バックエンド開発', img: '/images/members/李 夢磊.png', description: 'Description for member 14' },
  { name: '衣 福鵬', role: 'バックエンド開発', img: '/images/members/衣 福鵬.png', description: 'Description for member 15' },
  { name: '肖 舜仁', role: 'PO', img: '/images/members/肖 舜仁.png', description: 'Description for member 16' },
];

const Home = () => {
  return (
    <PageContainer>
      <Banner>
        <Heading>Welcome to D T C</Heading>
      </Banner>

      <Section>
        <SubHeading>Innovating the Future</SubHeading>
        <p>Keep Going!</p>
      </Section>

      <Section>
        <h2 style={{ color: '#ff00cc' }}>Our Products</h2>
        <Grid>
          <Card>
            <Image src="/images/スクリーンショット 2024-07-19 100738.png" alt="Product 1" />
            <h3 style={{ color: '#ff00cc' }}>AI チャットアプリ</h3>
            <p style={{ color: '#aaa' }}>ミニマムサイズのチャットボット機能のご紹介</p>
          </Card>
          <Card>
            <Image src="/images/スクリーンショット 2024-07-19 100712.png" alt="Product 2" />
            <h3 style={{ color: '#ff00cc' }}>AI Forecast</h3>
            <p style={{ color: '#aaa' }}>AI 需要予測は機械学習により、受注に影響を与える要因とその影響度合いを自動分析で発注数と発注タイミングの最適化</p>
          </Card>
        </Grid>
      </Section>

      <Section>
        <h2 style={{ color: '#ff00cc' }}>Our Solution</h2>
        <Grid>
          <Card>
            <Video src="/videos/Lark20240719-093644.mp4" controls />
            <h3 style={{ color: '#ff00cc' }}>ProcessCopilot</h3>
            <p style={{ color: '#aaa' }}>ProcessCopilot製品についてのご紹介
            </p>
          </Card>
          <Card>
            <Video src="/videos/Lark20240719-093656.mp4" controls />
            <h3 style={{ color: '#ff00cc' }}>ProcessCopilot</h3>
            <p style={{ color: '#aaa' }}>ProcessCopilot機能説明</p>
          </Card>
        </Grid>
      </Section>

      <Section>
        <h2 style={{ color: '#ff00cc' }}>Our Services</h2>
        <Grid>
          <ServiceCard>
            <h3 style={{ color: '#ff00cc' }}>Service 1</h3>
            <p style={{ color: '#aaa' }}>We offer a wide range of services to meet your needs, including custom software development, IT consulting, and more.</p>
          </ServiceCard>
          <ServiceCard>
            <h3 style={{ color: '#ff00cc' }}>Service 2</h3>
            <p style={{ color: '#aaa' }}>Our team of experts is dedicated to providing top-notch support and maintenance services to keep your systems running smoothly.</p>
          </ServiceCard>
          <ServiceCard>
            <h3 style={{ color: '#ff00cc' }}>Service 3</h3>
            <p style={{ color: '#aaa' }}>We offer comprehensive training and education services to help your team stay up-to-date with the latest technologies.</p>
          </ServiceCard>
        </Grid>
      </Section>

      <Section>
        <h2 style={{ color: '#ff00cc' }}>Meet Our Team</h2
        >
        <Grid>
          {members.map((member, index) => (
            <TeamCard key={index}>
              <TeamImage src={member.img} alt={member.name} />
              <TeamName>{member.name}</TeamName>
              <TeamRole>{member.role}</TeamRole>
              <TeamDescription>{member.description}</TeamDescription>
            </TeamCard>
          ))}
        </Grid>
      </Section>

      <Section>
        <h2 style={{ color: '#ff00cc' }}>What Our Clients Say</h2>
        <Grid>
          <TestimonialCard>
            <p style={{ color: '#aaa' }}>"Great service and support!"</p>
            <h3 style={{ color: '#ff00cc' }}>Client 1</h3>
          </TestimonialCard>
          <TestimonialCard>
            <p style={{ color: '#aaa' }}>"Highly recommend this company."</p>
            <h3 style={{ color: '#ff00cc' }}>Client 2</h3>
          </TestimonialCard>
          <TestimonialCard>
            <p style={{ color: '#aaa' }}>"Exceptional quality and attention to detail."</p>
            <h3 style={{ color: '#ff00cc' }}>Client 3</h3>
          </TestimonialCard>
        </Grid>
      </Section>

      <LoadMore />
      <Pagination />
      <FeedbackForm />
    </PageContainer>
  );
};

export default Home;