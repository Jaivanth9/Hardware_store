import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import { ShoppingCart, X, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import paint1 from "../assets/images/products/paint1.webp";
import paint2 from '../assets/images/products/paint2.webp';
import paint4 from "../assets/images/products/paint4.webp";
import paint3 from "../assets/images/products/paint3.jpeg";
import paint5 from "../assets/images/products/paint5.jpeg";
import paint6 from "../assets/images/products/paint6.jpeg";
import paint7 from "../assets/images/products/paint7.jpeg";
import paint8 from "../assets/images/products/paint8.jpeg";
import paint9 from "../assets/images/products/paint9.jpeg";
import paint10 from "../assets/images/products/paint10.jpeg";
import roof1 from "../assets/images/products/rs1everest.jpeg";
import roof2 from "../assets/images/products/rs2tata.jpeg";
import roof3 from "../assets/images/products/rs4jsw.jpeg";
import roof4 from "../assets/images/products/rs5jsw.jpeg";
import roof5 from "../assets/images/products/rs6jindal.jpeg";
import roof6 from "../assets/images/products/rs7jindal.jpeg";
import roof7 from "../assets/images/products/rs8cement.jpeg";
import roof8 from "../assets/images/products/rs3tata.webp";
import c1 from "../assets/images/products/c10.jpeg";
import c2 from "../assets/images/products/c1ultra.jpeg";
import c3 from "../assets/images/products/c2.jpeg";
import c4 from "../assets/images/products/c3.jpeg";
import c5 from "../assets/images/products/c4.jpeg";
import c6 from "../assets/images/products/c5.jpeg";
import c7 from "../assets/images/products/c6.jpeg";
import c8 from "../assets/images/products/c7.jpeg";
import c9 from "../assets/images/products/c8.jpeg";
import c10 from "../assets/images/products/c9.webp";
import gum1 from "../assets/images/products/adhesivefloortile.jpg";
import gum2 from "../assets/images/products/adhesivefurniture.webp";
import gum3 from "../assets/images/products/adhesivemarble.jpg";
import gum4 from "../assets/images/products/adhesivepipe.webp";
import gum5 from "../assets/images/products/adhesivetile.jpg";
import gum6 from "../assets/images/products/adhesivetilefixing.webp";
import gum7 from "../assets/images/products/adhesivewalltile.jpg";
import gum8 from "../assets/images/products/adhesivewaterproof.webp";
import gum9 from "../assets/images/products/adhsivewood.jpg";
import do1 from "../assets/images/products/dburmateek.webp";
import do2 from "../assets/images/products/ddesignwood.webp";
import do3 from "../assets/images/products/dencraftarchie.jpeg";
import do4 from "../assets/images/products/dencraftwindow.jpeg";
import do5 from "../assets/images/products/dfenestadoor.jpeg";
import do6 from "../assets/images/products/dfenestawindow.jpeg";
import do7 from "../assets/images/products/dteekwood.webp";
import pi1 from "../assets/images/products/pi.rigidpvc.webp";
import pi2 from "../assets/images/products/pi4inch.webp";
import pi3 from "../assets/images/products/pi25mmfinolex.jpeg";
import pi4 from "../assets/images/products/pi30meter.webp";
import pi5 from "../assets/images/products/pi76mmfinolex.jpeg";
import pi6 from "../assets/images/products/pi125mmfinolex.jpeg";
import pi7 from "../assets/images/products/pielbow.webp";
import pi8 from "../assets/images/products/piradan20ft.webp";
import pi9 from "../assets/images/products/piteeheavystar.webp";


const Products = () => {
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/fake-payment");
  };
  const allProducts = [
    // Idols Category
    {
      id: 1,
      name: "Asian paints",
      description: "Asian Paints small pack offers vibrant color and smooth finish, perfect for quick touch-ups and DIY projects.",
      price: 500,
      image: paint1,
      category: "Paint",
    },
    {
      id: 2,
      name: "Burma Teek ",
      description: "A durable and elegant door made from premium Burma teak wood, featuring a rich grain and timeless appeal.",
      price:18000 ,
      image: do1,
      category: "Doors",
    },
    {
      id: 3,
      name: "Everest Roof sheets",
      description: " Sturdy, weather-resistant sheets ideal for reliable roofing with minimal maintenance.",
      price: 700,
      image: roof1,
      category: "Roofsheets",
    },
    {
      id: 4,
      name: "Floor tile gums",
      description: "Strong bonding adhesive for secure floor tile installation, suitable for various tile types.",
      price: 400,
      image: gum1,
      category: "Gums",
    },
    {
      id: 5,
      name: "Prime Cement",
      description: "High-quality cement ideal for strong and durable construction, ensuring a smooth and reliable finish.",
      price: 400,
      image: c1,
      category: "Cement",
    },
    {
      id: 6,
      name: "Tata Roof sheets",
      description: " Durable and corrosion-resistant roofing sheets, offering long-lasting protection and strength for various construction needs.",
      price: 800,
      image: roof2,
      category: "Roofsheets",
    },
    {
      id: 7,
      name: "Design Door",
      description: "Stylish and custom-designed doors that add elegance and sophistication to any space.",
      price:11000,
      image: do2,
      category: "Doors",
    },
    {
      id: 8,
      name: "Berger paints",
      description: "Convenient and compact, offering high-quality paint for small touch-ups and DIY projects.",
      price: 400,
      image: paint2,
      category: "Paint",
    },
    {
      id: 9,
      name: "Jsw Roof Sheets",
      description: " Durable, high-strength roofing sheets designed to withstand harsh weather conditions and provide long-lasting protection.",
      price: 1000,
      image: roof3,
      category: "Roofsheets",
    },
    {
      id: 10,
      name: "Furniture Gum",
      description: "Strong adhesive designed for bonding wood, perfect for furniture repairs and crafting.",
      price: 200,
      image: gum2,
      category: "Gums",
    },
    {
      id: 11,
      name: "Archie Door",
      description: "Elegant and modern doors with an arch design, adding a sophisticated touch to any entryway.",
      price: 7000,
      image: do3,
      category: "Doors",
    },
    {
      id: 12,
      name: "Ultratech Cement",
      description: "Premium quality cement known for its superior strength, durability, and reliable performance in construction projects.",
      price: 400,
      image: c2,
      category: "Cement",
    },
    {
      id: 13,
      name: "Jsw Roof Sheets",
      description: "Durable and corrosion-resistant roofing sheets from JSW, ideal for long-lasting protection and strength in various construction applications.",
      price: 800,
      image: roof4,
      category: "Roofsheets",
    },
    {
      id: 14,
      name: "Asian paints",
      description: " Large capacity bucket offering premium-quality paint for extensive coverage, ideal for large-scale painting projects.",
      price: 2500,
      image: paint3,
      category: "Paint",
    },
    {
      id: 15,
      name: "Rigid PVC",
      description: "Strong, durable, and versatile rigid PVC sheets, ideal for construction, signage, and various industrial applications.",
      price: 500,
      image: pi1,
      category: "Pipes",
    },
    {
      id: 16,
      name: "Encraft Window",
      description: " High-quality, energy-efficient windows from Encraft, offering excellent durability, sound insulation, and modern aesthetics.",
      price: 7000,
      image: do4,
      category: "Doors",
    },
    {
      id: 17,
      name: "Marble Adhesive",
      description: " Strong adhesive designed for bonding marble and other stone surfaces, ensuring a durable and seamless finish.",
      price: 400,
      image: gum3,
      category: "Gums",
    },
    {
      id: 18,
      name: "Jindal Roof Sheets",
      description: "High-quality, durable roofing sheets from Jindal, offering excellent strength and weather resistance for long-lasting protection.",
      price: 700,
      image: roof5,
      category: "Roofsheets",
    },
    {
      id: 19,
      name: "Bharathi Cement",
      description: "Premium quality cement known for its superior strength, durability, and reliability in construction projects.",
      price: 400,
      image: c3,
      category: "Cement",
    },
    {
      id: 20,
      name: "Fenest Doors",
      description: "Modern and energy-efficient doors, offering stylish aesthetics and excellent durability for both residential and commercial spaces.",
      price: 8000,
      image: do5,
      category: "Doors",
    },
    {
      id: 21,
      name: "4 INCH pipe",
      description: "Durable and reliable 4-inch pipes suitable for plumbing, drainage, and irrigation applications.",
      price: 100,
      image: pi2,
      category: "Pipes",
    },
    {
      id: 22,
      name: "Indigo paints",
      description: "High-quality paint in a large bucket, ideal for extensive painting projects with vibrant and long-lasting color.",
      price: 1500,
      image: paint4,
      category: "Paint",
    },
    {
      id: 23,
      name: "Jindal Roof Sheets",
      description: " Durable and weather-resistant roofing sheets from Jindal, designed for long-lasting protection and strength in various structures.",
      price: 600,
      image: roof6,
      category: "Roofsheets",
    },
    {
      id: 24,
      name: "Fenest Windows",
      description: " High-quality, energy-efficient windows with excellent insulation and modern design, perfect for residential and commercial use.",
      price: 10000,
      image: do6,
      category: "Doors",
    },
    {
      id: 25,
      name: "Finolex 25mm Pipe",
      description: " Durable 25mm pipe from Finolex, ideal for plumbing and irrigation with excellent flow capacity and strength.",
      price: 100,
      image: pi3,
      category: "Pipes",
    },
    {
      id: 26,
      name: "Pipe adhesives",
      description: "Strong, quick-setting adhesive for secure bonding of pipes in plumbing and repair applications.",
      price: 150,
      image: gum4,
      category: "Gums",
    },
    {
      id: 27,
      name: "Bharat Shakti Cement",
      description: " Reliable and high-strength cement, suitable for various construction needs, offering durability and consistent quality.",
      price: 400,
      image: c4,
      category: "Cement",
    },
    {
      id: 28,
      name: "Teek wood",
      description: "Premium hardwood known for its durability, rich grain, and resistance to weather, ideal for furniture and high-end carpentry.Premium hardwood known for its durability, rich grain, and resistance to weather, ideal for furniture and high-end carpentry.",
      price: 4000,
      image: do7,
      category: "Doors",
    },
    {
      id: 29,
      name: "30 meter Plastic Pipe",
      description: " Long, durable water pipe suitable for irrigation, gardening, and residential plumbing needs.",
      price: 900,
      image: pi4,
      category: "Pipes",
    },
    {
      id: 30,
      name: "Cement Roof Sheets",
      description: " Durable, fire-resistant roofing sheets ideal for long-lasting protection in residential and industrial buildings.",
      price: 1000,
      image: roof7,
      category: "Roofsheets",
    },
    {
      id: 31,
      name: "Nerolac paints",
      description: "High-quality paints offering vibrant colors and excellent coverage, perfect for interior and exterior applications.",
      price: 1500,
      image: paint10,
      category: "Paint",
    },
    {
      id: 32,
      name: "Tile adhesive",
      description: "Strong adhesive for secure tile installation on floors and walls, ensuring durability and a long-lasting finish.",
      price: 500,
      image: gum5,
      category: "Gums",
    },
    {
      id: 33,
      name: "Finolex 76mm Pipe",
      description: "Durable 76mm pipe from Finolex, ideal for plumbing and drainage systems, offering excellent strength and flow capacity.",
      price: 300,
      image: pi5,
      category: "Pipes",
    },
    {
      id: 34,
      name:"Tata Roof Sheets",
      description: "High-quality, durable roofing sheets from Tata, providing long-lasting protection and resistance to harsh weather conditions.",
      price: 800,
      image: roof8,
      category: "Roofsheets",
    },
    {
      id: 35,
      name: "Dalmia Cement",
      description: "High-strength, reliable cement ideal for construction projects, offering durability and consistent performance.",
      price: 400,
      image: c5,
      category: "Cement",
    },
    {
      id: 36,
      name: "Indigo paints",
      description: "Large bucket of high-quality paint offering vibrant color and excellent coverage, perfect for large-scale painting projects.",
      price: 3000,
      image: paint5,
      category: "Paint",
    },
    {
      id: 37,
      name: "Finolex 125mm Pipe",
      description: "Durable 125mm pipe from Finolex, ideal for drainage, sewage, and water supply systems, providing excellent strength and flow capacity.",
      price: 400,
      image: pi6,
      category: "Pipes",
    },
    {
      id: 38,
      name: "Tile Fixing Adhesive",
      description: "Strong and versatile adhesive designed for securely fixing tiles on walls and floors, ensuring a durable and long-lasting bond.",
      price: 400,
      image: gum6,
      category: "Gums",
    },
    {
      id: 39,
      name: "Dalmia Cement",
      description: " High-quality cement available in larger quantities, ideal for major construction projects, offering superior strength and durability.",
      price: 500,
      image: c6,
      category: "Cement",
    },
    {
      id: 40,
      name: "Elbow",
      description: "A pipe fitting with a 90° or 45° bend, used to change the direction of a pipe in plumbing, irrigation, and drainage systems.",
      price: 100,
      image: pi7,
      category: "Pipes",
    },
    {
      id: 41,
      name: "Wall Tile Adhesive",
      description: " Strong adhesive designed specifically for bonding tiles to walls, ensuring a secure and long-lasting finish.",
      price: 300,
      image: gum7,
      category: "Gums",
    },
    {
      id: 42,
      name: "Berger paints",
      description: " Large capacity bucket of high-quality Berger Paints, offering excellent coverage and vibrant color for extensive painting projects.",
      price: 2500,
      image: paint6,
      category: "Paint",
    },
    {
      id: 43,
      name: "Radan 20ft",
      description: "Strong and durable 20ft Radan pipe, ideal for water supply, drainage, and irrigation applications, offering long-lasting performance.",
      price: 1000,
      image: pi8,
      category: "Pipes",
    },
    {
      id: 44,
      name: "Ambuja Cement",
      description: "High-quality cement known for its strength, durability, and excellent performance in construction projects.",
      price: 450,
      image: c7,
      category: "Cement",
    },
    {
      id: 45,
      name: "Waterproof Adhesive",
      description: "Strong, water-resistant adhesive designed for bonding surfaces exposed to moisture, ensuring a durable and secure bond even in wet conditions.",
      price: 350,
      image: gum8,
      category: "Gums",
    },
    {
      id: 46,
      name: "Tee Heavy Star",
      description: " Durable and heavy-duty Tee pipe fittings, ideal for connecting three pipes at right angles in plumbing, drainage, and irrigation systems.",
      price: 400,
      image: pi9,
      category: "Pipes",
    },
    {
      id: 47,
      name: "Nerolac paints",
      description: "High-quality paints offering vibrant colors, excellent coverage, and long-lasting protection for both interior and exterior applications.",
      price: 1500,
      image: paint9,
      category: "Paint",
    },
    {
      id: 48,
      name: "Birla Samrat Cement",
      description: "Premium quality cement known for its superior strength, durability, and consistent performance in all types of construction projects.",
      price: 500,
      image: c8,
      category: "Cement",
    },
    {
      id: 49,
      name: "Wood Adhesive",
      description: "Strong, fast-drying adhesive designed for bonding wood surfaces, ensuring a durable and seamless bond for carpentry and furniture projects.",
      price: 300,
      image: gum9,
      category: "Gums",
    },
    {
      id: 50,
      name: "Royals paints",
      description: "High-quality paint offering vibrant colors and long-lasting coverage, perfect for both interior and exterior applications.",
      price: 1300,
      image: paint7,
      category: "Paint",
    },
    {
      id: 51,
      name: "Birla A-1 Premium Cement",
      description: " High-quality cement known for its superior strength and durability, ideal for both residential and commercial construction projects.",
      price: 550,
      image: c9,
      category: "Cement",
    },
    {
      id: 52,
      name: "Prime paints",
      description: " Affordable and reliable paints offering good coverage and vibrant colors for interior and exterior surfaces.",
      price: 1200,
      image: paint8,
      category: "Paint",
    },
    {
      id: 53,
      name: "Khamdhenu Cement",
      description: " High-strength cement known for its durability and consistent quality, ideal for all types of construction work.",
      price: 400,
      image: c10,
      category: "Cement",
    },
  ];

  const [products, setProducts] = useState(allProducts);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // Simulate loading data from an API
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setProducts(
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleCategoryFilter = (event) => {
    setSelectedCategory(event.target.value);
    setProducts(
      allProducts.filter(
        (product) =>
          event.target.value === "all" ||
          product.category === event.target.value
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-100 text-black relative">
      <div className="flex-1 px-4 sm:px-8 relative overflow-y-auto">
        {showNotification && (
          <div className="fixed top-48 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md z-20">
            Item added to cart
          </div>
        )}
        <section id="featured-products" className="py-8 md:py-8 sm:py-16">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
              Featured Products
            </h2>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="mb-4 sm:mb-0 sm:mr-4">
                <label htmlFor="category-filter" className="mr-2 text-gray-400">
                  Category:
                </label>
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={handleCategoryFilter}
                  className="px-2 py-1 rounded-md bg-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-400"
                >
                  <option value="all">All</option>
                  <option value="Cement">Cement</option>
                  <option value="Paint">Paint</option>
                  <option value="Gums">Adhesives</option>
                  <option value="Roofsheets">Roof Sheets</option>
                  <option value="Pipes">Pipes</option>
                  <option value="Doors">Doors and Windows</option>
                </select>
              </div>
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="px-4 py-2 rounded-md bg-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-400 w-full sm:w-auto"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Search size={20} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCart}
                  cartItem={cart.find((item) => item.id === product.id)}
                />
              ))}
            </div>
          )}
        </section>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-100 shadow-lg transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="bg-white px-4 sm:px-6 py-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-bold">Cart</h2>
              <button
                className="text-gray-400 hover:text-gray-300"
                onClick={() => {
                  setIsCartOpen(false);
                }}
              >
                <X size={24} />
              </button>
            </div>
          </div>
          {isCartOpen && (
            <div className="flex-1 overflow-y-auto">
              <Cart items={cart} />
            </div>
          )}
          {isCartOpen && (
            <div className="bg-white px-4 sm:px-6 py-4 border-t">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">
                  Total: ₹
                  {cart
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  onClick={handleCheckoutClick}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {!isCartOpen && (
        <button
          className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-full hover:bg-red-600 z-10"
          onClick={() => {
            setIsCartOpen(true);
          }}
        >
          <div className="relative flex gap-4">
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="relative top-0 right-0 bg-black text-white px-2 py-1 rounded-full text-xs">
                {cart.length}
              </span>
            )}
          </div>
        </button>
      )}
    </div>
  );
};

export default Products;
