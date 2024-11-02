import Header from "./components/header-top";
import Banner from "./components/banner";
import Banner2 from "./components/banner02";
import SmallerBanner from "./components/smaller-banner";
import Category from "./components/category";
import Products from "./components/products";
import Banners from "./components/banners";
import DiscountProducts from "./components/discount-products";
import Footer from "./components/footer";

export default function Home(){
  return(
   <div className="grid flex-wrap items-center m-auto justify-center">
    <Header/>
    <Banner/>
    <SmallerBanner/>
    <Category/>
    <Products/>
    <Banners/>
    <DiscountProducts/>
    <Banner2/>
    <Footer/>
   </div>
  );
}