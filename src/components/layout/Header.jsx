import logo from "../../assets/logo.png";
const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-[#59459b] shadow-sm p-4 flex justify-between items-center">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-white hover:text-gray-700 text-xl items-start mr-auto"
      >
        ☰
      </button>

      <img className="h-11 mr-[20%]" src={logo} alt="logo"></img>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="text-gray-500 hover:text-gray-700">
            <span className="text-xl">🔔</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-[#da6b04] rounded-full flex items-center justify-center text-white font-medium">
            A
          </div>
          <span className="text-sm font-medium text-white hidden sm:block">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
