const TestimonialItem = ({ comment, user, img, role }) => {
  return (
    <div className="bg-primaryB-400 text-white p-4 rounded-xl">
      <p className="font-opens text-xs leading-5">{comment}</p>
      <div className="flex gap-2 items-center pt-4">
        <img
          src={img}
          alt={user}
          className="w-[45px] rounded-[50%] inline-block"
        />
        <div className="inline-block">
          <h3 className="font-raleway font-bold ">{user}</h3>
          <p className="font-opens text-xs ">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
