import StatsCard from "../components/analytics/StatsCard";
import {
  LineChartComponent,
  PieChartComponent,
  BarChartComponent,
} from "../components/analytics/Charts";

const Analytics = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Analytics Dashboard
      </h2>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <StatsCard
          title="Total Visitors"
          value="24,502"
          change="12.5%"
          icon="👥"
          changeType="positive"
        />
        <StatsCard
          title="Total Revenue"
          value="$14,256"
          change="8.2%"
          icon="💰"
          changeType="positive"
        />
        <StatsCard
          title="New Users"
          value="542"
          change="3.2%"
          icon="✨"
          changeType="positive"
        />
        <StatsCard
          title="Bounce Rate"
          value="24.3%"
          change="2.7%"
          icon="📉"
          changeType="negative"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Line Chart - Full width on medium screens, half on large */}
        <div className="lg:col-span-2">
          <LineChartComponent />
        </div>
        {/* Pie Chart */}
        <PieChartComponent />
        {/* Bar Chart */}
        <BarChartComponent />
      </div>
    </div>
  );
};

export default Analytics;
