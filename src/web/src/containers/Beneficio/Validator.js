import _ from 'lodash';

const validate = values => {
  const errors = {};
  if (!values.loanId) {
    errors.loanId = 'Number Required';
  }

  return errors;
};
export default validate;
