import {
  User,
  UserPlus,
  Video,
  MessageCircle,
  Settings,
  MessageCircleIcon,
  Mail,
  Heart,
  CircleOff,
  Delete,
  UserCheck,
  Gift,
} from "lucide-react";

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
    name: "خاص",
    icon: MessageCircle,
  },
  {
    name: "الضبط",
    icon: Settings,
  },
];

export let SIZE = 1;

export const Profile_Items = [
  {
    icon: MessageCircleIcon,
    text: "  محادثه خاصة",
  },
  {
    icon: Mail,
    text: "تنبيه",
  },
  {
    icon: Heart,
    text: "0",
  },
  {
    icon: CircleOff,
    text: "تجاهل",
  },
  {
    icon: CircleOff,
    text: "الباند",
  },
  {
    icon: CircleOff,
    text: "طرد",
  },
  {
    icon: Delete,
    text: "حذف الصورة",
  },
  {
    icon: UserCheck,
    text: "ترقيت المراقب",
  },
  {
    icon: Gift,
    text: "هدية",
  },
];
export const EMOJIS = [
  "✌",
  "😂",
  "😝",
  "😁",
  "😱",
  "👉",
  "🙌",
  "🍻",
  "🔥",
  "🌈",
  "☀",
  "🎈",
  "🌹",
  "💄",
  "🎀",
  "⚽",
  "🎾",
  "🏁",
  "😡",
  "👿",
  "🐻",
  "🐶",
  "🐬",
  "🐟",
  "🍀",
  "👀",
  "🚗",
  "🍎",
  "💝",
  "💙",
  "👌",
  "❤",
  "😍",
  "😉",
  "😓",
  "😳",
  "💪",
  "💩",
  "🍸",
  "🔑",
  "💖",
  "🌟",
  "🎉",
  "🌺",
  "🎶",
  "👠",
  "🏈",
  "⚾",
  "🏆",
  "👽",
  "💀",
  "🐵",
  "🐮",
  "🐩",
  "🐎",
  "💣",
  "👃",
  "👂",
  "🍓",
  "💘",
  "💜",
  "👊",
  "💋",
  "😘",
  "😜",
  "😵",
  "🙏",
  "👋",
  "🚽",
  "💃",
  "💎",
  "🚀",
  "🌙",
  "🎁",
  "⛄",
  "🌊",
  "⛵",
  "🏀",
  "🎱",
  "💰",
  "👶",
  "👸",
  "🐰",
  "🐷",
  "🐍",
  "🐫",
  "🔫",
  "👄",
  "🚲",
  "🍉",
  "💛",
  "💚",
];

export const ADMIN_SIDEBAR = [
  {
    text: "تسجل",
    link: "/admin-view/record",
  },
  {
    text: "الحالات",
    link: "/admin-view/status",
  },
  {
    text: "الأعضاء",
    link: "/admin-view/users",
  },
  {
    text: "الحضر",
    link: "/admin-view/block",
  },
  {
    text: "الصلاحيات",
    link: "/admin-view/permissions",
  },
  {
    text: "فلتر",
    link: "/admin-view/filter",
  },
  {
    text: "غرف",
    link: "/admin-view/rooms",
  },
  {
    text: "لوحة الموقع",
    link: "/admin-view/control",
  },
  {
    text : "الخروج",
    link : "/admin-view"
  }
];



export const Browzer = [
  "Chrome",
  "Firefox",
  "Opera",
  "Safari",
]


export const System = [
  "Android",
  "iOS",
  "Windows",
  "linux",
  
]