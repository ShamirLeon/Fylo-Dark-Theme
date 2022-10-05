import Logo from "../../assets/logo.svg";
import IconLocation from "../../assets/icons/icon-location.png";
import IconPhone from "../../assets/icons/icon-phone.png";
import IconEmail from "../../assets/icons/icon-email.png";
import IconFb from "../../assets/icons/IconFb";
import IconInsta from "../../assets/icons/IconInsta.jsx";
import IconTwitter from "../../assets/icons/IconTwitter.jsx";

const Footer = () => {
  return (
    <>
      <footer className="bg-primaryB-700 pt-60 px-5 text-white font-opens ">
        <div className="lg:grid lg:grid-cols-[1fr_1fr_1fr_1fr_.5fr] max-w-[1000px] mx-auto cont ">
          <img src={Logo} className="my-10 " />
          <div className="grid lg:grid-cols-[1fr_1fr] items-center gap-y-5 lg:gap-y-0 my-10 lg:my-0 lg:col-start-1 lg:col-end-3 lg:items-start">
            <div>
              <img src={IconLocation} className="w-[12px] mr-2 inline" />
              <p className="inline">
                IconLocation USA | West Kieran-3394 | Leannon Mission
              </p>
            </div>
            <div className="lg:col-start-2 lg:col-end-3 ">
              <div className="pb-5 ">
                <img
                  src={IconPhone}
                  alt=""
                  className="w-[15px] inline mr-2  lg:mx-3"
                />
                <p className="inline">+1-543-123-4567</p>
              </div>

              <img src={IconEmail} alt="" className="w-[15px] mr-2  inline lg:mx-3" />
              <p className="inline-block">example@fylo.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:col-start-3 lg:col-end-4 mb-5">
            <a href="#" className="hover:font-extrabold">
              About
            </a>
            <a href="#" className="hover:font-extrabold">
              Jobs
            </a>
            <a href="#" className="hover:font-extrabold">
              Press
            </a>
            <a href="#" className="hover:font-extrabold">
              Blog
            </a>
          </div>
          <div className="flex flex-col gap-5 lg:col-start-4 ">
            <a href="#" className="hover:font-extrabold">
              Contact Us
            </a>
            <a href="#" className="hover:font-extrabold">
              Terms
            </a>
            <a href="#" className="hover:font-extrabold">
              Privacy
            </a>
          </div>

          <div className="flex gap-x-5 justify-center items-start py-10 lg:py-0 lg:col-start-5 lg:col-end-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="flex items-center hover:fill-accent-500 fill-white"
            >
              <IconFb></IconFb>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="flex items-center hover:fill-accent-500 fill-white"
            >
              <IconInsta></IconInsta>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="flex items-center hover:fill-accent-500 fill-white"
            >
              <IconTwitter></IconTwitter>
            </a>
          </div>
        </div>
      </footer>
      <div className="flex justify-center bg-primaryB-700 text-white pt-6">
        <span className="font-light font-opens text-sm">
          Coded By{" "}
          <a
            href="https://www.frontendmentor.io/profile/ShamirLeon"
            target="_blank"
            className="hover:text-accent-500 font-raleway"
          >
            Shamir León🦁
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
