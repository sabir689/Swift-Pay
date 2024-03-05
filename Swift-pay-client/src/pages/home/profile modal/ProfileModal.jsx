/* eslint-disable react/prop-types */
const ProfileModal = ({ profileInfo, handleUpdate }) => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="bg-white p-7 rounded-md">
            <div className="flex items-center justify-center dark">
              <div className="border-[1px] border-gray-500 rounded-lg shadow-md p-6">
                <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
                  Update profile
                </h2>
                <form onSubmit={handleUpdate} className="flex flex-col">
                  <div className="flex space-x-4 mb-4">
                    <input
                      name="firstName"
                      placeholder="First Name"
                      defaultValue={profileInfo?.firstName}
                      className="bg-gray-400 text-gray-800 border-0 rounded-md p-2 w-1/2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                      type="text"
                    />
                    <input
                      name="lastName"
                      placeholder="Last Name"
                      defaultValue={profileInfo?.lastName}
                      className="bg-gray-400 text-gray-800 border-0 rounded-md p-2 w-1/2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                      type="text"
                    />
                  </div>
                  <input
                    placeholder="Email"
                    defaultValue={profileInfo?.email}
                    readOnly
                    className="bg-gray-400 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="email"
                  />
                  <input
                    name="address"
                    placeholder="Current address"
                    defaultValue={profileInfo?.address}
                    className="bg-gray-400 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                  />
                  <input
                    name="photoURL"
                    placeholder="Your Photo Image link"
                    defaultValue={profileInfo?.photoURL}
                    className="bg-gray-400 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                  />

                  <label className="text-sm mb-2 text-gray-800 cursor-pointer">
                    Gender
                  </label>
                  <select
                    name="gender"
                    defaultValue={profileInfo?.gender}
                    className="bg-gray-400 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  >
                    <option disabled selected>
                      Select one
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>

                  <label className="text-sm mb-2 text-gray-800 cursor-pointer">
                    Age
                  </label>
                  <input
                    name="age"
                    defaultValue={profileInfo?.age}
                    className="bg-gray-400 text-gray-200 border-0 rounded-md p-2"
                    type="date"
                  />

                  <button
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                    type="submit"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProfileModal;
