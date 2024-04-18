import { useContext } from "react"
import { userContext } from "../Context/UserContext"

const User = () => {
    const {user, setUser} = useContext(userContext);

    return(
       <div>
         <h3 style={{color : user === false ? 'red' : 'green'}}>User : {user ? 'LoggedIn' : 'LoggedOut'}</h3>
         <button onClick={() => setUser(!user)}>{user ? 'Logout' : 'Login'}</button>
       </div>
        
    )
}

export default User;