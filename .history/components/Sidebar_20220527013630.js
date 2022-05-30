import React from "react";
import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="/logo_white.png" width={30} height={30} alt="logo" />
      </div>

      <div className="space-y-1 mt-1 mb-1 xl:ml-24">
        <SidebarLink text="Trang chủ" Icon={HomeIcon} active />
        <SidebarLink text="Khám phá" Icon={HashtagIcon} />
        <SidebarLink text="Thông báo" Icon={BellIcon} />
        <SidebarLink text="Tin nhắn" Icon={InboxIcon} />
        <SidebarLink text="Dấu trang" Icon={BookmarkIcon} />
        <SidebarLink text="Danh sách" Icon={ClipboardListIcon} />
        <SidebarLink text="Hồ sơ" Icon={UserIcon} />
        <SidebarLink text="Thêm" Icon={DotsCircleHorizontalIcon} />
      </div>

      <button className="hidden xl:inline ml-auto bg-[#e600e6] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#cc00ff]">
          Đăng
      </button>

      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto "
      >
        <img
          src= {session.user.image}
          alt="avt"
          width="40" height="40"
          className="h-10 w-10 rounded-full xl:mr-3"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user}</h4>
          <p className="text-[#6e767d]">@wandavision</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;
