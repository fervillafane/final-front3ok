import React, { useState } from "react";


const Form = () => {

  const [name, setName]=useState("");
  const [ mail, setMail]=useState("");

  const [Info, setInfo] = useState(false);
  const [Error, setError] = useState(false);

  const validEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  const handleSubmit = (e) => {e.preventDefault();

    if(name.length > 5 && mail.match(validEmail)) {
      setInfo(true);
      setError(false);
      console.log(name + mail);
    } else {
      setInfo(false);
      setError(true)
    }
  }
  const onChangeName = (e)=> setName(e.target.value);
  const onChangeMail = (e)=> setMail(e.target.value);





  return (
    <div onSubmit={handleSubmit} className="form">
      <form>
        <input type="text" placeholder="Ingrese su Nombre"  value={name} onChange= {onChangeName} label="Nombre completo"required="required"></input>
        <input type="mail" placeholder="Ingrese su email" value={mail} onChange= {onChangeMail}  id= "mail" label="Email" required="required"></input>
        <button type="submit">Enviar</button>
      </form>
      
      {Info && <p>{`Gracias ${name}, te contactaremos vía mail`}</p>}
      {Error && <p >Por favor, Verifique su información nuevamente.</p>}
    </div>
  );
};

export default Form;
