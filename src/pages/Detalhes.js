import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Api } from "services/Api";
import { Input } from "components/Input";
import Cart from "assets/images/cart.png";
import "assets/styles/Detalhes.css";


const Detalhes = () => {
  const [produtos, setProdutos] = useState();
  const props = useParams();

  useEffect(() => {
    Api.get(`produtos/${props.id}`).then((res) => {
      setProdutos(res.data[0]);
    });
  }, [props]);

  return (
    <div className="DetalhesContent">
      <Container className="DetalhesContainer">
        <Row>
          <Col className="col-lg-6 col-md-6 col-12">
            <div className="CardContainer">
              <div className="CardImagem">
                <img src={produtos?.imagem} alt="imagem-1" />
              </div>
            </div>
          </Col>
          <Col className="col-lg-6 col-md-6 col-12">
            <div className="CardContent">
              <p className="Titulo">{produtos?.nome}</p>
              <p className="Valor">R$ {produtos?.preco}</p>
              <p className="Parcelas">{produtos?.parcela}</p>
              <p><strong>Detalhes:</strong><br />{produtos?.detalhes}</p>
              <p>{produtos?.encomenda}<br />{produtos?.dias_producao}</p>
              <p><strong>Categoria:</strong> {produtos?.categoria}</p>
              <a href="/" className="btn btn-primary mb-4"><img src={Cart} alt="Cart" /> Comprar este produto</a>
              <Input value={'Digite seu CEP'} classe={''} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detalhes;
