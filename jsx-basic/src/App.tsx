import React, { MouseEventHandler } from 'react';
import logo from './logo.svg';
import './App.css';
import { JSDocAugmentsTag } from 'typescript';

function App() {
  const testRow = <TestRow name='123dd'></TestRow>


  console.log(typeof testRow);
  return (
    <div>
      {testRow}
    </div>
  );
}

const testEvent = (e: any): void => {
  console.log('HHHHH=' + e);
}

const TestRow = (props: any): JSX.Element => (
  <div>
    xxxx {props.name}
    <button onClick={testEvent}> oooo </button>
    <img src={require('./download.png')}></img>
    <img src={logo}></img>
  </div>)


export default App;
