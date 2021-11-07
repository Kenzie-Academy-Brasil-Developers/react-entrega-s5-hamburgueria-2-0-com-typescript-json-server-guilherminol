import { Container, Content } from "./style";
import SecondaryButton from "../../Components/SecondaryButton";
import { useAuthContext } from "../../Providers/Auth";
import api from "../../Services/api";
interface Product {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}
interface productCardProps {
  product: Product;
}
const ProductCard = ({ product }: productCardProps) => {
  const { cart, setCart } = useAuthContext();
  const addProduct = (item: Product) => {
    setCart([...cart, item]);
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
