import React from 'react';

const Alert = ({ error }) => {
  return (
    <div class="alert alert-warning" role="alert">
      {error}
    </div>
  );
};

export default Alert;
