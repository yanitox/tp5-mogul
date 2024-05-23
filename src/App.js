
import './App.css';
import React from 'react';
import Titulo from './components/Titulo/Titulo';
import Formulario from './components/Formulario/Formulario';



function App() {
  return (
    
      <>
      
        <div className='Titulo'>
        <Titulo>Todo List</Titulo>
        </div>
        

        <div class='container'>
          <Formulario className="formulario"></Formulario>
        </div>

     
       
        
      </>
     
    
  );
}

export default App;