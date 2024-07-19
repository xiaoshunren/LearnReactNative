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
  background: url('https://via.placeholder.com/1200x400') no-repeat center center/cover;
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
`;

const TestimonialCard = styled(Card)`
  text-align: center;
`;

const Home = () => {
  return (
    <PageContainer>
      <Banner>
        <Heading>Welcome to DTC</Heading>
      </Banner>

      <Section>
        <SubHeading>Innovating the Future</SubHeading>
        <p>DTでお客様のビジネスに貢献します。</p>
      </Section>

      <Section>
        <h2 style={{ color: '#ff00cc' }}>Our Products</h2>
        <Grid>
          <Card>
            <Image src="https://via.placeholder.com/600" alt="Product 1" />
            <h3 style={{ color: '#ff00cc' }}>WorkTempo</h3>
            <p style={{ color: '#aaa' }}>AI最適解アルゴリズムとルールエンジン</p>
          </Card>
          <Card>
            <Image src="https://via.placeholder.com/600" alt="Product 2" />
            <h3 style={{ color: '#ff00cc' }}>SmartTempo</h3>
            <p style={{ color: '#aaa' }}>人工知能技術応用プラットフォームの製品群</p>
          </Card>
        </Grid>
      </Section>

      <Section>
        <h2 style={{ color: '#ff00cc' }}>Our Videos</h2>
        <Grid>
          <Card>
            <Video src="https://www.example.com/version_pro.mp4" controls />
            <h3 style={{ color: '#ff00cc' }}>TEMPO SERIES SOLUTIONS</h3>
            <p style={{ color: '#aaa' }}>TEMPO SERIES SOLUTIONS</p>
          </Card>
          <Card>
            <Video src="https://www.example.com/it_tech_stack.mp4" controls />
            <h3 style={{ color: '#ff00cc' }}>ARTIFICIAL INTELLIGENCE</h3>
            <p style={{ color: '#aaa' }}>ARTIFICIAL INTELLIGENCE</p>
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
        <h2 style={{ color: '#ff00cc' }}>Meet Our Team</h2>
        <Grid>
          <TeamCard>
            <Image src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3 style={{ color: '#ff00cc' }}>Member 1</h3>
            <p style={{ color: '#aaa' }}>Role of member 1. With extensive experience in the industry, they lead our team with expertise and vision.</p>
          </TeamCard>
          <TeamCard>
            <Image src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3 style={{ color: '#ff00cc' }}>Member 2</h3>
            <p style={{ color: '#aaa' }}>Role of member 2. They are known for their innovative approach and dedication to excellence.</p>
          </TeamCard>
          <TeamCard>
            <Image src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3 style={{ color: '#ff00cc' }}>Member 3</h3>
            <p style={{ color: '#aaa' }}>Role of member 3. Their technical expertise and problem-solving skills are invaluable to our team.</p>
          </TeamCard>
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
