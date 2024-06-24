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

export default function Home() {
  const { theme, setTheme } = useTheme();
  const isPadOrComputer = useMediaQuery("(min-width: 768px)");
  const maxWidthPercentage = isPadOrComputer ? "95%" : "100%";

  React.useEffect(() => {
    // 在组件挂载时检查当前主题，并根据主题设置文字颜色
    if (theme === "light") {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <nav className="bg-[hsl(var(--nav-color))] p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Avatar className="order-1">
            <AvatarImage src="https://github.com/YC815/ThreadsMC/blob/main/public/user_icon/small_user_icon.jpg?raw=true" />
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
          <a href="/about" className="text-black dark:text-white">
            關於我們
          </a>
          <a href="/contact" className="text-black dark:text-white">
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
      <div className="p-3 flex justify-center">
        <div className={`max-w-[${maxWidthPercentage}]`}>
          <Image
            src="/group_photo_2024_6.png"
            layout="responsive"
            width={1920}
            height={1080}
          />
        </div>
      </div>
      <h1 className="text-center text-4xl font-bold text-light dark:text-dark">
        ThreadsMC伺服器
      </h1>
      <h2 className="text-center text-2xl font-bold text-light dark:text-dark">
        橫跨Java版以及基岩版的新世代Minecraft伺服器
      </h2>
    </div>
  );
}
