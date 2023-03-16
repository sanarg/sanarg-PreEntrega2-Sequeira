import {Link, useNavigate} from "react-router-dom"
import { Row, Col, Image, Button } from "react-bootstrap";
import AddButton from "../AddButton/AddButton";
export default function ItemCart({ item }) {
  const navigate = useNavigate()
  return (
        <Row className="cart-item">
          <Col xs={2}>
            <Image src={item.image} />
          </Col>
          <Col xs={10}>
            <h2>{item.title}</h2>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <h3>$ {item.price}</h3>
          </Col>
        </Row>
  );
}
