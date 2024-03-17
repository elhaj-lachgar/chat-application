import Flags from "react-country-flag"
function UserContainer() {

  return (
    <div className="flex justify-between items-center px-2 border ">
      <div className="flex items-center gap-x-1">
        <img src="/avatar.jpg" className="w-9 h-9"/>
        <div className="flex flex-col justify-between py-2">
            <p>خالد</p>
            <p>(غير مسجل)</p>
        </div>
      </div>
    <Flags countryCode="sa" svg/>
    </div>
  )
}

export default UserContainer
