import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import { X } from "lucide-react";
import { Profile_Items } from "../../../lib/utils";
import Flags from "react-country-flag";

function HeaderChatModule({ onClose_Module }: { onClose_Module: () => void }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const chat = Profile_Items[0];
  const report = Profile_Items[1];
  const like = Profile_Items[2];
  const igonre = Profile_Items[3];

  return (
    <>
      <div
        className="flex items-center justify-between px-2 bg-blue-950 text-white py-1"
        onClick={onOpen}
      >
        <div className="flex items-center gap-x-1">
          <img src="/avatar.jpg" className="w-6 h-6" />
          خالد
        </div>
        <div
          className="text-white bg-red-500 p-1 rounded-sm cursor-pointer"
          onClick={onClose_Module}
        >
          <X />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={"350px"}>
          <div className="flex items-center justify-between px-2 py-3 bg-blue-950 text-white">
            <img src="/avatar.jpg" className="w-6 h-6" />
            <ModalCloseButton bg={"red"} color={"white"} />
          </div>
          <img src="/avatar.jpg" className="h-[200px] bg-cover" />
          <div className="flex flex-wrap  p-1 gap-1 justify-center">
            <div className="border p-1 flex  rounded-md cursor-pointer w-[150px] text-sm items-center justify-center">
              <chat.icon className="size-5" />
              {chat.text}
            </div>
            <div className="border p-1  flex  rounded-md cursor-pointer w-[150px] text-sm items-center justify-center">
              <report.icon className="size-5" />
              {report.text}
            </div>
            <div className="border p-1  flex  rounded-md cursor-pointer w-[150px] text-sm items-center justify-center text-red-700">
              <like.icon className="size-5" />
              {like.text}
            </div>
            <div className="border p-1  flex  rounded-md cursor-pointer w-[150px] text-sm items-center justify-center text-red-700">
              <igonre.icon className="size-5" />
              {igonre.text}
            </div>
          </div>
          <p className="text-center mt-1 text-black font-semibold">عضو جديد</p>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-x-2 px-2 ">
              <Flags countryCode="sa" svg />
              مملكة السعودية
            </div>
            <div className="flex items-center gap-x-1 bg-blue-950 p-1 text-white font-normal border-[2px]">
              <img src="/1600w-qJptouniZ0A.webp" className="w-7 h-7" />
              غرفة
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}

export default HeaderChatModule;
