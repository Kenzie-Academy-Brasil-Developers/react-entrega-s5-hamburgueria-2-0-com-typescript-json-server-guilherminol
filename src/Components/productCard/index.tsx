import { Container, Content } from "./style";
import SecondaryButton from "../../Components/SecondaryButton";
import { useAuthContext } from "../../Providers/Auth";
interface Product {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
  quantity?: number;
}
interface productCardProps {
  product: Product;
}
const ProductCard = ({ product }: productCardProps) => {
  const { cart, setCart, UpdateCart } = useAuthContext();

  const addProduct = (item: Product) => {
    if (!cart.find((product) => product.id === item.id)) {
      console.log(cart);
      const newItem = { ...item, quantity: 1 };
      console.log(newItem);
      setCart([...cart, newItem]);
      const data = [...cart, newItem];
      UpdateCart(data);
    } else {
      const filteredCart = cart.filter((product) => {
        return product.id !== item.id;
      });
      const cartItem = cart.filter((product) => {
        return product.id === item.id;
      });
      const updatedItem = {
        ...cartItem[0],
        quantity: (cartItem[0].quantity || 1) + 1,
      };
      setCart([...filteredCart, updatedItem]);
      const data = [...filteredCart, updatedItem];
      UpdateCart(data);
    }
  };
  return (
    <Container>
      <div className="productImageContainer">
        <img src={product.img} alt={product.name} />
      </div>
      <Content>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p>R$ {product.price.toFixed(2)}</p>
        <SecondaryButton onClick={() => addProduct(product)}>
          Adicionar
        </SecondaryButton>
      </Content>
    </Container>
  );
};
export default ProductCard;
