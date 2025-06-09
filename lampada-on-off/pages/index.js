import { Html, Head, Main, NextScript } from "next/document"
import { useState } from "react";
let clickCount = 0;
let isQueimada = false;
 
function On() {
  const lampada = document.querySelector("img");
  lampada.src = "/assets/on.png";
  handleClick();
}
function Off() {
  const lampada = document.querySelector("img");
  lampada.src = "/assets/off.png";
  handleClick();
}
 
 
function queimado() {
  const lampada = document.querySelector("img");
  lampada.src = "/assets/Lâmpada.png";
 
}
function handleClick() {
  clickCount++;
  if (clickCount >= 10 && !isQueimada) {
    queimado();
    isQueimada = true;
  } else if (isQueimada) {
    alert("A lâmpada já está queimada!");
    queimado();
  } else {
   
  }
}
export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1 className="text-center">Lâmpada On/Off</h1>
          <div className="text-center">
            <img src="/assets/off.png" alt="Lâmpada" className="img-fluid " style={{ maxWidth: "300px", height: "auto" }} />
          </div>
          <div className="text-center">
            <button className="btn btn-light" onClick={On}>Ligar</button>
            <button className="btn btn-dark" onClick={Off}>Desligar</button>
          </div>
        </div>
      </div>
    </div>
  );
}