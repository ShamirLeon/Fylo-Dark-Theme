import HeroImg from "../../assets/images/illustration-intro.png";
import Cta from "../Cta/Cta";

const Hero = ({ title, paragraph, textCta }) => {
  return (
    <div className="bg-primaryB-500 h-full w-full z-40 relative">
      <img
        src={HeroImg}
        alt="Fylo-Dark-Theme-Intro"
        className="w-[90%] max-w-[600px] lg:pt-10 m-auto z-20 relative"
      />
      <div className="text-white text-center mt-[100px] pb-12 px-5 z-40 relative  lg:mx-auto bg-primaryB-600 lg:bg-transparent">
        <div className="lg:max-w-[600px] mx-auto">
          <h2 className="font-raleway text-[25px] font-bold mb-5 ">{title}</h2>
          <p className="font-opens text-[14px] font-thin mb-7">{paragraph}</p>
        </div>
        <Cta text={textCta}></Cta>
      </div>

      <div className="w-[100%] h-[60%]  bg-[url('src/assets/icons/bg-curvy-mobile.svg')]  lg:bg-[url('src/assets/icons/bg-curvy-desktop.svg')]  bg-center bg-contain  bg-no-repeat z-0 absolute top-[18%] lg:top-[50%] "></div>
    </div>
  );
};

export default Hero;
