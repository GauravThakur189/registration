import React, { Children, createContext, useState } from 'react'

export const LoginContext = createContext("");

const Context = ({Children}) => {
    const [logindata,setLoginData] = useState('');
  return (
    <LoginContext.Provider value={{logindata,setLoginData}}>
        {Children}
    </LoginContext.Provider>
  )
}

export default Context