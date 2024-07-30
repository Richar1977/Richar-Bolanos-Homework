import './App.css'
import { Details } from './components/Details/detailsComponent'
import { Imagen } from './components/Imagen/imagenComponent'
import { Titulo } from './components/Titulo/tituloComponent'



function App() {

  return (
    <div className='card'>
      <Imagen />
      < Titulo title='SUPERMAN'/>
      < Details details ='El Hombre de Acero'/>
    </div>
  )
}

export default App