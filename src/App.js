import React, { useEffect } from 'react'
import './App.css'
import { Button, Input } from '@material-ui/core'
import { Menu } from './components/Menu/Menu'
import { ListadoPersonas } from './components/List/List'

export const App = () => {
  const [personas, setPersonas] = React.useState([])
  const [newPersona, setNewPersona] = React.useState('')
  const addPersona = () => {
    const personasNew = [...personas]
    personasNew.push({ id: newPersona, nombre: newPersona })
    setPersonas(personasNew)
    setNewPersona('')
  }

  useEffect(() => {
    const fetchData = async () => {}
    fetchData()
  }, [])

  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <ListadoPersonas personas={personas} />
        <span>
          <Input placeholder="Nombre" onChange={e => setNewPersona(e.target.value)} value={newPersona}></Input>
          <Button onClick={addPersona} variant="contained" color="primary">
            Añadir persona
          </Button>
        </span>
      </header>
    </div>
  )
}
