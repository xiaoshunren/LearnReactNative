import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async (code) => {
      try {
        const response = await axios.post('https://open.feishu.cn/open-apis/authen/v1/access_token', {
          app_id: process.env.REACT_APP_LARK_APP_ID,
          app_secret: process.env.REACT_APP_LARK_APP_SECRET,
          grant_type: 'authorization_code',
          code: code,
        });
        const { access_token } = response.data;
        // 保存access_token，并使用它获取用户信息
        console.log('Access Token:', access_token);
        navigate('/');
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');
    if (code) {
      fetchAccessToken(code);
    }
  }, [navigate]);

  return <div>Authenticating...</div>;
};

export default AuthCallback;
