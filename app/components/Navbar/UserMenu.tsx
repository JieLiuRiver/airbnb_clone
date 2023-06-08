"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
        "
        >
          Airbnb your home
        </div>
        <div className="cursor-pointer p-4 md:py-1 md:px-1 border-[1px] rounded-full border-neutral-200 flex flex-row items-center gap-3 hover:shadow-md transition">
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
