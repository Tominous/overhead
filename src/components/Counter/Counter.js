import React from 'react';

import { Button } from 'react-toolbox/lib/button';
import Value from './Value';

const Counter = ({counter, onIncrementClick, onDecrementClick}) => (
  <div>
    <Button label="Increment" primary raised onClick={() => onIncrementClick()} />
    <Button label="Decrement" primary raised onClick={() => onDecrementClick()} />
    <Value value={counter} />
  </div>
)

export default Counter;
