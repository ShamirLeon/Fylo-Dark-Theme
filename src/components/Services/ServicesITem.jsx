
const ServicesItem = ({ title, description }) => {
  return (
    <>
      <h3 className="font-raleway font-bold text-xl pt-6 pb-4">{title}</h3>
      <p className="font-opens text-sm font-normal leading-relaxed">{description}</p>
    </>
  );
};

export default ServicesItem;
