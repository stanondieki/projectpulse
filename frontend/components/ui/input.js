import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={classNames(
        'border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none',
        className
      )}
      {...props}
    />
  );
});

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

Input.displayName = 'Input';

export default Input;
