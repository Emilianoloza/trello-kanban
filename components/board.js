import List from '../components/list'
import Card from '../components/card'
import { useState, useEffect } from 'react'

const todoList = [
    {
        text: 'Toma de Requerimientos',
        id: '72736273'
    },
    {
        text: 'Diseño de la Interfaz',
        id: '72736274'
    }
]

const inProgressList = [
    {
        text: 'Reunión con el cliente',
        id: '72736275'
    }
]

const doneList = [
    {
        text: 'Reunión con el equipo de desarrollo',
        id: '72736276'
    }
]

export default function Board() {
  const [dragged, setDragged] = useState(null)

  const [listOflists, setlistOflists] = useState(
    {   todoList,
        inProgressList,
        doneList
    })
  
  function handleDrop(e){
        e.preventDefault()
        const list = e.currentTarget.dataset.list;
        const listOflistsClone = structuredClone(listOflists)
        const newList = listOflistsClone[dragged.list].filter(item => item.id !== dragged.data.id)
        listOflistsClone[dragged.list] = newList
        listOflistsClone[list].push(dragged.data)
        setlistOflists(listOflistsClone)
        console.log(e)
  }

  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>
      Tablero de tareas
      </h1>
      <main className='flex justify-between gap-4'>
        <List
        name= "TODO"
        handleDrop={handleDrop}
        id= "todoList"
        >
          {listOflists.todoList.map((item) => (
            <Card setDragged={setDragged} {...item}  key={item.id}/>
          ))}
        </List>
        <List
        name= "In Progress"
        handleDrop={handleDrop}
        id= "inProgressList"
        >
          {listOflists.inProgressList.map((item) => (
            <Card setDragged={setDragged} {...item}  key={item.id}/>
          ))}
        </List>
        <List
        name= "Done"
        handleDrop={handleDrop}
        id= "doneList"
        >
          {listOflists.doneList.map((item) => (
            <Card setDragged={setDragged} {...item}  key={item.id}/>
          ))}
        </List>
      </main>
    </div>
  )
}
