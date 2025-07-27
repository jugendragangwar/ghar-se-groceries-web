import banner from "../assets/images/banner-bg.png";
import {
  Features,
  Products,
  Categories,
  Review,
  Blogs,
  FaqSection,
} from "./index";

const Home = () => {
  return (
    <>
      {/* Banner Section with Overlay Content */}
      <div className="relative w-full h-full">
        <img
          src={banner}
          alt="Fresh organic products banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-30">
          <div className="text-center text-gray-600 px-6 max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-4xl sm:mb-6 leading-tight">
              Fresh & <span className="text-orange-500">Organic</span> Products
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8">
              Discover the finest selection of farm-fresh organic produce,
              delivered straight from nature to your doorstep. Pure, healthy,
              and sustainably grown for your family.
            </p>

            {/* Shop Button */}
            <button className="bg-orange-400 text-white font-semibold py-2 px-6">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <Features />
      <Products />
      <Categories />
      <Review />
      <Blogs />
      <FaqSection />
    </>
  );
};

export default Home;
