import { object, string } from 'yup';

const loginFormValidationSchema = object().shape({
  email: string()
    .email('Email is invalid')
    .required('Please, enter your email'),
  password: string().required('Please, enter your password'),
});

export default loginFormValidationSchema;
