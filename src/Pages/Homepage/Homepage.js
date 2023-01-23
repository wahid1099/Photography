import React from "react";
import Header from "../../Components/Navbar/head";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Services from "../../Components/Services/Services";

function Homepage() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
}

export default Homepage;
