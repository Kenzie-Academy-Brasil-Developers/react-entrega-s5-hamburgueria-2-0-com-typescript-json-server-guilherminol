import { Container, Content, Quantity, DeleteButton } from "./style";
import { FaTrash } from "react-icons/fa";
import { useAuthContext } from "../../Providers/Auth";
import { ContactsOutlined } from "@material-ui/icons";
interface Product {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
  quantity?: number;
}
interface CartProductProps {
  product: Product;
}
const CartProduct = ({ product }: CartProductProps) => {
  const { cart, setCart } = useAuthContext();

  const addItem = () => {
    const filteredCart = cart.filter((item) => {
      return product.id !== item.id;
    });
    const updatedItem = {
      ...product,
      quantity: (product.quantity || 1) + 1,
    };
    setCart([...filteredCart, updatedItem]);
  };

  const subItem = () => {
    const filteredCart = cart.filter((item) => {
      return product.id !== item.id;
    });
    const updatedItem = {
      ...product,
      quantity: (product.quantity || 1) - 1,
    };
    setCart([...filteredCart, updatedItem]);
  };

  const removeProduct = () => {
    const filteredCart = cart.filter((item) => {
      return product.id !== item.id;
    });
    setCart([...filteredCart]);
  };
  return (
    <Container>
      <div className="imageContainer">
        <img src={product.img} alt={product.name} />
      </div>
      <Content>
        <h3>{product.name}</h3>
        <div>
          <button onClick={subItem}>-</button>
          <Quantity>{product.quantity}</Quantity>
          <button onClick={addItem}>+</button>
        </div>
      </Content>

      <DeleteButton onClick={removeProduct}>
        <FaTrash />
      </DeleteButton>
    </Container>
  );
};
export default CartProduct;
