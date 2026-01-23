import { useGetAllSupplementQuery } from "../../redux/api/supplementApi/SupplementApi";
import SupplementCard from "./SupplementCard";
import BenefitSplement from "./BenefitSplement";

const SupplementPage = () => {
  const { data, isLoading, isError } = useGetAllSupplementQuery();

  const supplements = data?.data ?? [];

  if (isLoading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center mt-20">Failed to load supplements</p>;
  }

  return (
    <div className="bg-slate-100 mt-12 py-10">
      {/* 🔥 Benefits Section */}
      <BenefitSplement />

      {/* 🛒 Supplement Cards */}
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow">
        {supplements.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1">
            {supplements.map((supplement) => (
              <SupplementCard key={supplement?._id} supplement={supplement} />
            ))}
          </div>
        ) : (
          <p className="text-center py-20 text-xl font-semibold">
            No supplements found
          </p>
        )}
      </div>
    </div>
  );
};

export default SupplementPage;
