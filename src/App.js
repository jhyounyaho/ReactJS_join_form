import React from 'react';
import { createGlobalStyle } from 'styled-components';
import JoinTemplate from './Components/JoinTemplate/JoinTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`
function App() {
  return (
    <div>
      <GlobalStyle />
      <JoinTemplate />
    </div>
  );
}

export default App;
