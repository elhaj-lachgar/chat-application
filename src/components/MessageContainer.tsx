import Message from "./Message"

function MessageContainer() {
  return (
    <div className="flex flex-col h-[calc(100vh-85px)] overflow-auto ">
      <Message/>
    </div>
  )
}

export default MessageContainer
