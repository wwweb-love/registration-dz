import './App.css'
import { Routes, Route } from "react-router-dom"
import { Login, LeaveARequest } from './pages'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LeaveARequest />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
