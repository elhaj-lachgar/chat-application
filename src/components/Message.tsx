function Message() {
  return (
    <div className="flex justify-between items-center w-full bg-blue-100 px-1">
      <div className="flex items-center gap-x-2">
        <img src="/avatar.jpg" className="w-11 h-11"/>
        <div className="flex flex-col  py-2">
            <p className="font-bold">مستخدم</p>
            <p>دخل المسخدم الغرفة</p>
        </div>
      </div>
    </div>
  )
}

export default Message
