import './Todo.css';

const Todo = (tarea) => {
    let estado = false;
    const CambiarEstado = () => {
        estado = !estado;
    }
    if (estado){
        const flecha = "tachado";
    }
    return (
        <>
        <div className="papafritaa"> 
       
        <li className="lineaa" class = {estado} type = "checkbox">{tarea.target}</li>
       
        </div>
        </>
        )
}

export default Todo;