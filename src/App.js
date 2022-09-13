import logo from './logo.svg';
import './App.css';
import Accordian from './component/Accordian'
const items = [
  {
    title: 'React',
    name: 'It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files. The Create React App uses ESLint to test and warn about ...'
  },
  {
    title: 'Node',
    name: 'It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files. The Create React App uses ESLint to test and warn about ...'
  }
];
function App() {
  return (
    <>
      <Accordian data={items} />
    </>
  );
}

export default App;
