import { Badge } from "@/components/ui/badge";
import { CategoryIcon, CategoryItemProps } from "@/constants/category-icon";


export const CategoryItem = ({ category }: CategoryItemProps) => {

  return (
    <Badge variant={"outline"} className="flex items-center justify-center gap-2 py-3 rounded-lg">
      <CategoryIcon category={category} products={undefined} />
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};
