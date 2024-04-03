import { Input } from "@chakra-ui/react";
import { Send, PhoneCallIcon } from "lucide-react";
import ShareButton from "./_elements/ShareButton";
import EmojiModule from "./EmojiModule";
import { useState } from "react";

function SendPrivateMessage() {
  const [message, setMessage] = useState("");
  return (
    <div className="flex items-center gap-x-1 px-2 mt-2 ">
      <PhoneCallIcon className="text-green-600 cursor-pointer" />
      <ShareButton />
      <EmojiModule text={message} setText={setMessage} />
      <Input
        height={"28px"}
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
      <div className="p-1 bg-blue-700  text-white flex text-xs items-center rounded">
        <Send size={"18px"} className="cursor-pointer" />
        إرسال
      </div>
    </div>
  );
}

export default SendPrivateMessage;
