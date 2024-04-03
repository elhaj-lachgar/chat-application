import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { Settings, UserRoundX, LogOut } from "lucide-react";

import { useRef } from "react";
import UploadButton from "../_elements/UploadButton";
import { useSizeContext } from "../../context/SizeContextProvider";
import { useAdminContext } from "../../context/AdminContextProvider";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLDivElement | null>(null);
  const { setSize } = useSizeContext();
  const { admin } = useAdminContext();
  const router = useNavigate();
  return (
    <>
      <div
        ref={btnRef}
        className="flex justify-center bg-blue-950 items-center border text-sm md:text-md text-white w-[100px] py-1 rounded-md cursor-pointer "
        onClick={onOpen}
      >
        <Settings className=" size-4 md:size-5" /> {"الضبط"}
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className="flex flex-col w-full">
            <div className="w-full flex items-center justify-between px-2 bg-blue-800 text-white relative h-[50px]">
              <p className="font-bold">الإعدادات</p>
              <DrawerCloseButton backgroundColor={"red"} color={"white"} />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-center w-[100px]  bg-blue-700 text-white  ">
                الزخرفه
              </label>
              <Input size={"sm"} width={"100%"} value={"elhaj"} />
            </div>
            <div className="flex flex-col w-full mt-1">
              <label className="text-center w-[100px]  bg-blue-700 text-white   ">
                الحاله
              </label>
              <Input size={"sm"} width={"100%"} value={"(عضو جديد)"} />
            </div>
            <div className="flex flex-col gap-y-1 mt-2">
              <div className="flex gap-x-1 items-center">
                <label className="text-center w-[100px]  bg-blue-700 text-white   ">
                  لون الإسم
                </label>
                <Input type="color" width={"100px"} size={"sm"} />
              </div>
              <div className="flex gap-x-1 items-center">
                <label className="text-center w-[100px]  bg-blue-700 text-white   ">
                  لون الخط
                </label>
                <Input type="color" width={"100px"} size={"sm"} />
              </div>
              <div className="flex gap-x-1 items-center">
                <label className="text-center w-[100px]  bg-blue-700 text-white    ">
                  لون الخلفيه
                </label>
                <Input
                  type="color"
                  width={"100px"}
                  size={"sm"}
                  value={"255 255 255"}
                />
              </div>
            </div>
            <Button
              marginTop={"5px"}
              color={"white"}
              borderRadius={"0px"}
              _hover={{ backgroundColor: "rgb(74 222 128 )" }}
              backgroundColor={"rgb(34 197 94  )"}
              size={"sm"}
            >
              حفظ
            </Button>

            <div className="flex flex-col gap-y-2 mt-2">
              <Select
                borderRadius={"0px"}
                bg={"blue"}
                textColor={"white"}
                size={"sm"}
                iconColor="white"
                onChange={(e) => setSize(parseFloat(e.currentTarget.value))}
              >
                <option className="text-black" value="1">
                  %100 - حجم الخطوط
                </option>
                <option className="text-black" value="1.2">
                  %120 - حجم الخطوط
                </option>
                <option className="text-black" value="1.1">
                  %110 - حجم الخطوط
                </option>
                <option className="text-black" value="1.05">
                  %105 - حجم الخطوط
                </option>
                <option className="text-black" value="0.95">
                  %95 - حجم الخطوط
                </option>
                <option className="text-black" value="0.90">
                  %90 - حجم الخطوط
                </option>
              </Select>
              <Select
                size={"sm"}
                borderRadius={"0px"}
                bg={"blue"}
                textColor={"white"}
                iconColor="white"
              >
                <option className="text-black">السيرفر الصوتي: الاساسي</option>
                <option className="text-black">السيرفر الصوتي: TCP</option>
                <option className="text-black">السيرفر الصوتي: UDP</option>
                <option className="text-black">
                  السيرفر الصوتي: TCP+Relay
                </option>
                <option className="text-black">
                  السيرفر الصوتي: UDP+Relay
                </option>
                <option className="text-black">
                  السيرفر الصوتي: UDP+Relay
                </option>
              </Select>
              <Select
                size={"sm"}
                borderRadius={"0px"}
                bg={"blue"}
                textColor={"white"}
                iconColor="white"
              >
                <option className="text-black">جودة المايك: الاساسيه</option>
                <option className="text-black">جودة المايك: ضعيفه</option>
                <option className="text-black">جودة المايك: متوسطه</option>
                <option className="text-black ">جودة المايك: عاليه</option>
              </Select>

              <UploadButton />
              <Button
                bg={"rgb(239 68 68)"}
                _hover={{ bg: "rgb(239 68 68)" }}
                size={"sm"}
                borderRadius={"0px"}
                leftIcon={<UserRoundX className="text-white" />}
                textAlign={"center"}
                border={"1px solid gray"}
                color={"white"}
              >
                حذف الصورة
              </Button>

              <Button
                bg={"rgb(239 68 68)"}
                _hover={{ bg: "rgb(239 68 68)" }}
                size={"sm"}
                borderRadius={"0px"}
                leftIcon={<LogOut className="text-white" />}
                textAlign={"center"}
                border={"1px solid gray"}
                color={"white"}
              >
                تسجيل خروج
              </Button>
              {admin && (
                <Button
                  size={"sm"}
                  borderRadius={"0px"}
                  border={"1px solid gray"}
                  onClick={() => {
                    if (!admin) return;
                    router("/admin-view/record");
                  }}
                >
                  لوحة تحكم
                </Button>
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
