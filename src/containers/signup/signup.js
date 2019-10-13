import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Form from "../../shared/form";
import "./signup.scss";
import "../../styles/form.scss";
import formData from "./data";
import { handleSubmit } from "../../shared/helper";

const Signup = () => {
    const [isFormInvalid, setFormInvalid] = useState(false);
    const [form, setForm] = useState(formData);

  const handleChange = event => {
    const { id, value } = event.target;
    setForm(form.map(input =>
        input.key === id ? { ...input, value } : input
      ))
  };

  const submitHandler = event => {
    const result = handleSubmit(event, form);
    if (result && result.isFormInvalid) {
      const { form, isFormInvalid } = result;
      setForm(form);
      setFormInvalid(isFormInvalid);
    } else {
      console.log(result.form.map(fields => ({ [fields.key]: fields.value })));
    }
  };

  return (
    <div className="signup">
      <h2 className="primary-title">Signup to get Amazed!</h2>
      <form onSubmit={submitHandler}>
        <Form form={form} onChange={handleChange} />
        <div className="input-form-group">
          <input type="submit" className="primary-btn" />
        </div>
      </form>
      <p className="footer">Have been here before? <Link to="/login">Login</Link> to continue</p>
    </div>
  );
};

export default Signup;
