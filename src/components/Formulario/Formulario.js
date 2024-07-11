import './Formulario.css';
import Boton from '../Boton/Boton';
import Todos from '../Todos/Todos';
import Todo from '../Todo/Todo';

const Formulario = ({setTareas, tarea}) => {
        const enviarForm = (e) => {
          e.preventDefault();
          let completado;
          const tarea = document.getElementById('tarea').value.trim();
          if (!tarea) {
            alert('Completar todos los campos');
            return;
          }

          const fechaIn = Date.now();
          const tareaa = {
            fechaIn,
            completado,
            tarea
          };

          if (window.confirm("¿Desea agregar la siguiente tarea?")) {
            setTareas((tarea) => [...tarea, tareaa]);
          }
        };
        
        
return (
    <form onSubmit={enviarForm} className="Formulario">
        <label>Ingresar tarea</label>
     <input type="text" id="tarea" required placeholder='kali jali'></input>
     <div className='botonjs'>
        <Boton className='botonFormulario' type="submit" text="Agregar tarea"></Boton> 
        <Boton className='botonFormulario' type="submit" text="Tarea mas rapida"></Boton>
        <ul>
            {tarea.map(t => (<Todo tarea={t}></Todo>))}
        </ul>

     </div>
     
        </form>
)
}
    




export default Formulario;