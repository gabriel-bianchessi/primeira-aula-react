import { useContext, useState } from "react"
import { ToDoListContext } from "./ToDoListContextProvider"

export default function() {
  const {itens} = useContext(ToDoListContext)
  return <>
    <h1>To-do list: {itens.length} afazeres</h1>
  </>
}