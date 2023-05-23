import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "ShopZone",
    imgSrc :"https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/01/25181555/eCommerce-Cartoon.png",
    intro : "Welcome To",
    content :`No need to go to the market and search different stores for what you need,
   <br>  WE GOT YOU!
    Shop with ShopZone and find the perfect match at one place.
    We have a wide variety of Products for your every ask. 
    <br> </br>
   <strong> Happy Shopping ! </strong>  `,
  };


  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
