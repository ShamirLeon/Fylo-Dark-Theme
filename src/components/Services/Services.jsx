import Data from "../../data/data.json";

import IconAccess from "../../assets/icons/icon-access-anywhere.png";
import IconSecurity from "../../assets/icons/icon-security.png";
import IconCollab from "../../assets/icons/icon-collaboration.png";
import IconAnyFile from "../../assets/icons/icon-any-file.png";

import ServicesItem from "./ServicesITem";

const Icons = [IconAccess, IconSecurity, IconCollab, IconAnyFile];
const items = Data.services.map((e, index) => {
  return (
    <div
      key={index}
      className=" pt-14 pb-10 px-5 text-center text-white lg:p-0 lg:grid lg:grid-rows-[1fr_.5fr_1fr] lg:grid-cols-[350px] lg:content-center lg:justify-center"
    >
      <img src={Icons[index]} className="w-[20%]  mx-auto" />
      <ServicesItem title={e.title} description={e.description} />
    </div>
  );
});

const Services = () => {
  return (
    <div className="lg:p-20 z-50 relative bg-primaryB-600">
      <div className="grid lg:grid-cols-2 lg:w-full max-w-[1000px] lg:m-auto gap-10 ">
        {items}
      </div>
    </div>
  );
};

export default Services;
