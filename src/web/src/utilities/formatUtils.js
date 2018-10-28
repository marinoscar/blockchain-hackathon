import moment from 'moment-timezone';
import { createNumberMask, createTextMask } from 'redux-form-input-masks';

import numeral from 'numeral';

export const formatDate = date => {
  return date && moment.tz(Date.parse(date), moment.tz.guess()).format('LL');
};

export const formatAmount = amount => {
  return numeral(amount).format('0,0.00');
};
