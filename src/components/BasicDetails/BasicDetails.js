import React, { useState } from "react";
import { TbNotebook } from "react-icons/tb";
import { SlPencil } from "react-icons/sl";
// import Modal from "../../ReUsable/Modal";
import { UserDetails } from "../../Constants/Data";

const BasicDetails = () => {
  const [editDetails, setEditDetails] = useState(false);
  const [userDetails, setUserDetails] = useState(UserDetails);
  const [editingId, setEditingId] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  // Function to handle the edit task for single item
  const handleEdit = (id) => {
    setEditingId(id);
    setEditedValue(userDetails.find((detail) => detail.id === id).value);
  };

  //Function to handle the cancel edit
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedValue("");
    setEditDetails(false);
  };

  // Function to save edited details
  const handleSaveEdit = () => {
    setUserDetails(
      userDetails.map((detail) =>
        detail.id === editingId ? { ...detail, value: editedValue } : detail
      )
    );
    setEditingId(null);
    setEditedValue("");
    setEditDetails(false);
  };
  return (
    <>
      <div className="flex mb-1 p-5 justify-between ...">
        <div>
          <div className="text-3xl flex align items-center">
            <TbNotebook />{" "}
            <span className="text-sm font-semibold uppercase text-[#424242]">
              {" "}
              Basic Details
            </span>
          </div>
        </div>
        <div className="text-2xl cursor-pointer text-[#484848]">
          <button onClick={() => setEditDetails(true)}>
            <SlPencil />
          </button>
        </div>
      </div>
      <hr />
      <div className="p-5 text-sm leading-8">
        <table>
          <tbody>
            {userDetails.map((detail) => (
              <tr key={detail.id} className="p-5">
                <td>{detail.title}: </td>
                <td>
                  {editingId === detail.id ? (
                    <input
                      type="text"
                      value={editedValue}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      onChange={(e) => setEditedValue(e.target.value)}
                    />
                  ) : (
                    <span className="font-semibold">{detail.value}</span>
                  )}
                </td>
                {editDetails && (
                  <td>
                    {editingId === detail.id ? (
                      <>
                        <button
                          type="button"
                          onClick={handleSaveEdit}
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={handleCancelEdit}
                          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleEdit(detail.id)}
                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {editDetails && (
        <Modal
          editDetails={editDetails}
          toggleModal={setEditDetails}
          userData={userDetails}
          changeUserDetails={setUserDetails}
        />
      )} */}
    </>
  );
};

export default BasicDetails;
