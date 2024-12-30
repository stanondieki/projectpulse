import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={classNames(
        'border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none',
        className
      )}
      {...props}
    />
  );
});

Textarea.propTypes = {
  className: PropTypes.string,
};

Textarea.displayName = 'Textarea';

export default Textarea;
