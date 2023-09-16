
import { Link } from "react-router-dom"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch}= useContextGlobal();

  return (

    <nav className={state.theme == 'light' ? "light" : "dark"}>

      <div>
        <Link to='/'> Home </Link>
        <Link to='/favs'> Favs </Link>
        <Link to='/contact'> Contact </Link>
        
      </div>
      <button className='button' onClick={() => dispatch({ type: "SWITCH_THEME", payload: state.theme== 'light' ? 'dark' : 'light' })}>Tema</button>
    </nav>
  )


}

export default Navbar