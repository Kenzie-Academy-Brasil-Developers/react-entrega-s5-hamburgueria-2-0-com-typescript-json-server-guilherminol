import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./style";
interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const SecondaryButton = ({ children, ...rest }: SecondaryButtonProps) => {
  return <Button {...rest}> {children} </Button>;
};
export default SecondaryButton;
