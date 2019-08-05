import React from 'react';
import './style.scss';
import '../../form.scss';

import * as validator from '../../shared/validations';
export default class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFormInvalid: false,
            form: [
                {
                    key: 'username',
                    label: 'Username',
                    type: 'text',
                    value: '',
                    validations: [{required: true, msg: `Has to be filled you fool.`}],
                    error: '',
                },
                {
                    key: 'email',
                    label: 'Email ID',
                    type: 'email',
                    value: '',
                    validations: ['required'],
                    error: '',
                },
                {
                    key: 'otp',
                    label: 'OTP',
                    type: 'text',
                    value: '',
                    validations: ['required'],
                    error: '',
                },
                {
                    key: 'phone',
                    label: 'Phone',
                    type: 'text',
                    value: '',
                    validations: ['required', { minlength: 10 }],
                    error: '',
                },
                {
                    key: 'password',
                    label: 'Password',
                    type: 'password',
                    value: '',
                    validations: ['required', { minlength: 6, msg: 'Password has to be 6 characters atleat' }],
                    error: '',
                },
                {
                    key: 'confirm',
                    label: 'Confirm Password',
                    type: 'password',
                    value: '',
                    validations: ['required'],
                    error: '',
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    generateForm = () => {
        const { form } = this.state;
        return form.map((input, index) => (
            <div className="input-form-group" key={index}>
                <label
                    htmlFor={input.key}
                    className={`input-label ${input.value ? 'active' : ''}`}>{input.label}</label>
                <input
                    type={input.type}
                    value={input.value}
                    className="input-box"
                    onChange={this.handleChange}
                    placeholder=""
                    id={input.key}
                />
                {this.generateErrors(input.error)}
            </div>
        ))
    }

    generateErrors = error => {
        if (Array.isArray(error)) {
            return error.map((error, index) => (
                <p className="input-error" key={index}>{error}</p>
            ));
        }
        return <p className="input-error">{error}</p>
    }

    handleChange(event) {
        const { id, value } = event.target;
        this.setState({
            form: this.state.form.map(input => input.key === id ? { ...input, value } : input)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let { form } = this.state;
        let isFormInvalid = false;
        form = form.map(field => {
            const value = validator.validateField(field);
            if (value && value.error) {
                field.error = value.msg;
                isFormInvalid = isFormInvalid || !isFormInvalid;
            } else {
                field.error = '';
            }
            return field;
        });
        if (isFormInvalid) {
            this.setState({ form, isFormInvalid });
        } else {
            console.log(form.map(fields => ({ [fields.key]: fields.value })));
        }
    }

    render() {
        return (
            <div className="signup">
                <h2 className="primary-title">Signup to get Amazed!</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.generateForm()}
                    <div className="input-form-group">
                        <input
                            type="submit"
                            className="primary-btn" />
                    </div>
                </form>
            </div>
        )
    }
}