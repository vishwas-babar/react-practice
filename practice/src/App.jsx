import { useState } from 'react'
import {
 ButtonWithOneState, ButtonWithParentState
} from './components/Pracitce'


function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
    <div className=' w-52 h-fit border border-black flex flex-col gap-2 p-3'>

      <h1 className=' font-bold'>here we 3 buttons all are using there one state</h1>
      <p>their state declared inside the Button components</p>
      <ButtonWithOneState />
      <ButtonWithOneState />
      <ButtonWithOneState />
    </div>

    <div className=' w-52 h-fit border border-black flex flex-col gap-2 p-3'>
    <h1 className=' font-bold'>using state in parent component</h1>
      <p>here we did the state lifting and now we are going to pass the count variable as a parameter to Button component</p>
      <ButtonWithParentState count={count} increment={increment} />
      <ButtonWithParentState count={count} increment={increment} />
      <ButtonWithParentState count={count} increment={increment} />
    </div>
    </>
  )
}

export default App
