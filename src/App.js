
import './App.css';
import React from 'react';
import Titulo from './components/Titulo/Titulo';
import Formulario from './components/Formulario/Formulario';
import { useState } from 'react';




function App() {
  const [tarea, setTareas] = useState([
    {
      fechaIn: Date.now(),
      completado: new Date("2024/06/05 9:34"),
      tarea: "kal"
    }
  ])
  return (
    
      <>
      
        <div className='Titulo'>
        <Titulo></Titulo>
        </div>
        <div class='container'>
          <Formulario setTareas={setTareas} tarea={tarea} className="formulario"/>
        </div>
      </>
     
    
  );
}

export default App;