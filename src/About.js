import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "ShopZone",
    imgSrc:"https://www.shutterstock.com/image-vector/group-portrait-funny-smiling-office-260nw-1249852108.jpg",
    intro : "",
    content: `<div> We're thrilled to have you here,
    <br>At ShopZone, we're passionate about providing our customers with the best possible online shopping experience. We believe that shopping should be easy, fun, and convenient, and we work hard to ensure that every aspect of our website reflects that philosophy.
    <br> </br>
    Our team is made up of experienced ecommerce professionals who have a deep understanding of what it takes to build and run a successful online store. From web design and development to product sourcing and logistics, we have the skills and expertise necessary to provide you with the products you need, when you need them.
     <br> We're committed to offering a wide range of high-quality products at competitive prices, so you can find exactly what you're looking for without breaking the bank. Whether you're in the market for the latest fashion trends cutting-edge electronics, or anything in between, we've got you covered.
      <br> </br>
      At ShopZone, we're always looking for ways to improve our website and make your shopping experience even better. We welcome your feedback and suggestions, and we're always happy to hear from our customers. 
      <br> So if you have any questions, comments, or concerns, please don't hesitate to contact us.
      <br> </br>
      Thank you for choosing ShopZone. We look forward to serving you and helping you find the products you need to live your best life!
      <br></br>
      If you want to know more about us feel free to write to our mail.  </div>`,
    };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
