export default function Home() {
  return (
   <div class="container-fluid">
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="text-center">
        <img src="/assets/off.png" />
        </div>
        <h1 className="text-center">Lampâda On/Off</h1>
        <div className="text-center">
        <button className="btn btn-light">Ligar</button>
        <button className="btn btn-dark">Desligar</button>
       </div>
      </div>
    </div>
   </div>
  );
}
