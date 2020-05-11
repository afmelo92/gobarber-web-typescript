/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
