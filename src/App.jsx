import "./App.css";
import { useState } from "react";
import Swal from "sweetalert2";
import allimenttee from "./img/allimentee.png";
import { Button } from "./components/button";
function App() {
  const [bool, setBool] = useState(false);

  const handleClick = () => {
    return setBool(true);
  };

  const Modal = () => {
    Swal.fire({
      title: "Site em construção",
      imageUrl:
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageWidth: 400,
      imageHeight: 200,
      html: `
    Acesse o <b>github</b> do projeto
    <a href="#">Aqui!</a>
  `,
    });
    setBool(false);
  };
  return (
    <div className="container">
      {bool && Modal()}
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 row">
          <img
            src={allimenttee}
            class="img-fluid img"
            alt="imagem-allimentee"
          />
          <span className="row align-items-center justify-content-center fantasyName">
            Allimentee
          </span>
          <span>
            <b className="row align-items-center justify-content-center word">
              CONECTANDO CORAÇÕES, ALIMENTANDO VIDAS
            </b>
          </span>
        </div>
        <div className="col-md-6 row">
          <div className="titleX">Seja um apoiador!</div>
          <div className="text">
            "Contribuir para este site de doação de alimentos é mais do que doar
            comida, é alimentar esperanças e construir um mundo mais justo.
            Junte-se a nós e faça parte desta corrente de solidariedade!"
          </div>
          <Button
            onClick={handleClick}
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            children={"Saiba mais"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
