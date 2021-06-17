import React from 'react';
import { connect } from 'react-redux';
import ButtonAtom from '../../components/common/ButtonAtom';
import { userSetDetails } from '../../redux/user/user.action';
import './styles.css';

const Home = ({ dispatchUserSetDetails }) => {
  const handleLogout = () => {
    dispatchUserSetDetails(null);
  };

  return (
    <div className='home'>
      <div className='home-content'>
        <h1>Welcome Home 👽</h1>
        <ButtonAtom label='logout' type='button' handleClick={handleLogout} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUserSetDetails: (user) => dispatch(userSetDetails(user)),
});

export default connect(null, mapDispatchToProps)(Home);
