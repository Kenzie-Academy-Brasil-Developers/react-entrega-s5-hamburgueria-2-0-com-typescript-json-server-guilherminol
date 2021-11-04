import { Container, SearchInput } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../Logo";
import { Dispatch, SetStateAction, useState } from "react";
import { Badge } from "material-ui";
import { AddShoppingCart } from "@material-ui/icons";
import { MuiThemeProvider } from "material-ui/styles";

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
        <MuiThemeProvider>
          <Badge badgeContent={2}>
            <AddShoppingCart />
          </Badge>
        </MuiThemeProvider>
      </div>
    </Container>
  );
};
export default Navbar;
