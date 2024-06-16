import React, { Children, createContext, useState } from 'react'

export const LoginContext = createContext("");

const ContextProvider = ( {Children}) => {
     
    const [loginData,setLoginData] = useState("");

  return (
    <>
       <LoginContext.Provider value={{loginData,setLoginData}} >
        {Children}
       </LoginContext.Provider>
    </>
  )
}

export default ContextProvider