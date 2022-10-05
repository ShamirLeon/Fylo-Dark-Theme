import ImgStay from "../../assets/images/illustration-stay-productive.png";
import IconArrow from "../../assets/icons/icon-arrow.png";

const StayProductive = ({ title, description1, description2 }) => {
  return (
    <div className=" bg-primaryB-600">
      <div className="py-10 px-5 flex flex-col lg:flex-row lg:items-center lg:max-w-[1200px] lg:gap-8 lg:mx-auto">
        <img src={ImgStay} alt="Stay Productive" className="lg:w-[600px]" />
        <div className="text-white">
          <h2 className="font-raleway font-bold  mt-8 mb-5">{title}</h2>
          <p className="font-opens text-sm tracking-[1px] font-thin my-5">
            {description1}
          </p>
          <p className="font-opens text-sm tracking-[1px] font-thin mb-3">
            {description2}
          </p>
          <a
            href="#"
            className="text-accent-400 underline font-raleway text-sm"
          >
            See how Fylo works{" "}
            <img src={IconArrow} className="w-[6%] inline-block" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default StayProductive;
