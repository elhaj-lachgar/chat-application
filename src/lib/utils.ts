import { User, UserPlus, Video , MessageCircle, Settings } from "lucide-react";

export const Auth_Items = [
  {
    prop: "nike-name",
    icon: User,
    name: "دخول الزوار",
    placeholder: ["أكتب الاسم المستعار"],
  },
  {
    prop: "sign-in",
    icon: User,
    name: "دخول الاعضاء",
    placeholder: ["اكتب اسم العضو", "اكتب كلمه المرور"],
  },
  {
    prop: "sign-up",
    icon: UserPlus,
    name: "تسجيل عضويه",
    placeholder: ["اكتب اسم العضو", "اكتب كلمه المرور"],
  },
];

export const ControlBarItems = [
  {
    name: "",
    icon: User,
  },
  {
    name: "غرف",
    icon: Video,
  },
  {
    name : "خاص",
    icon : MessageCircle
  },
  {
    name  : "الضبط",
    icon : Settings
  }
];
