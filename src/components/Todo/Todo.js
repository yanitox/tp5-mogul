import './Todo.css';

const Todo = (tarea) => {
    let estado = false;
    const CambiarEstado = () => {
        estado = !estado;
    }
    if (estado){
        const kali = "tachado";
    }
    return (
        <input class = {estado} type = "checkbox">tarea</input>
    )
}

export default Todo;