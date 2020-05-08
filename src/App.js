import React from 'react';
import TabVerticle from './components/Tabs';
import HeaderProject from './components/Header'
import 'semantic-ui-css/semantic.min.css';
import { Divider } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Divider horizontal > </Divider> 
      <HeaderProject />
      <Divider horizontal > </Divider>
      <TabVerticle />
    </div>
  );
}

export default App;
