import React from 'react';
import { Formik } from 'formik';
import RegistrationForm from './view';
import { registrationFormValidationSchema } from 'validations';

/**
 * Registration form with validation
 * @param {Function} registerUser - function to register user
 */

const LoginFormComponent = ({ registerUser }) => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registrationFormValidationSchema}
      onSubmit={values => registerUser(values)}
    >
      {formikProps => <RegistrationForm {...formikProps} />}
    </Formik>
  );
};

export default LoginFormComponent;
