import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "../redux/usersSlice";
import UserTable from "../components/users/UserTable";
import UserForm from "../components/users/UserForm";

const Users = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const handleAddUser = () => {
    setCurrentUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  const handleSubmit = (userData) => {
    if (currentUser) {
      dispatch(editUser(userData));
    } else {
      dispatch(addUser(userData));
    }
    handleCloseModal();
  };

  return (
    <div>
      {/* Page Header */}
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
        <button
          onClick={handleAddUser}
          className="mt-10 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add New User
        </button>
      </div>

      {/* User Table */}
      <UserTable onEdit={handleEditUser} />

      {/* Modal for Add/Edit User */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center p-4 z-50">
          <div className="relative border w-full max-w-md shadow-lg rounded-md bg-white mx-auto">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                {currentUser ? "Edit User" : "Add New User"}
              </h3>
              <UserForm
                userData={currentUser}
                onSubmit={handleSubmit}
                onCancel={handleCloseModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
