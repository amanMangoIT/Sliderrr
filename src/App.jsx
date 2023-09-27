import { useState } from 'react'

import Carousel from './Carousel'
import './App.css'
import SlickCarousel from './SlickCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
      {/* <Carousel/> */}
      <SlickCarousel/>
      </main>
    </>
  )
}

export default App
