import React, { useState } from 'react';
import ButtonAtom from '../../../components/common/ButtonAtom';
import InputAtom from '../../../components/common/InputAtom';
import { connect } from 'react-redux';
import { userSetDetails } from '../../../redux/user/user.action.js';
import './styles.css';

const Login = ({ dispatchUserSetDetails }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchUserSetDetails({ userName, password, token: 1 });
  };

  return (
    <div className='login-wrap'>
      <div className='login-content'>
        <h1>Welcome</h1>
        <p>Please Login to your account</p>
        <form onSubmit={handleSubmit}>
          <InputAtom
            required
            label='User Name'
            placeholder='john doe'
            id='userName'
            name='username'
            handleInput={(e) => setUserName(e.target.value)}
            value={userName}
            type='text'
          />
          <InputAtom
            required
            label='Password'
            placeholder='xxxxx'
            id='password'
            name='password'
            handleInput={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
          />
          <ButtonAtom label='Login' />
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUserSetDetails: (user) => dispatch(userSetDetails(user)),
});

export default connect(null, mapDispatchToProps)(Login);
