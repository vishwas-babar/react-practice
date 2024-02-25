import { useEffect, useState, useCallback } from 'react'

function App() {

  const [randomPassword, setRandomPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(10);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);

  // when any of the value is changed then generate function is called
  useEffect(() => {
    generatePassword();
  }, [passwordLength, includeSymbols, includeNumbers]);


  const generatePassword = useCallback(() => {
    const lettersWithChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lettersWithNumbers = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const lettersWithSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+';
    const lettersWithNumbersAndSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+';
    let password = '';
    let length = passwordLength;
    let char;

    if (includeSymbols && includeNumbers) {
      char = lettersWithNumbersAndSymbols
    } else if (includeNumbers) {
      char = lettersWithNumbers;
    } else if (includeSymbols) {
      char = lettersWithSymbols;
    } else {
      char = lettersWithChar;
    }

    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * char.length);
      password += char[random];
    }

    setRandomPassword(password);
  }, [passwordLength, includeSymbols, includeNumbers, randomPassword])

  const copyToClipboard = async () => {
    try {
      const permissions = await navigator.permissions.query({ name: "clipboard-write" })
      if (permissions.state === "granted" || permissions.state === "prompt") {
        await navigator.clipboard.writeText(randomPassword);
        alert('Text copied to clipboard!');
      } else {
        throw new Error("Can't access the clipboard. Check your browser permissions.")
      }
    } catch (error) {
      alert('Error copying to clipboard:', error);
    }
  };

  // generatePassword(); // if we call any function inside useEffect then it will go into infinite loop

  return (

    <>
      <div className='w-full h-screen flex flex-col items-center bg-black'>
        <h1 className='text-center text-white text-5xl mt-32 '>Random Password Generator</h1>

        <div className='h-fit w-96 bg-slate-900 rounded-md mt-12 shadow-lg p-3 flex flex-col'>

          <div className='flex items-center justify-between bg-white rounded-md overflow-hidden '>
            {/* <p className='p-2'>{randomPassword}</p> */}
            <input className='w-full p-2' type="text" placeholder='password' value={randomPassword} />
            <a onClick={copyToClipboard} className='h-full bg-green-500 flex items-center justify-center px-4 border-l cursor-pointer'>copy</a>
          </div>


          <form className='mt-8'>
            <div className='flex items-center justify-between'>
              <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range ({passwordLength})</label>
              <input id="default-range" onChange={event => setPasswordLength(event.target.value)} defaultValue={'10'} type="range" min={'1'} max={'30'} class=" w-60 h-2 bg-gray-200 rounded-lg transition-all duration-300 appearance-none cursor-pointer dark:bg-gray-700 flex items-center justify-center" />

            </div>

            <div className='flex gap-4'>
              <div className='flex items-center gap-1'>
                <label htmlFor="numberIncluded" className='text-white'>Number </label>
                <input name='numberIncluded' id="Numbers" type="checkbox" onChange={event => setIncludeNumbers(event.target.checked)} defaultChecked={includeNumbers} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div className='flex items-center gap-1'>
                <label htmlFor="symbolIncluded" className='text-white'>Symbol</label>
                <input name='symbolIncluded' id="symbol" type="checkbox" onChange={event => setIncludeSymbols(event.target.checked)} defaultChecked={includeSymbols} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              </div>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default App
