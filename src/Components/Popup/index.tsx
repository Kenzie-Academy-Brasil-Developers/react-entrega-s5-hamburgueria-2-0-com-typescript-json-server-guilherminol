import { Dispatch, SetStateAction } from "react";
import { useAuthContext } from "../../Providers/Auth";
import CartProduct from "../CartProduct";
import { Background, Container } from "./style";
interface PopupProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const Popup = ({ setIsOpen }: PopupProps) => {
  const { cart } = useAuthContext();
  return (
    <Background>
      <Container>
        <header>
          <h3>Carrinho de compras</h3>
          <button onClick={() => setIsOpen(false)}>x</button>
        </header>
        {cart.length > 0 ? (
          <div className="cartProductsContainer">
            {cart.map((item) => (
              <CartProduct product={item} />
            ))}
          </div>
        ) : (
          <div>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        )}
      </Container>
    </Background>
  );
};
export default Popup;
