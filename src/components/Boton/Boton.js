import './Boton.css';

const Boton = ({type, text}) => {
   
   return <div className='botonjs'> <button type={type} className="botonFormulario">{text}</button> </div>
}

export default Boton;