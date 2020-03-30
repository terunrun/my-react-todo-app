import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoListItem from './ToDoListItem.js';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // 1Divしかだめなの？複数ならコンポーネント側でやってねということか。
    <div>
      <ToDoListItem
        title="TEST"
        description="This is a test"
      />
    </div>
  );
}

export default App;
