import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input } from "./Input";
import { Api } from "services/Api";
import Logo from "assets/images/logo-artesomos.png";
import Cart from "assets/images/cart.png";
import Chat from "assets/images/chat.png";
import User from "assets/images/user.png";
import "../assets/styles/Navbar.css";

const Header = () => {
  const [categorias, setCategorias] = useState();

  useEffect(() => {
    Api.get(`/categorias`).then((res) => {
      setCategorias(res.data);
    });
  }, []);

  return (
    <div className="HeaderContent">
      <Container className="HeaderContainer">
        <div className="HeaderPrincipal">
          <div className="HeaderMain">
            <a className="Logo" href="/">
              <img src={Logo} alt="Logo ArteSomos" />
            </a>
            <Input value={'Pesquisa'} classe={'hide-mobile'} className="hide-mobile" />
            <div className="utils">
              <Link to="/construcao" className="nav-link">
                <img src={Cart} alt="Carrinho" />
              </Link>
              <Link to="/construcao" className="nav-link">
                <img src={Chat} alt="Chat" />
              </Link>
              <Link to="/construcao" className="nav-link">
                <img src={User} alt="Usuário" />
              </Link>
            </div>
          </div>
          <div className="menu">
            <Navbar bg="light" expand="lg" className="navbar-header">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link to="/" className="nav-link">
                    Produtos
                  </Link>
                  <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    {categorias?.map(({ id_categoria, categoria }) => (
                      <Link key={id_categoria} to={`/categoria/${id_categoria}`} className="dropdown-item">
                        {categoria}
                      </Link>
                    ))}
                  </NavDropdown>
                  <Link to="/" className="nav-link">
                    Ofertas
                  </Link>
                  <Link to="/contato" className="nav-link">
                    Contato
                  </Link>
                  <Link to="/sobre" className="nav-link">
                    Sobre Nós
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
