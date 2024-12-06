import Header from "./components/Header";
import BannersList from "./components/BannersList";
import "swiper/css/bundle";
import { ProductsList } from "./components/ProductsList";
import CartProvider from "./contexts/CartContex";
import Minicart from "./components/Minicart";

const bannersList = [
  {
    title: "Teste de texto do banner",
    subtitle: "Teste de subtitle",
    imageUrl: "https://placehold.co/1240x400",
  },
  {
    title: "Teste de texto do banner",
    subtitle: "Teste de subtitle",
    imageUrl: "https://placehold.co/1240x400",
  },
];

function App() {
  return (
    <CartProvider>
      {/* <Minicart /> */}
      <Header />
      <BannersList bannersListData={bannersList} />
      <ProductsList
        query={{
          url: "https://corebiz-test-server.onrender.com/api/v1/products",
        }}
      />
    </CartProvider>
  );
}

export default App;
