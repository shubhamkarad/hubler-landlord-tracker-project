import React, { useState } from "react";
import { TbNotebook } from "react-icons/tb";
import { SlPencil } from "react-icons/sl";
import { MdOutlineFileDownload } from "react-icons/md";
import PdfWall from "../../Assets/PdfWall.png";

const UserDocuments = () => {
  const [pdfs, setPdfs] = useState([]);
  const [attachFile, setAttachFile] = useState(false);

  // Function call on change of file
  function onFileChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      const dataUrl = reader.result;
      const pdfObject = { name: file.name, data: dataUrl };
      setPdfs([...pdfs, pdfObject]);
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <hr />
      <div className="flex  p-5 items-center justify-between ...">
        <div>
          <div className="text-3xl flex align items-center w-65">
            <TbNotebook />{" "}
            <span className="text-sm font-semibold uppercase text-[#424242]">
              Dcouments
            </span>
          </div>
        </div>
        <div className="flex items-center text-2xl cursor-pointer text-[#484848]">
          <button
            type="button"
            className="py-1.5 px-2 mr-9 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700   dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <div className="flex align items-center">
              <MdOutlineFileDownload />{" "}
              <span className="ml-1">Download All</span>
            </div>
          </button>
          <button onClick={() => setAttachFile(true)}>
            <SlPencil />
          </button>
        </div>
      </div>
      <hr />
      {attachFile && <input type="file" onChange={onFileChange} />}
      <div className="p-5 text-sm leading-8">
        <div
          href="#"
          className="flex items-center max-w-fit py-4 px-5 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-200  dark:hover:bg-gray-300"
        >
          <div className="h-20">
            {" "}
            <img className="w-20 h-20" src={PdfWall} alt="pdf new" />
          </div>
          <div className="pl-4">
            <p className="font-semibold text-gray-700 dark:text-black">
              GST Certificate.pdf
            </p>
            <p className="font-normal text-tilt-black">GST Certificate.pdf</p>
            <div className="flex justify-between">
              <div>
                <p className="font-normal text-tilt-black">9 MB</p>
              </div>
              <div className="text-2xl">
                <MdOutlineFileDownload />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDocuments;
