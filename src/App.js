import {createGlobalStyle} from 'styled-components'
import React from "react";
import Countries from "./components/Countries";

const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Roboto', sans-serif;
}
h2 {
  margin: 0 0 10px;
}`

function App() {

  return (
    <div>
        <GlobalStyle/>
      <Countries/>
    </div>
  );
}

export default App;
