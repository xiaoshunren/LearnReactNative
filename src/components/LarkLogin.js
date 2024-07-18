import React from 'react';

const LarkLogin = () => {
  const appId = process.env.REACT_APP_LARK_APP_ID;
  const redirectUri = process.env.REACT_APP_LARK_REDIRECT_URI;

  const handleLogin = () => {
    const authUrl = `https://open.feishu.cn/open-apis/authen/v1/index?app_id=${appId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=state`;
    window.location.href = authUrl;
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Lark</button>
    </div>
  );
};

export default LarkLogin;
