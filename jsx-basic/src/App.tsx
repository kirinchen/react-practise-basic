import React, { MouseEventHandler } from 'react';
import logo from './logo.svg';
import './App.css';
import { JSDocAugmentsTag } from 'typescript';
import Loading from './CheckCompoment';

function App() {
  const testRow = <TestRow name='123dd'></TestRow>


  console.log(typeof testRow);
  return (
    <div>
      {testRow}
      <Loading.Loading isLoad={ true }></Loading.Loading>
      <Loading.Loading2 isLoad={ true }></Loading.Loading2>
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
    <img src={logo} width={50} height = {50} ></img>
  </div>)




export default App;
