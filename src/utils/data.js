//product image
import product1 from "../assets/product/01.png";
import product2 from "../assets/product/02.png";
import product3 from "../assets/product/03.png";
import product4 from "../assets/product/04.png";
import product5 from "../assets/product/05.png";
import product6 from "../assets/product/06.png";
import product7 from "../assets/product/07.png";
import product8 from "../assets/product/08.png";
import product9 from "../assets/product/09.png";
import product10 from "../assets/product/10.png";

//slider image

import slider4 from "../../src/assets/banner/slide-1.jpg";
import slider5 from "../../src/assets/banner/slider-2.jpg";

//category image
import cat1 from "../../src/assets/cat/01.png";
import cat2 from "../../src/assets/cat/02.png";
import cat3 from "../../src/assets/cat/03.png";
import cat4 from "../../src/assets/cat/04.png";
import cat5 from "../../src/assets/cat/05.png";
import cat6 from "../../src/assets/cat/06.png";
import cat7 from "../../src/assets/cat/07.png";
import cat8 from "../../src/assets/cat/08.png";
import cat9 from "../../src/assets/cat/09.png";
import cat10 from "../../src/assets/cat/10.png";

//category image
import feature1 from "../../src/assets/icons/01.png"
import feature2 from "../../src/assets/icons/02.png"
import feature3 from "../../src/assets/icons/03.png"
import feature4 from "../../src/assets/icons/04.png"

//new image
import newcat1 from "../../src/assets/offer/01.png"
import newcat2 from "../../src/assets/offer/02.png"
import newcat3 from "../../src/assets/offer/03.png"
import newcat4 from "../../src/assets/offer/04.png"
import newcat5 from "../../src/assets/offer/05.png"


export const sliderData = [
  // {
  //   id: 0,
  //   heading: "Healthy Food </br> Available to Everyone",
  //   title: "🔥 Free shipping - order over ",
  //   image: slider2,
  // },
  // {
  //   id: 1,
  //   heading: "Organic eggs from </br> home-grown chicken",
  //   title: "🥚 Organic products to your table",
  //   image: slider1,
  // },
  // {
  //   id: 2,
  //   heading: "Enjoy refreshing </br> summer drink",
  //   title: "🥝 Only natural ingredients",
  //   image: slider3,
  // },
  {
    id: 4,
    heading: "SuperMarket For  Fresh  <br> Grocery ",
    title: "Introduced a new model for online grocery shopping and convenient home delivery.",
    image: slider4,
  },
  {
    id: 5,
    heading: " Free Shipping on  <br>  orders over <span class='primary-text'>$100</span>",
    title: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
    image: slider5,
  },

];

export const categoriesData = [
  { id: 0, title: "Atta, Rice & Dal", image: cat1, url: "" },
  { id: 1, title: "Baby Care", image: cat2, url: "" },
  { id: 2, title: "Biscuits & Snacks", image: cat3, url: "" },
  { id: 3, title: "Chicken, Meat & Fish", image: cat4, url: "" },
  { id: 4, title: "Cleaning Essentials", image: cat5, url: "" },
  { id: 5, title: "Instant Food", image: cat6, url: "" },
  { id: 6, title: "Dairy, Bread & Eggs", image: cat7, url: "" },
  { id: 7, title: "Fruits & Vegetables", image: cat8, url: "" },
  { id: 7, title: "Breads & Bakery", image: cat9, url: "" },
  { id: 8, title: "Tea, Coffee & Drinks", image: cat10, url: "" },
];

export const bestCategoriesData =[
    {
      id:0,
      title: "Only fresh fish to your table",
      products: "124 products",
      image:newcat1,
      color:"var(--clr-box1)"
    },
    {
      id:1,
      title: "Products for Easter table",
      products: "97 products",
      image:newcat2,
      color:"var(--clr-box2)"
    },
    {
      id:2,
      title: "Berries from the garden",
      products: "28 products",
      image:newcat3,
      color:"var(--clr-box3)"
    }

]

export const offerData =[
  {
    id:0,
    title: "Your Online Market for Fresh Fruits & Vegetables",
    products: "Get Upto 30% Off",
    image:newcat4,
    color:"var(--clr-bg)"
  },
  {
    id:1,
    title: "Fresh Warm Buns: Delivered to You",
    products: "Get Upto 25% Off",
    image:newcat5,
    color:"var(--clr-bg)"
  },


]





export const productData = [
  {
    id: 0,
    title: "Muesli Fitness Energy",
    price: 300,
    offerPrice: 280,
    cat: "Dairy, Bread & Eggs",
    image: product1,
    rating: 4,
  },
  {
    id: 1,
    title: "Fresh orange",
    price: 100,
    offerPrice: 0,
    cat: "Fruits & Vegetables",
    image: product2,
    rating: 3,
  },
  {
    id: 2,
    title: "Pepsi soda classic",
    price: 80,
    offerPrice: 75,
    cat: "Tea, Coffee & Drinks",
    image: product3,
    rating: 5,
  },
  {
    id: 3,
    title: "  cheese Granaloro",
    price: 450,
    offerPrice: 430,
    cat: "Dairy, Bread & Eggs",
    image: product4,
    rating: 4,
  },
  {
    id: 4,
    title: "Coconut ",
    price: 50,
    offerPrice: 0,
    cat: "Fruits & Vegetables",
    image: product5,
    rating: 3,
  },
  {
    id: 5,
    title: "Pesto sauce Barilla  ",
    price: 280,
    offerPrice: 240,
    cat: "Snack & Munchies",
    image: product6,
    rating: 5,
  },
  {
    id: 6,
    title: "Fresh mango, Spain  ",
    price: 90,
    offerPrice: 85,
    cat: "Snack & Munchies",
    image: product7,
    rating: 3,
  },

  {
    id: 7,
    title: "Fresh mango, Spain  ",
    price: 190,
    offerPrice: 165,
    cat: "Fruits & Vegetables",
    image: product8,
    rating: 3,
  },

  {
    id: 8,
    title: "Fresh green asparagus ",
    price: 130,
    offerPrice: 0,
    cat: "Fruits & Vegetables",
    image: product9,
    rating: 3,
  },

  {
    id: 10,
    title: "Reggia penne rigate",
    price: 620,
    offerPrice: 580,
    cat: "Pesto sauce Barilla",
    image: product10,
    rating: 5,
  },
];

export const featureData = [
  {
    id: 0,
    title: "Payment only online",
    text: "Lorem Ipsum is simply dummy text of the printing.",
    image: feature1,
    
  },
  {
    id: 1,
    title: "New stocks and sales",
    text: "Lorem Ipsum is simply dummy text of the printing.",
    image: feature2,
  },
  {
    id:2, 
    title:'Quality assurance', 
    text:'Lorem Ipsum is simply dummy text of the printing.',
    image:feature3,
  },
  {
    id:3, 
    title:'Delivery from 1 hour', 
    text:'Lorem Ipsum is simply dummy text of the printing.',
    image:feature4,
  }
];
