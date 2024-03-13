import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Result from './screens/Result'
import Admin from './screens/Admin'
import PageNotFound from './screens/PageNotFound'

const App = () => {
  return (
    <main className="p-10 text-gray-800">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/result' element={<Result/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
    </main>
  )
}

export default App