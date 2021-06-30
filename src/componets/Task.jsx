import React, { useEffect, useState } from "react";

const Task = () => {

  const [gif, setGif] = useState([]);
  //const [loading, setLoading] = useState(false);

  //aca se va a ejecutar una accion
  useEffect(() => {
    //console.log('hola') api.giphy.com/v1/gifs/trending/&<--esto son parametros
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=XIc0wxtTo74x8vfSCP39lZgqFyuohIRA&limit=10&ofset=0&q="
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setGif(data.data);
      });
    
  }, []);
  console.log(gif);

  /*se crea una funcion*/
  const gifData = () => {
    console.log(useEffect);
    //setVisible(!visible);
    //console.log(gifes)
  };

  return (
    <>
      <div className="container position-relative m">     
        <div className="d-grid gap-2 d-md-block position-absolute top-100 start-50 translate-middle mt-1 bi bi-caret-down-fill">
          <button className="btn btn-primary" type="button"  onClick={gifData}  /* onClick={() => setCount(gifData + 1)} */>
            clik
          </button>
        </div>
      </div>

      {gif && (
        <div className="container">
          {gif.map((data) => {
            console.log(data);
            return <div className="row align-items-start"><div className="col"> <img alt=" " src={data.images.original.url} /></div> </div>;
          })}
          {/* <img src="https://media0.giphy.com/media/Wz8nNJ2JqlDhk5gYew/200.gif?cid=1b2dc9c2lrueis8jo5od49jt6jfj5tb3uicwlq11ajaml89i&rid=200.gif&ct=g" /> */}
        </div>
      )}
    </>
  );
};

export default Task;
//hook para consumir una api, esto permite ejecutar acciones una vez que el componente se pintado
//se estara usando useEffect el cual inidca a react que el componente TIENE que hacer algo despues de renderiarse
//una vez se "pinta" el componente se va a ejcutar el useEffect
//el fetch es para hacer un llamado a una url, acceder y manipular partes del canal HTTP, tales como peticiones y respuestas.
//useState es un Hook que te permite añadir el estado de React a un componente de función.
