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

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default page => {
  console.log('PAGE', page);
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
