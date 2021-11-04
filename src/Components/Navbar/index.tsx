import { Container, SearchInput, IconsContainer } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../Logo";
import { Dispatch, SetStateAction, useState } from "react";
import { Badge } from "material-ui";
import { AddShoppingCart } from "@material-ui/icons";
import { MuiThemeProvider } from "material-ui/styles";
import { useAuthContext } from "../../Providers/Auth";
import { FiLogOut } from "react-icons/fi";
interface Product {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

interface NavbarProps {
  products: Product[];
  setSearchedProducts: Dispatch<SetStateAction<Product[]>>;
}

const Navbar = ({ products, setSearchedProducts }: NavbarProps) => {
  const [search, setSearch] = useState("");

  const filterProducts = () => {
    setSearchedProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    setSearch("");
  };
  const { cart, Logout } = useAuthContext();

  return (
    <Container>
      <Logo />
      <div className="content">
        <SearchInput>
          <input
            value={search}
            placeholder="Digitar Pesquisa"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={filterProducts}>
            <AiOutlineSearch />
          </button>
        </SearchInput>
        <IconsContainer>
          <MuiThemeProvider>
            <button>
              <Badge badgeContent={cart.length}>
                <AddShoppingCart />
              </Badge>
            </button>
          </MuiThemeProvider>
          <button onClick={Logout}>
            <FiLogOut />
          </button>
        </IconsContainer>
      </div>
    </Container>
  );
};
export default Navbar;
