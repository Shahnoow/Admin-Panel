import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/usersSlice";

const UserTable = ({ onEdit }) => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  if (users.length === 0) {
    return <p className="text-gray-500">No users found.</p>;
  }

  return (
    <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6 hidden sm:table-cell"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6 hidden md:table-cell"
            >
              Phone
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
            >
              Role
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sm:px-6">
                <div>{user.name}</div>
                <div className="text-xs text-gray-500 sm:hidden">
                  {user.email}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-6 hidden sm:table-cell">
                {user.email}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-6 hidden md:table-cell">
                {user.phone}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 sm:px-6">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {user.role}
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2 sm:space-x-3 sm:px-6">
                <button
                  onClick={() => onEdit(user)}
                  className="text-indigo-600 hover:text-indigo-900 text-xs sm:text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-600 hover:text-red-900 text-xs sm:text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
