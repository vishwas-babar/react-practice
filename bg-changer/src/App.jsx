import { useState } from 'react'

function App() {
  const [color, setColor] = useState('bg-red-500');
  const colorArray = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-pink-500', 'bg-purple-500', 'bg-indigo-500', 'bg-gray-500', 'bg-black', 'bg-white'];

  function changeColor(colorName) {
    setColor(colorName);
    
  }

  return (
    <>
      <div className={`h-screen w-full transition-all duration-300 ease-linear ${color} `}>
        {/* <h1 className='mx-auto mt-20 px-4 py-2  bg-green-500 text-lg'>color changer</h1> */}


        <div className='fixed left-1/2 translate-x-[-50%] bottom-12 w-2/3 bg-white rounded-md p-4 flex flex-wrap items-center justify-center gap-3'>
          <a onClick={() => setColor("bg-red-500")} className= 'transform cursor-pointer bg-red-500 px-3 py-2 rounded-md text-white shadow-md transition-all duration-300 ease-in-out hover:scale-110'>red</a>
          <a onClick={() => setColor("bg-blue-500")} className= 'transform cursor-pointer bg-blue-500 px-3 py-2 rounded-md text-white shadow-md transition-all duration-300 ease-in-out hover:scale-110'>blue</a>
          <a onClick={() => setColor("bg-green-500")} className= 'transform cursor-pointer bg-green-500 px-3 py-2 rounded-md text-white shadow-md transition-all duration-300 ease-in-out hover:scale-110'>green</a>
          <a onClick={() => setColor("bg-yellow-500")} className= 'transform cursor-pointer bg-yellow-500 px-3 py-2 rounded-md text-white shadow-md transition-all duration-300 ease-in-out hover:scale-110'>yellow</a>
          <a onClick={() => setColor("bg-pink-500")} className= 'transform cursor-pointer bg-pink-500 px-3 py-2 rounded-md text-white shadow-md transition-all duration-300 ease-in-out hover:scale-150'>pink</a>
          <a onClick={() => setColor("bg-purple-500")} className= 'transform cursor-pointer bg-purple-500 px-3 py-2 rounded-md text-white shadow-md transition-all duration-300 ease-in-out hover:scale-110'>purple</a>
          <a onClick={() => setColor("bg-indigo-500")} className= 'transform cursor-pointer bg-indigo-500 px-3 py-2 rounded-md text-white shadow-md transition-all duration-300 ease-in-out hover:scale-110'>indigo</a>
          <a onClick={() => setColor("bg-gray-500")} className= 'transform cursor-pointer bg-gray-500 px-3 py-2 rounded-md text-white shadow-md transition-all duration-300 ease-in-out hover:scale-110'>gray</a>
          <a onClick={() => setColor("bg-black")} className= 'transform cursor-pointer bg-black px-3 py-2 rounded-md text-white shadow-md transition-all duration-300 ease-in-out hover:scale-110'>black</a>
          <a onClick={() => setColor("bg-white")} className= 'transform cursor-pointer bg-white px-3 py-2 rounded-md text-black shadow-md transition-all duration-300 ease-in-out hover:scale-110'>white</a>
        </div>

      </div>
    </>
  )
}

export default App
