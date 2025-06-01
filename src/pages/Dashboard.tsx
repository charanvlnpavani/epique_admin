import CardDetails from "@/components/CardDetails";
import TableDetails from "@/components/TableDetails";
import { cardDetails } from "@/dataset/cardDetails";

const Dashboard = () => {
  return (
    <div className="flex flex-col px-10 bg-gray-100">
      <div className="flex flex-row justify-between items-center pt-2">
        <div className="flex flex-col py-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome to your dashboard</p>
        </div>
        <div className="flex flex-col items-center">
          <p> Name</p>
          <p>Email</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[80vw]">
        {cardDetails.map((card, index) => (
          <CardDetails
            key={index}
            title={card.title}
            description={`Count: ${card.count}`}
          />
        ))}
      </div>
      <div className="flex flex-col py-5 bg-white rounded-lg border mt-5 px-5 h-[68vh]">
        <div className="flex flex-col justify-between  py-5">
          <h2 className="text-2xl font-bold">Recent Activity</h2>
          <p className="text-gray-600">
            Your recent activities will be displayed here.
          </p>
        </div>
        <TableDetails />
      </div>
    </div>
  );
};

export default Dashboard;
