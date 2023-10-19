import { Category } from "@prisma/client";
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";

export interface CategoryItemProps {
  products: any;
  category: Category;
}

export const CategoryIcon = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    mouses: <MouseIcon size={16} />,
    keyboards: <KeyboardIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
  };
  return categoryIcon[category.slug as keyof typeof categoryIcon];
};
