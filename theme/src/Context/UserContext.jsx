
import { createContext, useState } from 'react';

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false); // Initially, user is not authenticated

  
  return (
    <userContext.Provider value={{ user, setUser}}>
      {children}
    </userContext.Provider>
  );
};

export { userContext, UserProvider };
