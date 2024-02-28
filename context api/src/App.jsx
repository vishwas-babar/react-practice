import React, { useEffect } from 'react';
import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  // if i given any properties or function inside createContext({ a, b, c }) like then we can specify thier functionality directoly here by creating the same name variables and function here

  const [themeMode, setThemeMode] = useState("light");

  function darkTheme() {
    setThemeMode("dark");
  }

  function lightTheme() {
    setThemeMode("light");
  }


  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove('light', 'dark');

    html.classList.add(themeMode);

  }, [themeMode]);


  function toggleThemeChangebtn() {
    if (themeMode == "light") {
        darkTheme();
    }else{
      lightTheme();
    }
  }


  return (
    <>

    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>

    </>
  )
}

export default App