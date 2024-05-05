// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home-page'
import RecipePage from './pages/recipe-page'
import NavBar from './components/ui/nav-bar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/> {/* 👈 Renders at /app/ */}
        <Route path="/recipes/:recipeId" element={<RecipePage/>}/> 
        <Route path="*" element={<p>This page does not exist</p>}/> 
      </Routes>
    </>
  )
}

export default App
