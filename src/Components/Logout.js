import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Login from './Login'



const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();
  
  

  return (
    
    
        isAuthenticated&&(
            <button onClick={() => logout()}>Logout
                <Login/>
      </button>
  
    
        )
    
    
      
  );
}
  

export default Logout;
