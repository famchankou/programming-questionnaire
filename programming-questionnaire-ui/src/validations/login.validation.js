import { object, string } from 'yup';

const loginFormValidationSchema = object().shape({
  username: string().required('Please, enter your username'),
  password: string().required('Please, enter your password'),
});

export default loginFormValidationSchema;
