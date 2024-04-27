import React from "react";
import HeaderHome from "../components/HeaderHome";
import CategorySection from "../components/CategorySection";
import Benefits from "../components/BenefitsSection";
import Footer from "../components/Footer";
import ProductsSection from "../components/ProductsSection";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <HeaderHome />
      <CategorySection />

      <h2 className="font-bold text-center text-4xl pb-8">Our Products</h2>

      <ProductsSection limit={8} />
      
      <div className="flex justify-center mb-16">
        <Link
          className=" text-primary font-semibold border-2 border-primary hover:bg-primary hover:text-white py-3 px-16"
          to={"/shop"}
        >
          Show More
        </Link>
      </div>

      <Benefits />
      
      <Footer />
    </div>
  );
};

export default Home;
