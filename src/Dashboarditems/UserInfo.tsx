import { useGetMeQuery } from "../redux/api/getMeApi/getMeApi";

const UserInfo = () => {
  const { data, isLoading, error } = useGetMeQuery(undefined);
  const myself = data?.data;
  console.log("object", myself?.name);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching user data</p>;

  return (
    <div className="container mx-auto p-16">
      <div className="container mx-auto p-8  bg-slate-600 text-stone-100 font-semibold text-3xl space-y-4 ">
        <img
          src={
            myself?.image ||
            "https://t4.ftcdn.net/jpg/01/24/65/69/360_F_124656969_x3y8YVzvrqFZyv3YLWNo6PJaC88SYxqM.jpg"
          }
          alt=""
          className="rounded-full sm: w-40 md:48 "
        />

        <h2>Welcome {myself?.name} </h2>
        <p>Your email is:{myself?.email} </p>
        <p>Your Address: {myself?.address} </p>
        <p> {myself?.mobile} </p>
        <h3>Thank so much for using our site.</h3>
      </div>
    </div>
  );
};

export default UserInfo;
