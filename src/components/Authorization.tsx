import { User, UserPlus } from "lucide-react";
import { useState } from "react";
import cn from "classnames";
import { Button, Input } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function Authorization() {
  const [choise, setChoise] = useState("nike-name");
  const router = useNavigate();
  return (
    <div className="flex flex-col justify-between bg-gray-50 h-[150px]">
      <div className="flex flex-col">
        <div className="flex items-center bg-white">
          <div
            className={cn(
              "flex items-center cursor-pointer px-2 py-2",
              choise == "nike-name"
                ? "text-blue-500 border rounded-md border-b-0"
                : ""
            )}
            onClick={() => setChoise("nike-name")}
          >
            <User />
            {"دخول الزوار"}
          </div>
          <div
            className={cn(
              "flex items-center cursor-pointer px-2 py-2",
              choise == "sign-in"
                ? "text-blue-500 border rounded-md border-b-0"
                : ""
            )}
            onClick={() => setChoise("sign-in")}
          >
            <User />
            {"دخول الاعضاء"}
          </div>
          <div
            className={cn(
              "flex items-center cursor-pointer px-2 py-2",
              choise == "sign-up"
                ? "text-blue-500 border rounded-md border-b-0"
                : ""
            )}
            onClick={() => setChoise("sign-up")}
          >
            <UserPlus />
            {"تسجيل عضويه"}
          </div>
        </div>
        <hr />
      </div>
      <div className="">
        {choise == "nike-name" && (
          <div className="flex gap-x-2 w-[300px] px-1">
            {" "}
            <Input size={"sm"} backgroundColor={"white"} width={"220px"} placeholder="أكتب الاسم المستعار" />{" "}
            <Button size={"sm"} onClick={()=>router('/')}>الدخول</Button>
          </div>
        )}
        {choise == "sign-in" && (
          <div className="flex  flex-col gap-x-2 w-[300px] px-1 gap-y-1">
            {" "}
            <Input size={"sm"} backgroundColor={"white"} width={"220px"}  placeholder="اكتب اسم العضو"/>
            <div className="flex items-center gap-x-2 ">
              <Input size={"sm"} backgroundColor={"white"} width={"220px"}  placeholder="اكتب كلمه المرور"/>{" "}
              <Button size={"sm"}>الدخول</Button>
            </div>
          </div>
        )}
        {choise == "sign-up" && (
          <div className="flex  flex-col gap-x-2 w-[300px] px-1 gap-y-1">
            {" "}
            <Input size={"sm"} backgroundColor={"white"} width={"220px"}  placeholder="اكتب اسم العضو"/>
            <div className="flex items-center gap-x-2 ">
              <Input size={"sm"} backgroundColor={"white"} width={"220px"}  placeholder="اكتب كلمه المرور"/>{" "}
              <Button size={"sm"}>الدخول</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Authorization;
