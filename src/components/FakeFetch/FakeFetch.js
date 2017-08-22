import React from 'react';

import { Button } from 'react-toolbox/lib/button';

const FakeFetch = ({ onFetchClick }) => (
  <div>
    <Button label="Fetch Data" primary raised onClick={() => onFetchClick()} />
  </div>
)

export default FakeFetch;
