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
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
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
      <div className="p-3 pt-16">
        {/* Image */}
        <div className="relative w-full h-96 mb-4">
          <Image
            src="/group_photo_2024_6.png"
            layout="fill"
            objectFit="cover"
            alt="Group Photo"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 text-center">
          ThreadsMC伺服器
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 text-center">
          橫跨Java版與基岩版的新世代Minecraft伺服器
        </h2>
        {/* Text sections */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-base md:text-lg font-bold text-black dark:text-white mb-2">
              保留原版架構
            </p>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              堅持不安裝領地、Home插件等花俏插件。伺服器只有安裝Tpa及一些效能插件，以最大限度地保留原版滋味。
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-base md:text-lg font-bold text-black dark:text-white mb-2">
              友善社區
            </p>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              玩家社群數量約30人左右，小型社群帶來更容易結交夥伴的環境，一起快樂生存！
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-base md:text-lg font-bold text-black dark:text-white mb-2">
              經常舉辦活動
            </p>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              我們有時候會在週末舉辦地圖同樂會、吃雞比賽等各種活動，如果生存玩膩了也可以一起玩地圖！
            </p>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 text-center mt-10">
          現在就加入伺服器！
        </h1>
        <div className="flex justify-center">
          <Link href="/server_info">
            <Button className="h-16 md:h-20 w-48 md:w-56 text-xl md:text-2xl">
              查看資訊
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
