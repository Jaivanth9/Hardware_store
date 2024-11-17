import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";
import homecover from "../assets/images/homecover.jpg"
import cover2 from "../assets/images/cover2.jpg";
import cover3 from "../assets/images/cover3.jpg";
import deal from "../assets/images/deal.jpeg";



const Card = ({ title, description, link, quote, name, occupation, image }) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    {title && description && link && (
      <>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
        <a href={link} className="text-red-600 hover:text-red-700 font-medium">
          Read More
        </a>
      </>
    )}
    {quote && name && occupation && image && (
      <>
        <p className="mb-4">{quote}</p>
        <div className="flex items-center">
          <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-gray-500">{occupation}</p>
          </div>
        </div>
      </>
    )}
  </div>
);

const dealOfTheDay = {
  title: "Premium Portland Cement - 53 Grade",
  description: "Superior quality cement for all your construction needs. Buy in bulk and save more!",
  price: "350",
  originalPrice: "450",
  discount: 22,
  timer: "08:45:30",
  link : "/products/cement",
  Image: "/assests/images/deal"
};

const specialOffers = [
  {
    title: "Paint Bundle Offer",
    description: "Buy 5 buckets of premium exterior paint and get 1 free",
    price: "3999",
    originalPrice: "4999",
    discount: 20,
    link: "/products/paint",
  },
  {
    title: "Steel TMT Bars",
    description: "Bulk purchase offer on high-grade steel TMT bars",
    price: "4500",
    originalPrice: "5200",
    discount: 13,
    link: "/products/steel",
  },
  {
    title: "Plumbing Kit",
    description: "Complete plumbing solution kit with premium CPVC pipes",
    price: "2999",
    originalPrice: "3599",
    discount: 16,
    link: "/products/plumbing",
  },
  {
    title: "Tile Adhesive Combo",
    description: "Buy tile adhesive in bulk and get free application tools",
    price: "899",
    originalPrice: "1199",
    discount: 25,
    link: "/products/adhesives",
  },
];


const customerTestimonials = [
  {
    quote:
      "Eshwar Traders has been our go-to supplier for all construction materials. Their cement quality is consistently excellent, and their delivery is always on time. Highly reliable service!",
    name: "Raj reddy",
    occupation: "Construction Contractor",
    image:
      "https://imgs.search.brave.com/GIL_dabaOq4GAxTVyW2oN5sl6gbK1dpS4fspnJz7FJY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hdmF0YXItcmVz/b3VyY2luZy1jb21w/YW55XzEyNTQ5Njct/NjY1My5qcGc_c2Vt/dD1haXNfaHlicmlk",
  },
  {
    quote:
      "As a civil engineer, I appreciate their wide range of quality construction materials. Their technical knowledge and product recommendations have been invaluable for our projects.",
    name: "Raj Kumar",
    occupation: "Civil Engineer",
    image:
      "https://imgs.search.brave.com/qwpmigulmS26EBtcxnWPzxBhS3y6ZruxXkyr8GInbZc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMnFw/MHNpb3RsYTc0Ni5j/bG91ZGZyb250Lm5l/dC9pbWcvdXNlLWNh/c2VzL3Byb2ZpbGUt/cGljdHVyZS90ZW1w/bGF0ZV8wLmpwZw",
  },
  {
    quote:
      "The quality of their paints and adhesives is outstanding. Their competitive pricing and prompt delivery have helped me complete my renovation projects efficiently.",
    name: "Priya",
    occupation: "Interior Designer",
    image:
      "https://imgs.search.brave.com/ZhauOr1gejH4QOXVp0-kc2A2Odn4sQhLojjZprPcpzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MS8yMi8yMS80Mi93/b21hbi0xODUwNzAz/XzY0MC5qcGc",
  },
  {
    quote:
      "Their plumbing materials are top-notch, and their staff is knowledgeable about the latest products. They've been instrumental in helping me serve my clients better.",
    name: "Suresh",
    occupation: "Plumbing Contractor",
    image:
      "https://imgs.search.brave.com/GIL_dabaOq4GAxTVyW2oN5sl6gbK1dpS4fspnJz7FJY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hdmF0YXItcmVz/b3VyY2luZy1jb21w/YW55XzEyNTQ5Njct/NjY1My5qcGc_c2Vt/dD1haXNfaHlicmlk",
  },
  {
    quote:
      "I've been sourcing construction materials from Eshwar Traders for over 5 years. Their consistent quality and professional service make them the best in the region.",
    name: "Raj",
    occupation: "Real Estate Developer",
    image:
      "https://imgs.search.brave.com/qwpmigulmS26EBtcxnWPzxBhS3y6ZruxXkyr8GInbZc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMnFw/MHNpb3RsYTc0Ni5j/bG91ZGZyb250Lm5l/dC9pbWcvdXNlLWNh/c2VzL3Byb2ZpbGUt/cGljdHVyZS90ZW1w/bGF0ZV8wLmpwZw",
  },
  {
    quote:
      "The range of construction materials they offer is impressive. From basic supplies to specialized items, they have everything under one roof. Great inventory management!",
    name: "Sunitha",
    occupation: "Hardware Store Owner",
    image:
      "https://imgs.search.brave.com/ZhauOr1gejH4QOXVp0-kc2A2Odn4sQhLojjZprPcpzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MS8yMi8yMS80Mi93/b21hbi0xODUwNzAz/XzY0MC5qcGc",
  },
];

 


