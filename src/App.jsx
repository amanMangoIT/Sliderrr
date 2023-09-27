import { useState } from 'react'

import Carousel from './Carousel'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
      <Carousel/>
      </main>
    </>
  )
}

export default App
