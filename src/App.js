import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/NavBar/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {originals,Action} from './urls'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={Action} title='Action' isSmall />
    </div>
  )
}

export default App