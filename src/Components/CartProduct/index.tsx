import { Container, Content } from "./style";
interface Product {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}
interface CartProductProps {
  product: Product;
}
const CartProduct = ({ product }: CartProductProps) => {
  return (
    <Container>
      <div className="imageContainer">
        <img src={product.img} alt={product.name} />
      </div>
      <Content>
        <h3>{product.name}</h3>
        <p>1</p>
      </Content>
    </Container>
  );
};
export default CartProduct;
