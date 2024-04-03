import { useSizeContext } from "../context/SizeContextProvider"
import Message from "./Message"

function MessageContainer() {
  const {size} = useSizeContext();
  const s = size || 1 ;
  const per = 85 ;

  return (
    <div className={`flex flex-col h-[calc(100vh-85px)] overflow-auto`}>
      <Message/>
    </div>
  )
}

export default MessageContainer
