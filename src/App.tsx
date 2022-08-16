import { createContext, useState } from 'react'
import './App.css'
import Header from './todolist/Header'
import ToDoList from './todolist/ToDoList'
import { ToDoListContextProvider } from './todolist/ToDoListContextProvider'

export default function App() {
  return <>
    <div className="App">
      <ToDoListContextProvider>
        <Header></Header>
        <ToDoList title='Digita ae'/>
      </ToDoListContextProvider>
    </div>
  </>
}