import { Moon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
        {/* {LEFT} */}
        collapsButton

        {/* {RIGHT}dgrtxvgsxtgf*/}
        
        <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <Moon />
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>
    </nav>
  );
}
