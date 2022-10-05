import Data from "../../data/data.json";

import Quotes from "../../assets/images/bg-quotes.png";
import ImgUSer1 from "../../assets/images/profile-1.jpg";
import ImgUSer2 from "../../assets/images/profile-2.jpg";
import ImgUSer3 from "../../assets/images/profile-3.jpg";
import TestimonialItem from "./TestimonialItem";
import EarlyAccess from "../EarlyAccess/EarlyAccess";

const ImgUsers = [ImgUSer1, ImgUSer2, ImgUSer3];

const Testimonials = () => {
  return (
    <div className="px-12 py-14 pb-52 bg-primaryB-600 relative">
      <img src={Quotes} className="w-[20px]" />
      <div className="flex flex-col lg:flex-row gap-8 lg:max-w-[1200px] mx-auto">
        {Data.testimonials.map((e, index) => {
          return (
            <TestimonialItem
              comment={e.comment}
              user={e.user}
              img={ImgUsers[index]}
              role={e.role}
              key={index}
            />
          );
        })}
      </div>

      <EarlyAccess
        title={Data.earlyAccess.title}
        description={Data.earlyAccess.description}
        textCta="Get Started For Free"
      ></EarlyAccess>
    </div>
  );
};

export default Testimonials;
