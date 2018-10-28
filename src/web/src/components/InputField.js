import React from 'react';

const InputField = ({
  input,
  label,
  disabled,
  type,
  required,
  meta: { touched, error }
}) => {
  return (
    <div className="form-group">
      <label className="col-sm-4 ">{label}</label>

      <div className="col-sm-8 d-inline-block">
        <input
          className={`form-control ${touched && error ? 'error' : ''}`}
          {...input}
          disabled={disabled}
        />
      </div>

      <div
        className={
          touched && error
            ? 'error-hint height-transition'
            : 'height-transition height-transition-hidden'
        }
      >
        <div className="col-sm-4 d-inline-block" />
        <p className="text-danger">{error}</p>
      </div>
    </div>
  );
};
export default InputField;