const Body = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    cover2,
    homecover,
    cover3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [formData, setState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setState({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
     <section className="relative h-screen overflow-hidden">
      {/* Image Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`
            }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Build Dreams, One Tool at a Time
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover our collection of premium products crafted with care.
          </p>
          <a
            href="/products"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-all duration-150"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
      <section className="min-h-screen bg-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-14">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-[500px] bg-orange-200 rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src={homecover}  alt="Puja Items" 
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                <div className="text-center">
                  <div className="text-2xl">10+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-2 md:order-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-black">
                About Us
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
              Eshwar Traders offers an online shopping platform for construction essentials, providing convenience and accessibility. From the comfort of home or office, customers can browse and order a variety of essential products, from cement and pipes to paints and tools, ensuring a seamless experience in fulfilling their building needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center transition-colors group-hover:bg-orange-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Quality Products</span>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center transition-colors group-hover:bg-orange-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">24/7 Support</span>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center transition-colors group-hover:bg-orange-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Authentic Items</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="min-h-screen bg-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Deal of the Day</h2>
            <p className="text-red-100">Exclusive daily offers on construction materials</p>
          </div>
          
          <div className="mb-16">
            <Card
              title={dealOfTheDay.title}
              description={dealOfTheDay.description}
              price={dealOfTheDay.price}
              originalPrice={dealOfTheDay.originalPrice}
              discount={dealOfTheDay.discount}
              timer={dealOfTheDay.timer}
              link={dealOfTheDay.link}
            />
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Special Offers</h2>
            <p className="text-orange-100">Limited time discounts on popular items</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialOffers.map((offer, index) => (
              <Card
                key={index}
                title={offer.title}
                description={offer.description}
                price={offer.price}
                originalPrice={offer.originalPrice}
                discount={offer.discount}
                link={offer.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 md:px-24 bg-gray-200 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black text-center md:text-left">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {customerTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                occupation={testimonial.occupation}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Add this after your customer testimonials section */}
      <section className="py-16 px-4 md:px-24 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black text-center">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Message Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.89843669664574!2d78.91315869999999!3d18.776531399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcd1389985adb85%3A0x3e47d814e6c7f5c7!2sEshwar%20Traders!5e0!3m2!1sen!2sin!4v1699686844317!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eshwar Traders Location Map"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Body