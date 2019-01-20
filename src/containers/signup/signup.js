import React from 'react';
import './style.scss';
import '../../form.scss';
export default class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            form: [
                {
                    key: 'username',
                    label: 'Username',
                    placeholder: 'Enter your username',
                    type: 'text',
                    value: '',
                    error: '',
                },
                {
                    key: 'email',
                    label: 'Email ID',
                    placeholder: 'Enter your email address',
                    type: 'email',
                    value: '',
                    error: '',
                },
                {
                    key: 'otp',
                    label: 'OTP',
                    placeholder: 'Enter the OTP received',
                    type: 'text',
                    value: '',
                    error: '',
                },
                {
                    key: 'phone',
                    label: 'Phone',
                    placeholder: 'Enter your phone number',
                    type: 'text',
                    value: '',
                    error: '',
                },
                {
                    key: 'password',
                    label: 'Password',
                    placeholder: 'Enter your password',
                    type: 'password',
                    value: '',
                    error: '',
                },
                {
                    key: 'confirm',
                    label: 'Confirm Password',
                    placeholder: 'Confirm your password',
                    type: 'password',
                    value: '',
                    error: '',
                }
            ]
        }
        this.disabled = true;

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
            </div>
        ))
}

    handleChange(event) {
        const { id, value } = event.target;
        this.setState({
            form: this.state.form.map(input => input.key === id ? { ...input, value } : input)
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.form.reduce((acc, input) => ({
            ...acc,
            [input.key]: input.value
        }), {}));
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
                            disabled={this.disabled}
                            className={`primary-btn ${this.disabled ? 'disabled' : ''}`} />
                    </div>
                </form>
            </div>
        )
    }
}