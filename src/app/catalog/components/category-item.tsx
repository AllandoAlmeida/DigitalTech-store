import { Category } from "@prisma/client";
import { ImageCatalog } from "./image-catalog";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg">
        <ImageCatalog src={category.imageUrl} alt={category.name} />
      </div>
      <div className="rounded-bl-lg rounded-br-lg bg-accent py-3">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </div>
    </div>
  );
};
