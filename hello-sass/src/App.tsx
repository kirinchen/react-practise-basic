import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.scss'
import TestModule from './test.module.scss'

function App() {
  return (
    <div className="wrap">
     測試
     <h1>       this is h1     </h1>
     <h2>       this is h2     </h2>
     <h3 >       this is h3     </h3>
     <div className={ TestModule.moduleClazz }>
      vvv
     </div>
     <div className="globalDiv">
      ggg
     </div>
    </div>
  );
}

export default App;
