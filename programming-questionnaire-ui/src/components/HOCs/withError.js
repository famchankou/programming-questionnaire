import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from 'store/errors/actions';
import Message from 'components/atoms/Message';

export default (page, left = false) => {
  const errors = useSelector(state => state.errors);
  const dispatch = useDispatch();
  return WrappedComponent => {
    const componentsErrorHOC = ({ clearError, ...props }) => {
      const error = errors[page] || '';
      return (
        <>
          {error ? (
            <Message
              text={error}
              timeout={5000}
              type="error"
              left={left}
              onClose={() => dispatch(Actions.Creators.clearErrorMessage(page))}
            />
          ) : null}
          <WrappedComponent {...props} />
        </>
      );
    };
    return componentsErrorHOC;
  };
};
