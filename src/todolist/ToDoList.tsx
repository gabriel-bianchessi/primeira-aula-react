import { useContext, useEffect, useState } from "react"
import { ToDoListContext} from "./ToDoListContextProvider"

export default function (props: {title: string}) {
  const {itens, setItens} = useContext(ToDoListContext)
  
  const store = () => {
    localStorage.setItem("localData", JSON.stringify(itens))
  }
  
  useEffect(store, [itens])

  const adicionar: React.KeyboardEventHandler<HTMLInputElement> = ev => {
    if(ev.code != "Enter") return
    ev.preventDefault()
    setItens([...itens, ev.currentTarget.value])
    ev.currentTarget.value = ""
  }
  
  const remover = (removeidx: number) => {
    setItens(itens.filter((_, idx) => idx != removeidx))
  }

  return <>
    <input type="text" onKeyUp={adicionar} placeholder={props.title}/>
    { itens.map((listElement, idx) => <div key={idx} onClick={() => remover(idx)}>{listElement}</div>)}
  </>
}