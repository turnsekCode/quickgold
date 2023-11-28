import React, { useState, useEffect } from "react";

function searchTerm(term) {
  return function (x) {
    return x.nombreCiudad.includes(term.toLowerCase()) || !term;
  };
}

const Buscador = ({ ciudades }) => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const listaCiudades = ciudades?.arrayCiudades;
  useEffect(() => {
    setData(listaCiudades);
  }, [listaCiudades]);
  return (
    <div>
      <input
        placeholder="Encuentra ciudad"
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>
        {data.filter(searchTerm(term)).map((ciudad) => {
          return (
            <div key={ciudad?.id}>
              <a href={ciudad?.urlCiudad}>{ciudad?.nombreCiudad}</a>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Buscador;
