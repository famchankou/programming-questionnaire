import React from 'react';
import { Formik } from 'formik';
import LoginForm from './view';
import { loginFormValidationSchema } from 'validations';

/**
 * Login form with validation
 * @param {Function} loginUser - function which dispatch login action in redux store
 */

const LoginFormComponent = ({ loginUser }) => {
  const initialValues = {
    username: '',
    password: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormValidationSchema}
      onSubmit={values => loginUser(values)}
    >
      {formikProps => <LoginForm {...formikProps} />}
    </Formik>
  );
};

export default LoginFormComponent;
