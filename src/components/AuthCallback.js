import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthCallback = ({ setUser }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async (code) => {
      try {
        const response = await axios.post('https://open.feishu.cn/open-apis/authen/v1/access_token', {
          app_id: process.env.REACT_APP_LARK_APP_ID,
          app_secret: process.env.REACT_APP_LARK_APP_SECRET,
          grant_type: 'authorization_code',
          code: code,
        });
        const { access_token } = response.data.data;
        fetchUserInfo(access_token);
      } catch (error) {
        console.error('Error fetching access token:', error);
        setError('Failed to authenticate. Please try again.');
      }
    };

    const fetchUserInfo = async (token) => {
      try {
        const response = await axios.get('https://open.feishu.cn/open-apis/contact/v3/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const userInfo = response.data.data;
        setUser(userInfo);
        navigate('/');
      } catch (error) {
        console.error('Error fetching user info:', error);
        setError('Failed to fetch user info. Please try again.');
      }
    };

    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');
    if (code) {
      fetchAccessToken(code);
    }
  }, [navigate, setUser]);

  return (
    <div>
      {error ? <p>{error}</p> : <p>Authenticating...</p>}
    </div>
  );
};

export default AuthCallback;
