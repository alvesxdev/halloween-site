import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Home from './pages/home'
import Services from './pages/services'
import NewsLetter from './pages/newsletter'

function App() {
  const [count, setCount] = useState(0)
  const [blackHeader, setBlackHeader] = useState(true)

  useEffect (()=> {
    const scrollListener = () => {
      if(window.scrollY > 50) {
        setBlackHeader(true);
      }else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
    }, [])

  
  return (
    <div className="App">
      <Header black={blackHeader}/>
      <Home />
      <Services />
      <NewsLetter />
    </div>
  )
}

export default App
