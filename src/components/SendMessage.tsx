import { Input } from "@chakra-ui/react";
import { LogOut, Send } from "lucide-react";
import EmojiModule from "./EmojiModule";
import { useState } from "react";
function SendMessage() {
  const [message, setMessage] = useState("");
  return (
    <div className="flex gap-x-2 w-full items-center justify-between px-1">
      <div className="w-8 h-8 bg-blue-900 text-white p-1 flex justify-center items-center rounded-md cursor-pointer">
        <LogOut size={"20px"} />
      </div>
      <EmojiModule text={message} setText={setMessage} />
      <Input
        size={"sm"}
        borderRadius={"5px"}
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
      <div className="h-8 px-1 py-2 flex justify-center items-center bg-blue-900 rounded-md text-white  cursor-pointer">
        <Send size={"30px"} />
        إرسال
      </div>
    </div>
  );
}

export default SendMessage;
