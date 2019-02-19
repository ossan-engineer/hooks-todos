import React, { useContext } from 'react';
import { UserContext } from './index';

const App = () => {
  const value = useContext(UserContext);
  return (
    <div>
      {value}
    </div>
  )
}

export default App;
