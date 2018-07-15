import axios from 'axios';

export const required = value =>
  value || typeof value === 'number' ? undefined : 'Required field';

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength3 = minLength(3);

export const passwordMatch = (value, allValues) =>
  value !== allValues.password
    ? 'Confirmation password does not match'
    : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const tooYoung = value =>
  value && value < 13
    ? 'You do not meet the minimum age requirement!'
    : undefined;

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

export const asyncValidate = (data, dispatch) => {
  if (!data.email) {
    return Promise.resolve({});
  }

  return new Promise(async (resolve, reject) => {
    const request = await axios.get(`/api/user/validate/${data.email}`);
    if (request.data) {
      reject({ email: 'This email has already been taken' });
    } else {
      resolve();
    }
  });
};
