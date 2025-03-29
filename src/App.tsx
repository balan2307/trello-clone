import React from "react"
import Navbar from "./components/Navbar"
import Board from "./components/Board"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br 0">
      <div className="relative">
        <Navbar></Navbar>
        <div className="container px-2 py-8 max-w-[100%]">
          <Board></Board>
        </div>
      </div>
    </div>
  )
}

export default App 