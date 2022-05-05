import React from 'react';
import ReactComponent from './components/ReactComponent';
import ReactPureComponent from './components/ReactPureComponent';
import { FunctionalComponent } from './components/FunctionalComponent';

export const CreateElement = React.createElement('h1', null, 'Create Element');

function App() {
  return (
    <>
    <hr />
    <ReactComponent />
    <hr />
    <ReactPureComponent />
    <hr />
    <FunctionalComponent />
</>
  );
}

export default App;
