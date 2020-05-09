/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <SignUp />
      <GlobalStyle />
    </>
  );
}

export default App;
