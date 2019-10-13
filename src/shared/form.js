import React from 'react';

const generateErrors = error => {
  if (Array.isArray(error)) {
    return error.map((error, index) => (
      <p className="input-error" key={index}>
        {error}
      </p>
    ));
  }
  return <p className="input-error">{error}</p>;
};

const Form = ({ form, onChange }) => {
  return form.map((input, index) => (
    <div className="input-form-group" key={index}>
      <label
        htmlFor={input.key}
        className={`input-label ${input.value ? "active" : ""}`}
      >
        {input.label}
      </label>
      <input
        type={input.type}
        value={input.value}
        className="input-box"
        onChange={onChange}
        placeholder=""
        id={input.key}
      />
      {generateErrors(input.error)}
    </div>
  ));
};

export default Form;