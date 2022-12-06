import * as React from 'react'
import { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState("")

  useEffect(() => {
    fetch("/hello").then(
      res => res.text()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  
  

  return (
    <>
      {data}
    </>
  );
}

export default App;
