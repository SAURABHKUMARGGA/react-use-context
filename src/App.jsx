import './App.css'
import {Outlet} from 'react-router-dom'
import Navbar from './Component/Navbar'

function App() {
  const data = {
    name:"saurabh kumar",
    rollnumber:45,
}

  return (
    <>
    
      <Navbar/>
      <Outlet context={data}/>
    </>
  )
}

export default App
