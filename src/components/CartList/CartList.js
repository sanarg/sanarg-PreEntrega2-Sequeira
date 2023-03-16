import ItemCart from "../ItemCart/ItemCart";

export default function CartList({ items }) {
  return items.map((item, index) => <ItemCart key={item.id} item={item} />);
}
