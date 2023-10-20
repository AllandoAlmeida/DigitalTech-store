"use client";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Card } from "./card";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Cart } from "./cart";
import { CartContext } from "@/providers/cart";

import React, { useContext } from "react";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu } from "./navigation-menu";
import { Profile } from "./profile";
import { NavigationMenuAuth } from "./navigation-menu-auth";

const Header = () => {
  const { status } = useSession();
  const { count } = useContext(CartContext);
  const handleLoginClick = async () => {
    await signIn();
  };
  const HandleLogOutClick = async () => {
    await signOut();
  };
  return (
    <Card className="flex items-center justify-between p-[1.875rem]  ">
      <div className="flex w-full items-center justify-between md:m-auto md:w-[50rem] md:max-w-[50rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant={"outline"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader className="text-left text-lg ">
              Menu
            </SheetHeader>
            <Profile />
            <div className="mt-4 flex flex-col gap-2">
              {status == "unauthenticated" && (
                <NavigationMenuAuth
                  onClick={handleLoginClick}
                  icon={LogInIcon}
                  text={"Fazer Login"}
                />
              )}
              {status == "authenticated" && (
                <NavigationMenuAuth
                  onClick={HandleLogOutClick}
                  icon={LogOutIcon}
                  text={"Fazer Logout"}
                />
              )}
              <NavigationMenu route={"/"} icon={HomeIcon} text={"Início"} />
              <NavigationMenu route={"/"} icon={PercentIcon} text={"Ofertas"} />
              <NavigationMenu
                route={"/Pages/catalogPage"}
                icon={ListOrderedIcon}
                text={"Catálogo"}
              />
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/">
          <h1 className="text-lg font-semibold">
            <span className="text-primary">FSW</span> Store
          </h1>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant={"outline"} className="relative ">
              <ShoppingCartIcon />
              {count > 0 ? (
                <Badge className="color-yellow absolute right-0 top-0 h-[0.rem] w-[0.01rem] items-center justify-center rounded-full">
                  {count}
                </Badge>
              ) : ("")}
            </Button>
          </SheetTrigger>

          <SheetContent>
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
};

export default Header;
