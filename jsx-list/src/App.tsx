import React, { Fragment, JSXElementConstructor, ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <FragmentTest>
      <FragmentSimplifyTest testTag="123test"></FragmentSimplifyTest>
      <div>OTHER</div>
      <TestMap></TestMap>
    </FragmentTest>

  );
}

const FragmentTest = (props: any): JSX.Element => {
  console.log(props.children[0].props.testTag);
  return <Fragment>
    {props.children[1]}
    <li> dd </li>
    <li> cc </li>
    <li> vv </li>
    {props.children[0]}
    {props.children}
  </Fragment>
}



const FragmentSimplifyTest = (props: any): JSX.Element => {
  const vals = [
    <li key={1}> s- </li>,
    <li key={2}> b* </li>,
    <li key={3}> x1 </li>,
  ];
  return <>
    {vals}
  </>
}

const posts = [
  { id: "1", title: "tt11", content: "ccc11" },
  { id: "2", title: "tt22", content: "ccc22" },
  { id: "3", title: "tt33", content: "ccc33" }
];

const TestMap = (props: any): JSX.Element => {
  return (
    <div>
      {
        posts.map(item =>
          <div key={item.id}>
            {item.title}
            {item.content}
          </div>)
      }
    </div>
  )
}

export default App;
