import React from "react";
import { TbNotebook } from "react-icons/tb";
import { SlPencil } from "react-icons/sl";
import { UserTaxDetails } from "../../Constants/Data";
import { FiAlertTriangle } from "react-icons/fi";

const TaxDetails = () => {
  return (
    <>
      <hr />
      <div className="flex  p-5 justify-between ...">
        <div>
          <div className="text-3xl flex align items-center">
            <TbNotebook />{" "}
            <span className="text-sm font-semibold uppercase text-[#424242]">
              {" "}
              Tax Details
            </span>
          </div>
        </div>
        <div className="text-2xl cursor-pointer text-[#484848]">
          <SlPencil />
        </div>
      </div>
      <hr />
      <div className="flex justify-between text-sm leading-8">
        <div className="p-5 text-sm leading-8">
          <ul>
            {UserTaxDetails.map((item) => (
              <li key={item.id}>
                {item.title} :{" "}
                <span className="font-semibold">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-96 h-20 pl-4 pt-3 flex flex-col text-left bg-[#FFEBE6]">
          <div className="text-20xl text-[#D85040]">
            <i className="inline-block pr-2">
              <FiAlertTriangle />
            </i>
            KYC REQUIRED
          </div>
          <div className="pl-2"></div>
          <p className="text-xs">
            please collect Supporting document and upload to the system
          </p>
        </div>
      </div>
    </>
  );
};

export default TaxDetails;
