import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Api } from "services/Api";
import "assets/styles/Produtos.css";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    Api.get("/produtos").then((res) => {
      setProdutos(res.data);
    });
  }, []);

  return (
    <div className="ProdutosContent">
      <Container className="ProdutosContainer">
        <Row>
          {produtos.map(({ id, nome, imagem, preco, parcela }) => (
            <Col key={id} className="col-lg-4 col-md-4 col-sm-6 col-12">
              <Link to={`/produto/${id}`}>
                <div className="CardContainer">
                  <div className="CardImagem">
                    <img src={imagem} alt="imagem-1" />
                  </div>
                  <div className="CardContent">
                    <p className="Titulo">{nome}</p>
                    <p className="Valor">R$ {preco}</p>
                    <p className="Parcelas">{parcela}</p>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Produtos;
