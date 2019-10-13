import React, { useState } from "react";
import { Link } from 'react-router-dom'

import Form from '../../shared/form'
import "./login.scss";
import "../../styles/form.scss";
import formData from "./data";
import { handleSubmit } from "../../shared/helper";

const Login = () => {

  const [form, setForm] = useState(formData);
  const [isFormInvalid, setFormInvalid] = useState(false);

  const handleChange = event => {
    const { id, value } = event.target;
    setForm(form.map(input =>
      input.key === id ? { ...input, value } : input
    ))
  }

  const submitHandler = event => {
    const result = handleSubmit(event, form);
    if (result && result.isFormInvalid) {
      setForm(result.form);
      setFormInvalid(result.isFormInvalid);
    } else {
      console.log(result.form.map(fields => ({ [fields.key]: fields.value })));
    }
  };

  return (
    <div className="login">
      <h2 className="primary-title">Login to BlaBla!</h2>
      <form onSubmit={submitHandler}>
        <Form form={form} onChange={handleChange} />
        <div className="input-form-group">
          <input type="submit" className="primary-btn" />
        </div>
      </form>
      <p>New Here. <Link to="/signup">Sign Up</Link> to get Amazed!</p>
    </div>
  );
}

export default Login;
