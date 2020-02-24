import { object, string } from 'yup';

/**
 * Validation schema for registration
 */

const registrationFormValidationSchema = object().shape({
  username: string().required('Please, enter your username'),
  email: string()
    .email('Email is invalid')
    .required('Please, enter your email'),
  password: string()
    .required('Please, enter your password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export default registrationFormValidationSchema;
