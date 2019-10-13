export default [
    {
        key: 'user',
        label: 'Username/Email ID',
        type: 'text',
        value: '',
        validations: [{required: true, msg: `Has to be filled you fool.`}],
        error: '',
    },
    {
        key: 'password',
        label: 'Password',
        type: 'password',
        value: '',
        validations: ['required'],
        error: '',
    }
]