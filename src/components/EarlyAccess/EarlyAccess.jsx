import { useState } from "react";
import Cta from "../Cta/Cta";

const EarlyAccess = ({ title, description, textCta }) => {
  const [email, setEmail] = useState("");
  const errorMessage = checkemail(email);
  return (
    <div className="bg-primaryB-400 text-white text-center p-5 lg:px-10 rounded-2xl w-[350px] lg:w-[1000px] my-[40px] lg:mt-[100px] mx-auto left-0 right-0 absolute">
      <h2 className="font-raleway font-bold tracking-[1.5px] my-5 text-xl">
        {title}
      </h2>
      <p className="text-opens mt-5 mb-10">{description}</p>

      <form className="lg:inline-block relative">
        <input
          name="email"
          type="text"
          autoComplete="off"
          placeholder="email@example.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className="block  mx-auto mr-10 mb-8 rounded-[30px] px-6 lg:w-[450px] py-[10px] text-black"
        />

        <span className="block text-red-600 text-center lg:text-left absolute bottom-[-21px] lg:bottom-0 pl-5">
          {errorMessage}
        </span>
      </form>
      <Cta text={textCta}></Cta>
    </div>
  );
};

const checkemail = (email) => {
  if (!email.includes("@")) return "Please enter a valid email address.";
};

export default EarlyAccess;
