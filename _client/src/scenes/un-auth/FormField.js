import React from 'react';

const FormField = ({ touched, error, input, placeholder, type }) => {
  return (
    <div>
      {touched && (error && <span className="form-has-error">{error}</span>)}
      <input
        {...input}
        className={`form-control ${
          touched && error ? 'form-error-control' : ''
        }`}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default FormField;
