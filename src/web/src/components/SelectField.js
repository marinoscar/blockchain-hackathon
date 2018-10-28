import React from 'react';

const SelectField = ({
  input,
  label,
  type,
  disabled,
  required,
  originalValue,
  unamendable,
  amend,
  meta: { touched, error },
  children
}) => (
  <div className="form-group">
    <label className={`col-sm-4 ${required ? 'asterik' : ''}`}>{label}</label>

    {amend &&
      !unamendable && (
        <div className="col-sm-4 d-inline-block">
          <select
            className={`form-control ${touched && error ? 'error' : ''}`}
            disabled
            value={originalValue}
          >
            {children}
          </select>
        </div>
      )}
    <div
      className={
        amend || (amend && unamendable)
          ? 'col-sm-4 d-inline-block'
          : 'col-sm-8 d-inline-block'
      }
    >
      <select
        className={`form-control ${touched && error ? 'error' : ''}`}
        {...input}
        disabled={(disabled && !amend) || (amend && unamendable)}
      >
        {children}
      </select>
    </div>
    <div
      className={
        touched && error
          ? 'error-hint height-transition'
          : 'height-transition height-transition-hidden'
      }
    >
      <div
        className={
          amend || (amend && unamendable)
            ? 'col-sm-8 d-inline-block'
            : 'col-sm-4 d-inline-block'
        }
      />
      <div className="col-sm-4 d-inline-block">
        <p className="text-danger">{error}</p>
      </div>
    </div>
  </div>
);
export default SelectField;
