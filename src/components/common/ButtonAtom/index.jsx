import React from 'react';
import './styles.css';

const ButtonAtom = ({ label, type, handleClick }) => (
  <button type={type} onClick={handleClick} className='btn'>
    {label}
  </button>
);

export default ButtonAtom;
