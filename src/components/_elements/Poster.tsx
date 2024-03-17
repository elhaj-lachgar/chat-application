import { Input } from "@chakra-ui/react";
import {Send, Share2 , Smile} from "lucide-react";

function Poster() {
  return (
    <div className="flex items-center gap-x-1 px-1 mt-2 ">
      <Share2 className="p-1 text-white bg-blue-700 cursor-pointer rounded" size={"28px"}/>
      <Smile size={"30px"} className="text-yellow-500 cursor-pointer"/>
      <Input height={"28px"}/>
      <div className="p-1 bg-blue-700  text-white flex text-xs items-center rounded">
        <Send size={"18px"} className="cursor-pointer"/>
        إرسال
      </div>
    </div>
  )
}

export default Poster
