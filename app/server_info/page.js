"use client";
import Image from "next/image";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMediaQuery } from "@react-hook/media-query";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Home() {
  const { setTheme } = useTheme();
  const isPadOrComputer = useMediaQuery("(min-width: 768px)");
  const maxWidthPercentage = isPadOrComputer ? "95%" : "100%";

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      {/* Navigation */}
      <nav className="fixed-nav bg-[hsl(var(--nav-color))] p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Avatar className="order-1">
            <AvatarImage src="/user_icon/small_user_icon.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="text-black dark:text-white text-xl order-2">
            ThreadsMC
          </div>
        </div>
        <div className="space-x-4 flex items-center">
          <a href="/" className="text-black dark:text-white">
            首頁
          </a>
          <a href="/server_info" className="text-black dark:text-white">
            伺服器資訊
          </a>
          <a
            href="https://discord.gg/XVAVvafNNY"
            className="text-black dark:text-white"
          >
            聯絡我們
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="p-0" variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Main content */}
      <div className="p-3 pt-32">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-base md:text-lg font-bold text-black dark:text-white mb-2">
              Java IP
            </p>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              tw-5.cs-nodes.net:30623
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-base md:text-lg font-bold text-black dark:text-white mb-2">
              Bedrock IP
            </p>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              IP: tw-1.cs-nodes.net <br />
              Port: 30623
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
