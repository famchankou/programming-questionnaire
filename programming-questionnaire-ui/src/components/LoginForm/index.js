import React from 'react';
import { Formik } from 'formik';
import LoginForm from './view';
import { loginFormValidationSchema } from 'validations';

const LoginFormComponent = ({ loginUser }) => {
  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormValidationSchema}
      onSubmit={({ email, password }) => loginUser(email, password)}
    >
      {formikProps => <LoginForm {...formikProps} />}
    </Formik>
  );
};

export default LoginFormComponent;
