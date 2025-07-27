import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";

import { ShoppingCart, Heart, Store } from "lucide-react";
import { PRODUCTS_DATA, ProductType } from "../db/data";


const ProductCard: React.FC<{
  product: ProductType;
  onAddToCart: (product: ProductType) => void;
}> = ({ product, onAddToCart }) => {
  const calculateDiscount = () => {
    if (!product.originalPrice) return null;
    const discount = ((product.originalPrice - product.price) / product.originalPrice) * 100;
    return `${Math.round(discount)}%`;
  };

  const discountText = calculateDiscount();

  return (
    <div className="bg-white p-2 relative group card_border">
      {discountText && (
        <div className="absolute top-0 left-0 flex flex-col bg-green-500 text-white text-xs font-semibold px-[3px] py-[5px]">
          <span className="tracking-wider">{discountText}</span>
          <span>OFF</span>
        </div>
      )}
      <Heart className="absolute top-2 right-2 w-6 h-6 text-gray-300 cursor-pointer" />
      <div className="flex flex-col">
        <div className="overflow-hidden">
          <img src={product.image} alt={product.name} className="h-60 object-contain" />
        </div>
        <h3 className="card_heading mb-2 text-left">{product.name}</h3>
        <div className="flex items-center justify-between w-full">
          <span className="card_description">₹{product.price}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onAddToCart(product)}
              className="p-2 bg-orange-500 hover:bg-orange-600 text-white transition"
              title="Add to Cart"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-orange-500 border transition"
              title="Shop Now"
            >
              <Store className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Shop: React.FC = () => {
  const [, setCart] = useState<ProductType[]>([]);
  const topSwiperRef = useRef<SwiperCore | null>(null);
  const bottomSwiperRef = useRef<SwiperCore | null>(null);

  const handleAddToCart = (product: ProductType) => {
    setCart((prev) => [...prev, product]);
    console.log("Added to cart:", product.name);
  };

  const half = Math.ceil(PRODUCTS_DATA.length / 2);
  const topProducts = PRODUCTS_DATA.slice(0, half);
  const bottomProducts = PRODUCTS_DATA.slice(half);

  const handleMouseEnter = (swiperRef: React.MutableRefObject<SwiperCore | null>) => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = (swiperRef: React.MutableRefObject<SwiperCore | null>) => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <div className="section_margin">
      <h1 className="main_heading">
        Our{' '}
        <span className="heading_span">
          Products
        </span>
      </h1>

      {/* Top Swiper */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={5}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => (topSwiperRef.current = swiper)}
        loop={true}
        breakpoints={{
          350: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="mb-2"
      >
        {topProducts.map((product) => (
          <SwiperSlide
            key={product.id}
            onMouseEnter={() => handleMouseEnter(topSwiperRef)}
            onMouseLeave={() => handleMouseLeave(topSwiperRef)}
          >
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Swiper */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={5}
        autoplay={{ delay: 4000 }}
        loop={true}
        onSwiper={(swiper) => (bottomSwiperRef.current = swiper)}
        breakpoints={{
          350: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {bottomProducts.map((product) => (
          <SwiperSlide
            key={product.id}
            onMouseEnter={() => handleMouseEnter(bottomSwiperRef)}
            onMouseLeave={() => handleMouseLeave(bottomSwiperRef)}
          >
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Shop;