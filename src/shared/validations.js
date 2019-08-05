export const validateField = ({ validations, value, label }) => {
    const validationResult = validations.reduce((errors, rule) => {
        const ruleType = typeof rule === 'string' ? rule : Object.keys(rule)[0];
        const errorMsg = typeof rule === 'object' ? rule.msg : '';
        const validatorFunc = functionMap.get(ruleType);
        if (validatorFunc) {
            const result = validatorFunc({ value, label, ruleCheck: rule[ruleType], msg: errorMsg });
            if (typeof result === 'string') {
                errors.push(result);
            }
        }
        return errors;
    }, []);
    return validationResult.length ? { error: true, msg: validationResult } : null;
}

const isRequired = ({ value, label, msg }) => value ? !!value : msg || `${label} is required.`;

const minLength = ({ value, label, ruleCheck, msg }) => 
    value.length > ruleCheck || msg ||`${label} should be atleast ${ruleCheck} characters.`;

const maxLength = ({ value, label, ruleCheck, msg }) => 
    value.length < ruleCheck || msg || `${label} should be not more than ${ruleCheck} characters.`;

const regexTest = ({ value, label, ruleCheck, msg }) => 
    ruleCheck.test(value) || msg || `${label} should follow '${ruleCheck}'`;

const functionArr = [
    ['required', isRequired],
    ['minlength', minLength],
    ['maxlength', maxLength],
    ['regex', regexTest],
];

const functionMap = new Map(functionArr);