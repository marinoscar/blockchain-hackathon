import React from 'react';

const TextAreaField = ({
  input,
  label,
  type,
  disabled,
  meta: { touched, error }
}) => {
  return (
    <div>
      <textarea
        className="w-100"
        rows="4"
        cols="50"
        {...input}
        placeholder="Por favor dejar un comentario..."
      />

      {touched && error && <p className="text-danger">{error}</p>}
    </div>
  );
};
export default TextAreaField;
