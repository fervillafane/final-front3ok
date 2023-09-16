import React from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Context/Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(undefined);
  const { theme } = useContext(ContextGlobal);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {setDentist(data);})
      .catch((error) => console.error('Error fetching dentist details:', error));
  }, [id]);
    


  return (
    <>
      <h1>Detail Dentist id </h1>
      {dentist ? (
        <div style={{ textAlign:'center'}} className="card">
            <h1>Name:{dentist.name}</h1>
            <img src={require("../img/doctor.jpg")} alt="Card" width={200}/>
            <h3>Phone:{dentist.phone}</h3>
            <h3>Website: {dentist.website}</h3>
            <h3>Email: {dentist.email}</h3>        
        </div>
      ) : null}
    </>
  )
}

export default Detail

