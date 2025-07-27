export const NAV_DATA = [
  { name: "Home", icon: "🏠" },
  { name: "Features", icon: "⭐" },
  { name: "Products", icon: "📦" },
  { name: "Categories", icon: "📋" },
];

import feature1 from "../assets/images/feature-img-1.png";
import feature2 from "../assets/images/feature-img-2.png";
import feature3 from "../assets/images/feature-img-3.png";
export const FEATURES_DATA = [
  {
    img: feature2,
    title: "Fresh And Organic",
    desc: "We ensure the best organic produce from farms.",
  },
  {
    img: feature1,
    title: "Easy Payments",
    desc: "Pay easily with UPI, cards, or cash on delivery",
  },
  {
    img: feature3,
    title: "Free Delivery",
    desc: "Delivery is free on all orders above ₹499.",
  },

];

// src/data/productData.ts

import Product1 from "../assets/images/product1.png";
import Product2 from "../assets/images/product2.png";
import Product3 from "../assets/images/product3.png";
import Product4 from "../assets/images/product4.png";
import Product5 from "../assets/images/product5.png";
import Product6 from "../assets/images/product6.png";
import Product7 from "../assets/images/product7.png";
import Product8 from "../assets/images/product8.png";
import Product9 from "../assets/images/product9.png";
import Product10 from "../assets/images/product10.png";
export type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
};

export const PRODUCTS_DATA: ProductType[] = [
  {
    id: 1,
    name: "Fresh Orange",
    image: Product1,
    price: 331,
    originalPrice: 497,
  },
  {
    id: 2,
    name: "Fresh Onion",
    image: Product2,
    price: 248,
    originalPrice: 414,
  },
  {
    id: 3,
    name: "Premium Meat",
    image: Product3,
    price: 1327,
    originalPrice: 1659,
  },
  {
    id: 4,
    name: "Fresh Cabbage",
    image: Product4,
    price: 207,
    originalPrice: 331,
  },
  {
    id: 5,
    name: "Organic Potato",
    image: Product5,
    price: 165,
    originalPrice: 248,
  },
  {
    id: 6,
    name: "Ripe Avocado",
    image: Product6,
    price: 414,
    originalPrice: 580,
  },
  {
    id: 7,
    name: "Baby Carrot",
    image: Product7,
    price: 290,
    originalPrice: 414,
  },
  {
    id: 8,
    name: "Green Lemon",
    image: Product8,
    price: 232,
    originalPrice: 331,
  },
  {
    id: 9,
    name: "Fresh Cow Milk",
    image: Product9,
    price: 58,
    originalPrice: 72,
  },
  {
    id: 10,
    name: "Organic Buffalo Milk",
    image: Product10,
    price: 65,
    originalPrice: 80,
  }

];

import cat1 from "../assets/images/cat-1.png";
import cat2 from "../assets/images/cat-2.png";
import cat3 from "../assets/images/cat-3.png";
import cat4 from "../assets/images/cat-4.png";
export const VATEGORIES_DATA = [
  {
    title: "vegetables",
    offer: "upto 45% off",
    image: cat1,
  },
  {
    title: "fresh fruits",
    offer: "upto 45% off",
    image: cat2,
  },
  {
    title: "dairy products",
    offer: "upto 45% off",
    image: cat3,
  },
  {
    title: "fresh meat",
    offer: "upto 45% off",
    image: cat4,
  },
];

type Review = {
  name: string;
  image: string;
  text: string;
};

import pic1 from "../assets/images/pic-1.png";
import pic2 from "../assets/images/pic-2.png";
import pic3 from "../assets/images/pic-3.png";
import pic4 from "../assets/images/pic-4.png";
export const REVIEWS_DATA: Review[] = [
  {
    name: "Kapil Gangwar",
    image: pic1,
    text: "Amazing fresh vegetables! Been ordering for 6 months and the quality is unmatched. Delivery is always on time and everything stays fresh.",
  },
  {
    name: "Mangalm Gandi",
    image: pic2,
    text: "Great organic produce! The fruits are incredibly sweet and my kids actually enjoy eating vegetables now. Excellent customer service too.",
  },
  {
    name: "Arun",
    image: pic3,
    text: "Shopping here for over a year. Love the seasonal variety and farm-fresh quality. Knowing the source of my food gives me peace of mind.",
  },
  {
    name: "Ambuj",
    image: pic4,
    text: "Premium quality organic produce! Professional delivery and vegetables stay fresh much longer. Recommended to all my neighbors. Five stars!",
  },
];

interface Blog {
  id: number;
  image: string;
  date: string;
  title: string;
  summary: string;
}
import Blog1 from "../assets/images/blog-1.png";
import Blog2 from "../assets/images/blog-2.png";
import Blog3 from "../assets/images/blog-3.png";
import Blog4 from "../assets/images/blog-4.png";
export const BLOGS_DATA: Blog[] = [
  {
    id: 1,
    image: Blog1,
    date: "1st May, 2022",
    title: "Fresh and Organic Vegetables",
    summary: "Eat your greens, grow your dreams",
  },
  {
    id: 2,
    image: Blog2,
    date: "1st June, 2022",
    title: "Fresh and Organic Fruits",
    summary: "Juicy, fresh, and full of life",
  },
  {
    id: 3,
    image: Blog3,
    date: "1st July, 2022",
    title: "Farm Fresh Meat",
    summary: "From farm to flame — pure protein power.",
  },
  {
    id: 4,
    image: Blog4,
    date: "1st August, 2022",
    title: "Pure and Fresh Dairy Products",
    summary: "From our farms to your fridge",
  }
];


import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import paymentImg from "../assets/images/payment.png";
export const FOOTER_DATA = {
  logo,
  description: "We are committed to providing fresh vegetables, seasonal fruits, quality meat, and daily milk products directly to your doorstep with care and convenience.",
  socialLinks: [
    { icon: FaFacebookF, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedin, href: "#" },
  ],
  contactInfo: [
    { icon: FaPhone, label: "+91 7409750449", href: "#" },
    { icon: FaEnvelope, label: "jugendra8791@gmail.com", href: "#" },
    { icon: FaMapMarkerAlt, label: "Uttar Pradesh, India", href: "#" },
  ],
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Products", href: "#products" },
    { name: "Categories", href: "#categories" },
    { name: "Review", href: "#review" },
    { name: "Blogs", href: "#blogs" },
  ],
  paymentImg,
};
