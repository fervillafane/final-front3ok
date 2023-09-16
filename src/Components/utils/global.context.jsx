
import {useContext,createContext,useEffect,useReducer} from "react";
import axios from "axios";



const initialState = {theme: "light",dentists:[],dentistDetail:{}, favs: JSON.parse(localStorage.getItem('favs')) || []}

const ContextGlobal= createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case 'GET_DENTISTAS':
            return {...state, dentists: action.payload}
        case 'GET_DENTISTA':
            return {...state, dentistDetail: action.payload}
        case 'ADD_FAV':
            return{... state, favs: [...state.favs, action.payload] }
        case 'SWITCH_THEME':
            return {...state,theme: state.theme === "light" ? "dark" : "light"}
        default:
            throw new Error()    
    }
}


const ContextProvider =({children})=> {

  const [state, dispatch] = useReducer(reducer, initialState)
  const urlApi= 'https://jsonplaceholder.typicode.com/users'

  useEffect(()=> {
      axios(urlApi)
      .then(res=> dispatch ({type: 'GET_DENTISTAS', payload: res.data}))}, [urlApi])


  useEffect(()=> {
      console.log(state.favs)
      if(state.favs.length < 1) {
      localStorage.removeItem('favs')
      } else {
      localStorage.setItem('favs', JSON.stringify(state.favs))
      }
  },[state.favs])
  
  

  return(
      <ContextGlobal.Provider value= {{state, dispatch}}>
          {children}
      </ContextGlobal.Provider>
  )
}

export default ContextProvider
export const useContextGlobal= ()=> useContext(ContextGlobal) 