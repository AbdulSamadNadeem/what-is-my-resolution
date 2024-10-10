import React, { createContext,  useState } from 'react'

export const ChangeTheme = createContext(false)

const Theme = ({children}) => {
    const [isThemeDark , setisThemeDark] = useState(false)
  return (
    <>
      <ChangeTheme.Provider value={{isThemeDark , setisThemeDark}}>
          {children}
      </ChangeTheme.Provider>

        
    </>
  )
}

export default Theme