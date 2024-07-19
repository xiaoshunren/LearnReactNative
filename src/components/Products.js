import React from 'react';
import styled from 'styled-components';
import PageContainer from './PageContainer';

const Section = styled.div`
  margin-bottom: 3em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5em;
`;

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 10px;
  padding: 1.5em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1em;
`;

const Products = () => {
  return (
    <PageContainer>
      <Section>
        <h2 style={{ color: '#00ffcc' }}>Our Products</h2>
        <Grid>
          <Card>
            <Image src="/images/スクリーンショット 2024-07-19 115148.png" alt="Product 1" />
            <h3 style={{ color: '#ff7f00' }}>Work Tempo</h3>
            <p style={{ color: '#aaa' }}>AI最適解アルゴリズムとルールエンジン</p>
          </Card>
          <Card>
            <Image src="/images/スクリーンショット 2024-07-19 115212.png" alt="Product 2" />
            <h3 style={{ color: '#ff7f00' }}>Smart Tempo</h3>
            <p style={{ color: '#aaa' }}>人工知能技術応用プラットフォームの製品群</p>
          </Card>
          <Card>
            <Image src="/images/スクリーンショット 2024-07-19 115233.png" alt="Product 3" />
            <h3 style={{ color: '#ff7f00' }}>Find Tempo</h3>
            <p style={{ color: '#aaa' }}>IoT技術を活用し、資産管理システム</p>
          </Card>
          <Card>
            <Image src="/images/スクリーンショット 2024-07-19 115252.png" alt="Product 4" />
            <h3 style={{ color: '#ff7f00' }}>Device Tempo</h3>
            <p style={{ color: '#aaa' }}>クラウドデバイスをベースとした自動テストソリューション一式</p>
          </Card>
        </Grid>
      </Section>
    </PageContainer>
  );
};

export default Products;
