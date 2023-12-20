import React, { Component } from 'react';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userId: null,
      accessToken: null,
    };
  }

  handleLoginClick = async () => {
    // 로그인에 필요한 ID와 PW
    const loginData = {
      id: "umcweb",
      pw: "1234",
    };

    // 여기에 서버에서 ID와 토큰을 받아오는 비동기 함수 호출 코드를 추가
    try {
      const response = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('로그인에 실패했습니다.');
      }

      const data = await response.json();

      // 서버에서 받은 ID와 토큰을 콘솔에 출력
      console.log('서버에서 받은 ID:', data.result.userId);
      console.log('서버에서 받은 토큰:', data.result.AccessToken);

      // 상태 업데이트
      this.setState({
        isLoggedIn: true,
        userId: data.id,
        accessToken: data.accessToken,
      });
    } catch (error) {
      console.error('로그인 요청 중 에러 발생:', error);
    }
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false, userId: null, accessToken: null });
  }

  render() {
    const { isLoggedIn, userId } = this.state;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <button onClick={this.handleLogoutClick}>로그아웃</button>
            <p>환영합니다! 사용자 ID: {userId}</p>
          </div>
        ) : (
          <div>
            <button onClick={this.handleLoginClick}>로그인</button>
            <p>로그인 해주세요!</p>
          </div>
        )}
      </div>
    );
  }
}

export default LoginControl;
