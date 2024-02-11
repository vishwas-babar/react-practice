import { useState } from 'react'
import './App.css'

function App() {
  // let count = 10;
  // this is useState hook, when we use this hook, we can change the value of the variable and it will re-render the all the component where this variables are used, this is one magic of react suppose this variable is used in so many tags if you try to update it with vanila javascript then we need to create lot of of variable by serching the tag and then update it but with the help of useState we can update it and it will re-render the all the component where this variable is used
  let [count, setCount] = useState(10);

 const addValue = () => {

    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);

    // this way we can update one state multiple times in above code it will update the state only once and it will not update the state multiple times 
    // above code merge all the update and then update the state only once
    // if we want to update the state multiple times then we need to use the below code
    // below setCount is setting the prevCount which refers to the previous value of the same state
    setCount(prevCount => prevCount + 1); 
    setCount(prevCount => prevCount + 1); // here prevCount is the last updated state  
    setCount(prevCount => prevCount + 1); 
    setCount(prevCount => prevCount + 1); 

    console.log('increase - ', count); 
  }

  const decreaseValue = () => {

    if (count > 0) {
      count = count - 1;
    }

    setCount(count); // this is the way to update the value of the variable and re-render the component
    console.log('decrease - ', count);
  }

  return (
    <>
      <div>

        <button>
          number: {count}
        </button>

        <button onClick={addValue}>increase</button>
        <button onClick={decreaseValue}>decrease</button>

        {/* here we used count in so many tags so if we update the count variables then it will going to rerender all components where this variable is used */}
        <div>
          <a href="#">{count}</a>
          <h1>{count}</h1>
        </div>
      </div>
    </>
  )
}


// this is the way to pass the props to the component all value of the props will be available in the props object
function Car(props) {
  return (
    <>
      <div>
        <h1>this is values of props</h1>
         <p>props means properties from the html we give this props by attribute and we get all provided value inside props object</p>

        <h2>props.company: {props.company}</h2>
        <h2>props.name: {props.name}</h2>
      </div>
    </>
  )
}

export  {
  App,
  Car
}
