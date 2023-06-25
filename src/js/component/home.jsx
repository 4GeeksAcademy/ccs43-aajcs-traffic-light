import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const [color, setColor] = useState(null);
  const [condicion, setCondicion] = useState(false);
  const [condicionColor, setCondicionColor] = useState(false);
  console.log(condicion);
  useEffect(() => {
    if (condicion) {
      const interval = setInterval(() => {
        if (color === "red") {
          setColor("yellow");
        }
        if (color === "yellow") {
          setColor("green");
        }
        if (color === "green" && !condicionColor) {
          setColor("red");
        }
        if (color === "green" && condicionColor) {
          setColor("purple");
        }
        if (color === "purple") {
          setColor("red");
        }
        console.log(color);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [color, condicion]);
  return (
    <div className="container " style={{ height: "100vh" }}>
      <div className="h-100 d-flex flex-column justify-content-center align-items-center ">
        <div className="bg-black d-flex flex-column ">
          <span className="diametro1  m-3"></span>
        </div>
        <div className="bg-black d-flex flex-column rounded-4">
          <span
            className={`${
              color === "red" && "luz"
            } diametro rojo rounded-circle m-3`}
            onClick={() => {
              setColor("red");
            }}
          ></span>
          <span
            className={`${
              color === "yellow" && "luz"
            } diametro amarillo rounded-circle m-3`}
            onClick={() => {
              setColor("yellow");
            }}
          ></span>
          <span
            className={`${
              color === "green" && "luz"
            } diametro verde rounded-circle m-3`}
            onClick={() => {
              setColor("green");
            }}
          ></span>
          {condicionColor && (
            <span
              className={`${
                color === "purple" && "luz"
              } diametro purpura rounded-circle m-3`}
              onClick={() => {
                setColor("purple");
              }}
            ></span>
          )}
        </div>
        <button
          type="button"
          class="btn btn-secondary btn-lg"
          onClick={() => setCondicion(!condicion)}
        >
          {!condicion ? "Automatico" : "Manual"}
        </button>
        <button
          type="button"
          class="btn btn-secondary btn-lg"
          onClick={() => setCondicionColor(!condicionColor)}
        >
          {!condicionColor ? "color extra" : "quitar color"}
        </button>
      </div>
    </div>
  );
};

export default Home;
