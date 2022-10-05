import Data from "./data/data.json";

import Hero from "./components/Hero/Hero";
import NavBar from "./components/Menu/NavBar";
import Services from "./components/Services/Services";
import StayProductive from "./components/Stay/StayProductive";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero
        title={Data.hero.title}
        paragraph={Data.hero.description}
        textCta="Get Started"
      ></Hero>
      <Services></Services>
      <StayProductive title={Data.stay.title} description1={Data.stay.description1} description2={Data.stay.description2}></StayProductive>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
};

export default App;
