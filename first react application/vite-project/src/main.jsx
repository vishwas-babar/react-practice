import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import ProfileModal from './ProfileModal.jsx'



const anothervariable = "this is another variable";
// this is how react element is created
const ReactElement = React.createElement(
  'h1',
  { className: 'title', href: 'https://reactjs.org' , target: '_blank' },
  'welcome to react world',
  anothervariable
)


ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement // this is how react element is rendered
)