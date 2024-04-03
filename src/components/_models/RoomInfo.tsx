import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { User } from "lucide-react";

import { useRef } from "react";

import UserModule from "../UserModule";

export default function RoomInfo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div
        ref={btnRef}
        className="flex justify-center bg-blue-950 items-center border text-sm md:text-md text-white w-[100px] py-1 rounded-md cursor-pointer "
        onClick={onOpen}
      >
        <User  className=" size-4 md:size-5"/> 2
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className="flex flex-col w-full ">
            <div className="w-full flex items-center justify-between px-2 bg-blue-800 text-white relative h-[50px]">
              <p className="font-bold">المتواجدين</p>
              <DrawerCloseButton  backgroundColor={"red"} color={"white"}/>
            </div>
            <Input placeholder="البحث..."  width={"100%"} size={"sm"}  borderRadius={"5px"}/>
            <UserModule/>
            <div className="w-full text-center bg-green-500 text-white py-1 ">
            المتواجدين في الدردشه
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
