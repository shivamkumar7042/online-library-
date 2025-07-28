// Importing header and Outlets
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

function App() {
 
// Rendering Header and outlets
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
