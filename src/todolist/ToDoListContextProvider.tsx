import React, { createContext, useState } from "react"

type T = {
  itens: string[]
  setItens: React.Dispatch<React.SetStateAction<string[]>>
}

export const ToDoListContext = createContext<T>({} as T)

export const ToDoListContextProvider = (props: React.PropsWithChildren) => {
  const [itens, setItens] = useState(() => {
    const dadosLocais = localStorage.getItem("localData")
    if(dadosLocais) {
      return JSON.parse(dadosLocais) as string[]
    }
    return ["Dunha", "Dirce"]
  })

  return <>
    <ToDoListContext.Provider value={{itens, setItens}}>
      {props.children}
    </ToDoListContext.Provider>
  </>
}