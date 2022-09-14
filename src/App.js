import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Dropdown from './component/Dropdown'
import Translate from './component/Translate'

// const items = [
//   {
//     title: 'React',
//     name: 'It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files. The Create React App uses ESLint to test and warn about ...'
//   },
//   {
//     title: 'Node',
//     name: 'It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files. The Create React App uses ESLint to test and warn about ...'
//   }
// ];

const options = [
  {
    title: 'this is red',
    value: 'red'
  },
  {
    title: 'this is green',
    value: 'green'
  },
  {
    title: 'this is blue',
    value: 'blue'
  }
];
function App() {
  // const [select, selecteditem] = useState(options[0]);
  // const [showDropdown, setshowDropdown] = useState(true);
  return (
    <>
      {/* <button onClick={() => setshowDropdown(!showDropdown)}>Toggle button</button>
      {showDropdown ?
        <Dropdown select={select} selecteditemchange={selecteditem} options={options} /> : null
      } */}
      <Translate />
    </>
  );
}

export default App;
