import { useParams } from "react-router-dom";
import ControlBar from "../components/ControlBar";
import MessageContainer from "../components/MessageContainer";
import SendMessage from "../components/SendMessage";
import { useAdminContext } from "../context/AdminContextProvider";
import { useEffect } from "react";

function Home() {
  const { roomId } = useParams();
  const { setAdmin } = useAdminContext();
  useEffect(()=>{
    if(roomId == "admin-view" ) setAdmin(true);
    else setAdmin(false);
  },[])
  return (
    <main className="w-full h-screen bg-gray-50">
      <MessageContainer />
      <SendMessage />
      <ControlBar />
    </main>
  );
}

export default Home;
