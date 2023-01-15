import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    // ここでサーバーにログインリクエストを送信し、
    // ログイン成功時にisLoggedInをtrueに設定する
    // 例えば axios.post('/api/login', {username, password})
    //  .then(() => setIsLoggedIn(true))
    //  .catch(error => console.error(error))
    setIsLoggedIn(true);
  }

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
