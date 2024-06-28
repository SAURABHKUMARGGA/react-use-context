import './App.css'
import {Outlet} from 'react-router-dom'
import Navbar from './Component/Navbar'
import { DataProvider } from './Data'
function App() {
  const data = {
    name:"saurabh kumar",
    rollnumber:45,
}

  return (
    <>
      <Navbar/>
      {/* <DataProvider> */}
      <Outlet context={data}/>
      {/* </DataProvider> */}
    </>
  )
}

export default App
