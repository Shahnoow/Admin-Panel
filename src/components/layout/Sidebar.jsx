import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const navigation = [
    { name: "Dashboard", href: "/", icon: "📊" },
    { name: "Users", href: "/users", icon: "👥" },
    { name: "Analytics", href: "/analytics", icon: "📈" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-30
        bg-[#4e1975] text-white w-64 min-h-screen p-4
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex items-center justify-between mb-10 p-4">
          <div className="text-2xl font-bold text-white">Admin Panel</div>
          <button onClick={onClose} className="lg:hidden text-white text-2xl">
            ×
          </button>
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "bg-[#9d93a280] text-white font-medium"
                    : "text-white hover:bg-[#9d93a280]"
                }`
              }
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
