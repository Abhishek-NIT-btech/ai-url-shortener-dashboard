interface StatsCardProps {
  title: string;
  value: string;
}

const StatsCard = ({ title, value }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-gray-500 text-sm">{title}</h2>

      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default StatsCard;