import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import data from './data'
import Card from './components/Card'

console.log(data)

function App() {
  
  const mainCard = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      
      />
    )
  })


  return (
    <div className="App">
      <Header />
      <main>
        {mainCard}
      </main>


    </div>
  )
}

export default App
