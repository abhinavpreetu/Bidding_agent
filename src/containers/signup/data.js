export default [
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