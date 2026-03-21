import './App.css'
import { Routes, Route } from "react-router-dom"
import { Login, LeaveARequest, ApplicationsFromTheForm } from './pages'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LeaveARequest />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/app-from-the-form' element={<ApplicationsFromTheForm />}></Route>
      </Routes>
    </>
  )
}

export default App
