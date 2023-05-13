import React from "react";
import { TbNotebook } from "react-icons/tb";
import { SlPencil } from "react-icons/sl";
import { UserBankDetails } from "../../Constants/Data";
import { BsCheckCircleFill } from "react-icons/bs";

const BankDetails = () => {
  return (
    <>
      <hr />
      <div className="flex  p-5 justify-between ...">
        <div>
          <div className="text-3xl flex align items-center">
            <TbNotebook />{" "}
            <span className="text-sm font-semibold uppercase text-[#424242]">
              {" "}
              Bank Details
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
            {UserBankDetails.map((item) => (
              <li key={item.id}>
                {item.title} :{" "}
                <span className="font-semibold">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-96 h-50 pl-4 pt-3 bg-[#E3FCEF]">
          <div className="text-20xl text-[#323232]">
            <i className="text- inline-block pr-2 text-[#81D165]">
              <BsCheckCircleFill />
            </i>
            VERIFICATION SUCCESSFUL
          </div>
          <div className="pl-6 grid grid-cols-2 gap-2">
            <div>
              <p>Transaction Id</p>
              <p>fet6488BG323</p>
            </div>
            <div>
              <p>Status</p>
              <p>Success</p>
            </div>
            <div>
              <p>Date & Time</p>
              <p>12th Sept 2022, 12:20</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankDetails;
