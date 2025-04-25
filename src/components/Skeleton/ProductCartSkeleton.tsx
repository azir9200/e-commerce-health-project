const ProductCardSkeleton = () => {
  return (
    <div className="border rounded-lg shadow-lg bg-base-100 animate-pulse flex flex-col h-full">
      <div className="w-full h-40 bg-gray-300 rounded-t-lg" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4" />
        <div className="h-4 bg-gray-300 rounded mb-4 w-full flex-grow" />
        <div className="h-5 bg-gray-300 rounded mb-4 w-1/2" />
        <div className="h-10 bg-gray-400 rounded w-full" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
