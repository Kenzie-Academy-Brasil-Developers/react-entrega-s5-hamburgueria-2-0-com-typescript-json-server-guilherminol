import { useAuthContext } from "../../Providers/Auth";
import ProductCard from "../../Components/productCard";
const Dashboard = () => {
  const { products } = useAuthContext();
  return (
    <>
      <h1>Dashboard</h1>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
};
export default Dashboard;
