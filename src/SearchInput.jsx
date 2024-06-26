import React, { forwardRef } from 'react';

export default forwardRef(
  function SearchInput(props, ref) {
    return <input placeholder="Looking for something?" ref={ref}/>;
  }
);
