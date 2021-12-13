import { Container } from "react-bootstrap";
import "assets/styles/Sobre.css";

const Sobre = () => {
  return (
    <div className="SobreContainer">
      <Container>
        <div className="Sobre">
          <p>O ArteSomos é um site brasileiro de compra e venda de artesanato. Aqui você compra diretamente de artesãos ideias super criativas em produtos únicos.</p>
          <p>Você pode comprar ou vender, conferir novidades sobre muitos produtos de qualidade.</p>
          <p>Temos como premissa valorizar o trabalho manual de milhares de brasileiros que se dedicam ao artesanato e transmitem o legado da arte em seus produtos.</p>
        </div>
      </Container>
    </div>
  );
};

export default Sobre;
