import * as validator from './validations';

export const handleSubmit = (event, form) => {
  event.preventDefault();
  let isFormInvalid = false;
  const updatedForm = form.map(field => {
      const value = validator.validateField(field);
      if (value && value.error) {
          field.error = value.msg;
          isFormInvalid = isFormInvalid || !isFormInvalid;
      } else {
          field.error = '';
      }
      return field;
  });
  return isFormInvalid ? { form: updatedForm, isFormInvalid } : null;
}