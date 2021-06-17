import React from 'react';
import './styles.css';

const InputAtom = ({
  label,
  value,
  placeholder,
  handleInput,
  type,
  name,
  id,
  required,
}) => (
  <div className='input-wrap'>
    <label htmlFor={id} className='input-label'>
      {label}
    </label>
    <input
      id={id}
      required={required}
      className='input'
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={handleInput}
      value={value}
    />
    <span className='input-grow'></span>
  </div>
);

export default InputAtom;
