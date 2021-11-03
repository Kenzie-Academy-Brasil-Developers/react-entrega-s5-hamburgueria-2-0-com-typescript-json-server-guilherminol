import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./style";
interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const MainButton = ({ children, ...rest }: MainButtonProps) => {
  return <Button {...rest}>{children}</Button>;
};
export default MainButton;
