import Navbar from './Component/Navbar'
import User from "./Component/User";
import './App.css'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { UserProvider } from "./Context/UserContext.jsx";

function App() {
  
  return(
    <ThemeProvider>
      <UserProvider>
       <Navbar />
       <User />
      </UserProvider>
    </ThemeProvider>
   
  )
}

export default App
