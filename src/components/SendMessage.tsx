import { Input } from "@chakra-ui/react";
import { LogOut, Smile, Send } from "lucide-react";
function SendMessage() {
  return (
    <div className="flex gap-x-2 w-full items-center justify-between px-1">
      <div className="w-8 h-8 bg-blue-900 text-white p-1 flex justify-center items-center rounded-md cursor-pointer">
        <LogOut  size={"20px"}/>
      </div>
      <Smile className="text-yellow-400 cursor-pointer"  size={"35px"} />
      <Input size={"sm"} borderRadius={"5px"}/>
      <div className="h-8 px-1 py-2 flex justify-center items-center bg-blue-900 rounded-md text-white  cursor-pointer">
        <Send  size={"30px"}/>
        إرسال
      </div>
    </div>
  );
}

export default SendMessage;
