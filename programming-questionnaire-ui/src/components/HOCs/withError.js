import React from 'react';
import { connect } from 'react-redux';
import { clearMessage } from 'store/errors';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => {
  return {
    clearError: page => {
      dispatch(clearMessage(page));
    },
  };
};

/**
 * Alert component for the alert message
 * @param {Object} props
 */

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

/**
 * Error HOC for showing alert message if it will be error from server
 * @param {String} page - value for the current page
 * @param {Object} errors - errors object from redux store, which contains page key and alert message
 * @param {Function} clearError - function that dispatches redux action to clear error in errors reducer after timeout
 */

export default page => {
  return WrappedComponent => {
    const componentsErrorHOC = ({ errors, clearError, ...props }) => {
      const error = errors[page] || '';
      return (
        <>
          <Snackbar open={error} autoHideDuration={5000} onClose={() => clearError(page)}>
            <Alert severity="error">{error}</Alert>
          </Snackbar>
          <WrappedComponent {...props} />
        </>
      );
    };
    return connect(mapStateToProps, mapDispatchToProps)(componentsErrorHOC);
  };
};
