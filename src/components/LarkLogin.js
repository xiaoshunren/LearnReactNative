import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('https://via.placeholder.com/1920x1080') no-repeat center center/cover; /* 添加背景图像 */
`;

const LoginBox = styled.div`
  background: rgba(26, 26, 26, 0.85);
  padding: 2em;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 300px;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 1em;
`;

const Heading = styled.h1`
  font-size: 1.5em;
  margin-bottom: 1em;
  color: #fff;
  background: linear-gradient(90deg, #ff00cc, #333399, #00ffcc, #ff00cc);
  background-size: 300% 300%;
  animation: gradient-flow 8s ease infinite;
  -webkit-background-clip: text;
  color: transparent;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75em;
  margin: 0.5em 0;
  border: 1px solid #ff00cc; /* 霓虹粉色边框 */
  background: #1a1a1a;
  color: #fff;
  border-radius: 25px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #333399; /* 深霓虹色 */
    box-shadow: 0 0 10px #333399;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75em;
  margin-top: 1em;
  background: linear-gradient(90deg, #ff00cc, #333399, #00ffcc, #ff00cc);
  background-size: 300% 300%;
  animation: gradient-flow 8s ease infinite;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #333399, #ff00cc, #00ffcc, #333399);
    transform: scale(1.05);
  }
`;

const ToggleButton = styled(Button)`
  background: none;
  border: 1px solid #ff00cc;
  margin-top: 1em;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #000;
  }
`;

const QRCodeImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 1em 0;
`;

const LarkLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [useQRCode, setUseQRCode] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 模拟登录逻辑
    console.log('Email:', email);
    console.log('Password:', password);
    // 登录成功后导航到主页
    navigate('/');
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Logo src="/images/スクリーンショット 2024-07-19 133253.png" alt="Company Logo" />
        <Heading>Login to Lark</Heading>
        {useQRCode ? (
          <div>
            <QRCodeImage src="/images/スクリーンショット 2024-07-19 133028.png"  alt="QR Code" />
            <p style={{ color: '#aaa' }}>Scan the QR code with your Lark app to login</p>
            <ToggleButton onClick={() => setUseQRCode(false)}>
              Use Email & Password
            </ToggleButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <Button type="submit">Login</Button>
            <ToggleButton onClick={() => setUseQRCode(true)}>
              Use QR Code
            </ToggleButton>
          </form>
        )}
      </LoginBox>
    </LoginContainer>
  );
};

export default LarkLogin;
