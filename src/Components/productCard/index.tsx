import { Container, Content } from "./style";
import SecondaryButton from "../../Components/SecondaryButton";
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
  console.log(product);
  return (
    <Container>
      <div className="productImageContainer">
        <img src={product.img} alt={product.name} />
      </div>
      <Content>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p>R$ {product.price}</p>
        <SecondaryButton>Adicionar</SecondaryButton>
      </Content>
    </Container>
  );
};
export default ProductCard;
