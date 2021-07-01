import { Giphy } from "./giphy";
import React, { useEffect, useState } from "react";

const Task = () => {
  const [gif, setGif] = useState([]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  //const [loading, setLoading] = useState(false); pendiente de implementar

  const giphy = new Giphy();
  const apiKey = giphy.api_key;
  useEffect(() => {
    getData(giphy);
  }, []);

  /*se crea una funcion*/
  const getData = async () => {
    const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&offset=${offset}&`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setGif(data.data);
      });
  };
  const gifData = () => {
    setOffset((prevState) => prevState + limit);
    getData();
  };

  return (
    <>
      <div className="container-sm position-relative">
        <div className="text-center">
          <button
            className="btn btn-primary btn-lg"
            type="button"
            onClick={() => gifData()}
          >
            Load More Gifts
          </button>
        </div>
      </div>

      {gif && (
        <div className="container m-c">
           <div className="row">
          {gif.map((data) => {
            return (
              <div key={data.id} className="col-lg-4 col-md-6 col-sm-12">
                
                  <img
                    className="gif"
                    alt=" "
                    src={data.images.original.url}
                  />
                
              </div>
            );
          })}
          </div>
        </div>
      )}
    </>
  );
};

export default Task;