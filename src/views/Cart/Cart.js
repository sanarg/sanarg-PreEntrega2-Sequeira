import React from "react";
import Header from "../../components/Header/Header"
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Container, Col, Row, Button } from "react-bootstrap";
import CartList from "../../components/CartList/CartList";
export default function Cart() {
  const navigate = useNavigate();
  const {cart, deleteAll} = React.useContext(CartContext)
  return (
    <div>
      <Header />
      <Container className={"itemlist-container"}>
        <Row className="mt-5">
          <Col>
            <h1>Tu carrito</h1>
          </Col>
        </Row>
        <Row>
          <CartList items={cart} />
        </Row>
        <Row>
          <Col xs={6} className="px-2">
            <Button onClick={() => navigate("/checkout")} style={{ width: "100%" }}>
              Finalizar compra
            </Button>
          </Col>
          <Col xs={6} className="px-2">
            <Button onClick={deleteAll} style={{ width: "100%" }}>
              Borrar carrito
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
