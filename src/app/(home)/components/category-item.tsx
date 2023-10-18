import { Badge } from "@/components/ui/badge";
import { CategoryIcon, CategoryItemProps } from "@/components/ui/categoryIcon";

export const CategoryItem = ({ category }: CategoryItemProps) => {

  return (
    <Badge variant={"outline"} className="flex items-center justify-center gap-2 py-3 rounded-lg">
      <CategoryIcon category={category} />
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};
