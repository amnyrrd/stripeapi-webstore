import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div classname='group'>
      <input
        type='text'
        className='form-input'
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value.length} ? 'shrink : '' } form-inputlabel`}>
          {label}
          </label>
      ) : null}
    </div>
  );
};

export default FormInput;
