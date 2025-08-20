const StatsCard = ({ title, value, change, icon, changeType = "positive" }) => {
  // changeType can be 'positive' or 'negative'
  const changeColor =
    changeType === "positive" ? "text-green-600" : "text-red-600";
  const changeIcon = changeType === "positive" ? "↗" : "↘";

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl">{icon}</span>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd>
                <div className="text-lg font-semibold text-gray-900">
                  {value}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {change && (
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm">
            <span className={`font-medium ${changeColor}`}>
              {changeIcon} {change}
            </span>{" "}
            from last week
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
