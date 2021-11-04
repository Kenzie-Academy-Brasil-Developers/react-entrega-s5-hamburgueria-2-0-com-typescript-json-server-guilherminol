import { useAuthContext } from "../../Providers/Auth";
import ProductCard from "../../Components/productCard";
import { ProductsListContainer } from "./style";
import Navbar from "../../Components/Navbar";
import { useEffect, useState } from "react";
import Popup from "../../Components/Popup";
const Dashboard = () => {
  const { products } = useAuthContext();
  const [searchedProducts, setSearchedProducts] = useState([...products]);
  useEffect(() => {
    setSearchedProducts([...products]);
  }, [products]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <Popup setIsOpen={setIsOpen} />}
      <Navbar
        setIsOpen={setIsOpen}
        products={products}
        setSearchedProducts={setSearchedProducts}
      />
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
