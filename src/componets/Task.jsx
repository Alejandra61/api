import React, { useEffect, useState } from "react";

const Task = () => {
  const [gif, setGif] = useState([]);

  useEffect(() => {
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
  const gifData = () => {};

  console.log(useEffect);

  return (
    <>
      <div className="container-sm position-relative">
        <div className="text-center">
          <button
            className="btn btn-primary btn-lg"
            type="button"
            onClick={gifData} /* onClick={() => setCount(gifData + 1)} */
          >
            clik
          </button>
        </div>
      </div>

      {gif && (
        <section className="container m-c">
          <div className="row">
            {gif.map((data) => {
              console.log(data);
              return (
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <img className="gif" alt=" " src={data.images.original.url} />
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Task;
//capturar los valores
//mirar en la api que valores recive y donde mandaria la pagina
//mirar donded la srenderizo
