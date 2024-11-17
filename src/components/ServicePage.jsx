import React from 'react';
import { 
  FaBuilding, 
  FaClipboardList, 
  FaBoxes, 
  FaTruck,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa';

const ServicePage = () => {
  const services = [
    {
      title: "Building Materials Supply",
      description: "High-quality construction materials including cement, steel, bricks, and more.",
      icon: FaBuilding,
      color: "text-blue-600"
    },
    {
      title: "Material Consultation",
      description: "Expert advice on choosing the right materials for your construction projects.",
      icon: FaClipboardList,
      color: "text-green-600"
    },
    {
      title: "Bulk Orders",
      description: "Special handling and pricing for large quantity orders.",
      icon: FaBoxes,
      color: "text-purple-600"
    },
    {
      title: "Delivery Services",
      description: "Timely delivery to your construction site with our dedicated fleet.",
      icon: FaTruck,
      color: "text-red-600"
    }
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      text: "+91 123-456-7890",
      color: "text-blue-600"
    },
    {
      icon: FaEnvelope,
      text: "contact@eshwartraders.com",
      color: "text-green-600"
    },
    {
      icon: FaClock,
      text: "Mon-Sat: 9:00 AM - 6:00 PM",
      color: "text-purple-600"
    },
    {
      icon: FaMapMarkerAlt,
      text: "jagitial,  India",
      color: "text-red-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              role="article"
              aria-labelledby={`service-title-${index}`}
            >
              <div className="mb-4">
                <h3 
                  id={`service-title-${index}`}
                  className="text-xl font-semibold flex items-center gap-3"
                >
                  <IconComponent className={`w-8 h-8 ${service.color}`} aria-hidden="true" />
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          );
        })}
      </div>

      <h2 className="text-2xl font-bold text-center mb-6">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactInfo.map((info, index) => {
          const IconComponent = info.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <IconComponent className={`w-6 h-6 ${info.color}`} aria-hidden="true" />
              <span className="text-gray-700">{info.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicePage;