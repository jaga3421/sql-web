import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Storage from './Storage'
import Settings from './Settings'
import Editor from './editor'

export default function Dashboard() {
 

  return (
  <Router>
        <div className="flex h-screen">
          <div className="w-16 flex flex-col items-center bg-gray-200 h-full">
            <img src="placeholder.jpg" alt="placeholder" className="w-16 h-16" />
           <Link to="/editor"><div className="w-12 h-12 bg-gray-400 my-2"></div></Link>
            <Link to="/storage"><div className="w-12 h-12 bg-gray-400 my-2"></div></Link>
            <Link to="/settings"><div className="w-12 h-12 bg-gray-400 my-2"></div></Link>
          </div>
          <div className="flex-grow bg-gray-100 h-full p-2">
            <Routes>
              <Route path="/" element={<Editor />} />
              <Route path="/storage" element={<Storage />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
  </Router>
  )
}