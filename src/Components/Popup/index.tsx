import { Dispatch, SetStateAction } from "react";
import { Background, Container } from "./style";
interface PopupProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const Popup = ({ setIsOpen }: PopupProps) => {
  return (
    <Background>
      <Container>
        <header>
          <h3>Carrinho de compras</h3>
          <button onClick={() => setIsOpen(false)}>x</button>
        </header>
        <div>
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </div>
      </Container>
    </Background>
  );
};
export default Popup;
