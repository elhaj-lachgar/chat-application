import {Heart , MessageCircle} from "lucide-react";

function Buttons() {
  return (
    <div className="flex items-center">
      <Heart className="p-1 text-white bg-red-500 cursor-pointer "/>
      <MessageCircle  className="p-1 text-white bg-blue-700 cursor-pointer"/>
    </div>
  )
}

export default Buttons
