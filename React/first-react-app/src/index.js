import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

// this is JSX
const val=(<div>
  {/* since class is keyword in JS therefore to add  class to html we will use className 
  Also:: {} is reserved for expressions
  therefore use {{}} for styling*/}
  <h1 className="heading" style={{color:"red"}}>Hello this is JSX</h1>
  <p>hello</p>
</div>);
root.render(val);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

