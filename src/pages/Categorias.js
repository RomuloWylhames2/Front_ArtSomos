import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Api } from "services/Api";
import { Link, useParams } from "react-router-dom";
import "assets/styles/Produtos.css";

const Categorias = () => {
  const [produtos, setProdutos] = useState([]);
  const props = useParams();

  useEffect(() => {
    Api.get(`/produtos/categoria/${props.id}`).then((res) => {
      setProdutos(res.data);
    });
  }, [props]);

  return (
    <div className="ProdutosContent">
      <Container className="ProdutosContainer">
        <Row>
          {produtos.length ? (
            produtos.map(({ id, nome, imagem, preco, parcela }) => (
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
            ))
          ) : (
            <div className="NotFound">Nenhum produto encontrado nesta categoria.</div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Categorias;
