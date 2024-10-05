import React, { createContext, useState } from 'react'
export const mycontext = createContext();
const Context = ({children}) => {
    const [plus, setplus] = useState(0);
  return (
    <div>
      <mycontext.Provider value={{plus,setplus}}>
                 {children}
      </mycontext.Provider>
    </div>
  )
}

export default Context
