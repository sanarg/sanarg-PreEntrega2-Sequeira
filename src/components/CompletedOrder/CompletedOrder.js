import {Col} from "react-bootstrap"
export default function CompletedOrder ({orderId, data}) {
  return (
    <Col>
      <h2>Orden completada</h2>
      <p>Sus datos son :</p>
      <ul>
        <li><b>N de orden: {orderId}</b></li>
        <li>Nombre: {data?.name}</li>
        <li>Email: {data?.email}</li>
        <li>Telefono: {data?.phone}</li>
      </ul>
    </Col>
  )
}