import ControlBar from "../components/ControlBar"
import MessageContainer from "../components/MessageContainer"
import SendMessage from "../components/SendMessage"

function Home() {
  return (
    <main className="w-full h-screen bg-gray-50">
      <MessageContainer/>
      <SendMessage/>
      <ControlBar/>
    </main>
  )
}

export default Home
