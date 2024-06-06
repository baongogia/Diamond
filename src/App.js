import { Route, Routes } from "react-router-dom";
import "./App.css";
import HideNav from "./Components/Hide/HideFooter";
import Navbar from "./Components/Header/Header/Navbar";
import HomePage from "./Components/Content/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Components/Header/Login/LoginPage";
import ProductPage from "./Components/Content/Product/ProductPage";
import DiamondPrice from "./Components/Content/NavPage/DiamondPrice";
import DiamonKnow from "./Components/Content/NavPage/DiamonKnow";
import JewelryKnow from "./Components/Content/NavPage/JewelryKnow";
import Intro from "./Components/Content/NavPage/Intro";
import ShoppingBag from "./Components/Content/SellProduct/Shopping/ShoppingBag";
import AllItems from "./Components/Content/SellProduct/Shopping/AllItems";
import CheckOutPage from "./Components/Content/SellProduct/Process/CheckOutPage";
import ReviewOrder from "./Components/Content/SellProduct/Process/ReviewOrder";
import OrderSuccess from "./Components/Content/SellProduct/Process/OrderSuccess";
import UserProfile from "./Components/Header/Login/UserProfile";
import OrderDetails from "./Components/Content/SellProduct/Shopping/OrderDetails";
import HideFooter from "./Components/Hide/HideFooter";

function App() {
  return (
    <>
      <HideNav>
        <Navbar />
      </HideNav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />
        <Route path="/DiamonPrice" element={<DiamondPrice />} />
        <Route path="/DiamonKnow" element={<DiamonKnow />} />
        <Route path="/JewelryKnow" element={<JewelryKnow />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/AllItems/:category" element={<AllItems />} />
        <Route path="/ShoppingBag" element={<ShoppingBag />} />
        <Route path="/CheckOutPage" element={<CheckOutPage />} />
        <Route path="/ReviewOrder" element={<ReviewOrder />} />
        <Route path="/OrderSuccess" element={<OrderSuccess />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/OrderDetails" element={<OrderDetails />} />
      </Routes>
      <HideFooter>
        <Footer />
      </HideFooter>
    </>
  );
}

export default App;
