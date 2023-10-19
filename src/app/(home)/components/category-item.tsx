import { Badge } from "@/components/ui/badge";
import { CategoryIcon, CategoryItemProps } from "@/constants/category-icon";
import Link from "next/link";

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant={"outline"}
        className="flex items-center justify-center gap-2 rounded-lg py-3"
      >
        <CategoryIcon category={category} products={undefined} />
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};
