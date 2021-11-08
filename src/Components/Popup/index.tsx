import { Dispatch, SetStateAction } from "react";
import { useAuthContext } from "../../Providers/Auth";
import CartProduct from "../CartProduct";
import SecondaryButton from "../SecondaryButton";
import { Background, Container, CartInfo } from "./style";
interface PopupProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const Popup = ({ setIsOpen }: PopupProps) => {
  const { cart, setCart, UpdateCart } = useAuthContext();
  return (
    <Background>
      <Container>
        <header>
          <h3>Carrinho de compras</h3>
          <button
            onClick={() => {
              setIsOpen(false);
              UpdateCart(cart);
            }}
          >
            x
          </button>
        </header>
        {cart.length > 0 ? (
          <div>
            <div className="cartProductsContainer">
              {cart
                .sort((a, b) => {
                  return a.id - b.id;
                })
                .map((item) => (
                  <CartProduct product={item} />
                ))}
            </div>
            <CartInfo>
              <SecondaryButton onClick={() => setCart([])}>
                Remover Todos
              </SecondaryButton>
            </CartInfo>
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
