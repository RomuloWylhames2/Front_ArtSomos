import { Container } from "react-bootstrap";
import "assets/styles/Construcao.css";
import Constru from "assets/images/construcao.png";

const Construcao = () => {
  return (
    <div className="ConstrucaoContainer">
      <Container>
        <div className="Construcao">
        <div className="utils">
        <img src={Constru} alt="" />
        </div>
          <p>Página em construção!</p>
          
          Em breve mais novidades para você!
        </div>
      </Container>
    </div>
  );
};

export default Construcao;
