import { Container } from "react-bootstrap";
import "assets/styles/Contato.css";

const Contato = () => {
  return (
    <div className="ContatoContainer">
      <Container>
        <div className="Contato">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputNome1">Seu nome</label>
              <input type="text" className="form-control" placeholder="Seu nome" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Endereço de email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Seu email"
              />
              <small id="emailHelp" className="form-text text-muted">
                Nunca vamos compartilhar seu email, com ninguém.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Mensagem</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contato;
