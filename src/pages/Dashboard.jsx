const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Quick Stats
          </h3>
          <p className="text-gray-600">
            Welcome to your admin dashboard. Here you can manage users, view
            analytics, and monitor system performance.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Recent Activity
          </h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• New user registered 2 hours ago</li>
            <li>• Analytics report generated</li>
            <li>• System update completed</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            System Status
          </h3>
          <div className="flex items-center text-sm">
            <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-green-700">All systems operational</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Getting Started
        </h3>
        <p className="text-gray-600">
          Use the sidebar to navigate between different sections. Start by
          managing users or exploring analytics data.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
