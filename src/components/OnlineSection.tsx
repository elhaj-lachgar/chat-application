import { User } from "lucide-react";
import UserContainer from "./UserContainer";

function OnlineSection() {
  return (
    <div className="w-full flex flex-col mt-2">
      <div className="flex justify-between items-center bg-gray-600">
        <div className="bg-green-700 text-center w-[100px] text-white">
          متصل
        </div>
        <div className="flex bg-green-700 text-white w-[70px] justify-center items-center">
          <User />
          22
        </div>
      </div>
      <div className="overflow-auto flex flex-col h-[400px]">
        {[...Array(22)].map(() => {
          return <UserContainer />;
        })}
      </div>
    </div>
  );
}

export default OnlineSection;
