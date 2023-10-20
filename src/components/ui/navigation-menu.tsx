import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
    SheetClose,
  } from "./sheet";
import { Button } from "./button";

export const NavigationMenu = ({ route, icon: Icon, text}: {route: string, icon: React.ElementType, text: string }) => {
    const IconComponent = Icon as unknown as React.FC<{ size: number }>;   
    return (
        <SheetClose asChild>
        <Link href={route}>
          <Button variant={"outline"} className="w-full justify-start gap-2">
            {Icon && <IconComponent size={16} />}
            {text}
          </Button>
        </Link>
      </SheetClose>
    );
  };