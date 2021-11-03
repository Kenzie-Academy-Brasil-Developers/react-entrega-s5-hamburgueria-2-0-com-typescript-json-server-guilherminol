import { useAuthContext } from "../../Providers/Auth";
import ProductCard from "../../Components/productCard";
import { ProductsListContainer } from "./style";
const Dashboard = () => {
  const { products } = useAuthContext();
  return (
    <>
      <h1>Dashboard</h1>
      <ProductsListContainer>
        {products.map((product, index) => (
          <li>
            <ProductCard key={index} product={product} />
          </li>
        ))}
      </ProductsListContainer>
    </>
  );
};
export default Dashboard;
