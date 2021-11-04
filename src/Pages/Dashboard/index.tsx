import { useAuthContext } from "../../Providers/Auth";
import ProductCard from "../../Components/productCard";
import { ProductsListContainer } from "./style";
import Navbar from "../../Components/Navbar";
import { useState } from "react";
const Dashboard = () => {
  const { products } = useAuthContext();
  const [searchedProducts, setSearchedProducts] = useState([...products]);
  return (
    <>
      <Navbar products={products} setSearchedProducts={setSearchedProducts} />
      <ProductsListContainer>
        {searchedProducts.map((product, index) => (
          <li>
            <ProductCard key={index} product={product} />
          </li>
        ))}
      </ProductsListContainer>
    </>
  );
};
export default Dashboard;
