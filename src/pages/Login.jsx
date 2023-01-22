import React from 'react';
import { useSelector } from 'react-redux';

function Login() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <h1>{user.email}</h1>
      <h1>{user.password}</h1>
    </div>
  );
}

export default Login;
