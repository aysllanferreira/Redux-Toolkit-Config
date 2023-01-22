import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUser } from '../redux/reducers/user';

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [getUser, setGetUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setGetUser({ ...getUser, [name]: value });
  };

  const handleClick = () => {
    dispatch(setUser(getUser));
    history.push('/login');
  };

  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        LOGIN
      </button>
    </div>
  );
}

export default Home;
