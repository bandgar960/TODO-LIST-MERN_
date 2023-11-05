
import './style.css'

import React from "react";

import { useAuth0 } from "@auth0/auth0-react";


function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button className="btn" onClick={() => loginWithRedirect()}>Log In
          
      </button>
      
    )
  )
    }

export default Login

  
  
  
  
  
  
  