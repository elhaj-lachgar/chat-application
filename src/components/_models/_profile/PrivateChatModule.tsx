import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import HeaderChatModule from "./HeaderChatModule";
import SendPrivateMessage from "../../SendPrivateMessage";
import { Profile_Items } from "../../../lib/utils";
import Message from "../../Message";
import { useEffect, useRef } from "react";

function PrivateChatModule() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const chat = Profile_Items[0];
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    input.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div
        className="border p-1 flex  rounded-md cursor-pointer w-[150px] text-sm items-center justify-center"
        onClick={onOpen}
      >
        <chat.icon className="size-5" />
        {chat.text}
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pb={"10px"}>
          <HeaderChatModule onClose_Module={onClose} />
          <div className="flex flex-col h-[300px] overflow-auto">
            {[...Array(10)].map(() => (
              <div ref={input}>
                <Message />
              </div>
            ))}
          </div>
          <SendPrivateMessage />
        </ModalContent>
      </Modal>
    </>
  );
}

export default PrivateChatModule;
