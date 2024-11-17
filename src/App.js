// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/Products";
import FakePaymentPage from "./components/FakePaymentPage";
import ServicePage from "./components/ServicePage";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/eshwar-traders" element={<Body />} />
            <Route path="/products" element={<Products />} />
            <Route path="/fake-payment" element={<FakePaymentPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/services" element={<ServicePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
