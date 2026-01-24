interface StatCardProps {
  icon: string;
  value: string;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => {
  return (
    <div className="flex items-center gap-4 p-6 bg-white border rounded-xl shadow-md">
      <img src={icon} alt={label} className="h-14 w-14" />
      <div>
        <h4 className="text-2xl font-bold text-blue-600">{value}</h4>
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  );
};
export default StatCard;