import {Form, Button} from "react-bootstrap"
export default function CartForm ({handleChange, handleSubmit}) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Nombre"
        name="name"
        required
        onChange={handleChange}
        className="my-3 py-3"
      />
      <Form.Control
        type="email"
        placeholder="Email"
        name="email"
        required
        onChange={handleChange}
        className="my-3 py-3"
      />
      <Form.Control
        type="phone"
        placeholder="Telefono"
        name="phone"
        required
        onChange={handleChange}
        className="my-3 py-3"
      />
      <Button type="submit">Pagar</Button>
    </Form>
  );
}