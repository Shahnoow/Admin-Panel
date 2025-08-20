import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for charts
const lineData = [
  { name: "Mon", visitors: 4000 },
  { name: "Tue", visitors: 3000 },
  { name: "Wed", visitors: 2000 },
  { name: "Thu", visitors: 2780 },
  { name: "Fri", visitors: 1890 },
  { name: "Sat", visitors: 2390 },
  { name: "Sun", visitors: 3490 },
];

const pieData = [
  { name: "Admin", value: 12 },
  { name: "Editor", value: 19 },
  { name: "User", value: 45 },
];

const barData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 2000 },
  { name: "Apr", revenue: 2780 },
  { name: "May", revenue: 1890 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

// Line Chart Component
export const LineChartComponent = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg h-80">
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        Website Traffic (Last 7 Days)
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={lineData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="visitors"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Pie Chart Component
export const PieChartComponent = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg h-80">
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        User Distribution by Role
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// Bar Chart Component
export const BarChartComponent = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg h-80">
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        Monthly Revenue
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={barData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
