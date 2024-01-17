import logo from './logo.svg';
import './App.css';
import Entry from './Entry';

const files = {
  children: [
    {
      name: 'node_modules',
      children: [
        {
          name: '.bin'//
        }
      ]
    },
    {
      name: 'src',
      children: [
        {
          name: 'components',//
          children: [
            {
              name: 'App.js',
            }
          ]
        }
      ]
    },
    {
      name: 'package.json'
    },
    {
      name: 'package-lock.json'
    }
  ]
};// Tree structure

function App() {
  return (
    <div className="App">
     {
      files.children.map((entry)=> {
        return <Entry entry = {entry} depth = {1}></Entry>
      })
     }
    </div>
  );
}

export default App;


// Can you build a tree browser comp
// entire dom trree is a tree
// 1. rendering Tree RECURSIVELY
// 2. Now for styling we want some indent at every new DEPTH. Have a depth and do dynamic styling
// 3. Expand and collpase feature
// String interpolation