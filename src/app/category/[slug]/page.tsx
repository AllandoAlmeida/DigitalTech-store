import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ProductItem } from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { CategoryIcon, CategoryItemProps } from "@/constants/category-icon";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 p-5">
      <div className="w-[30%]">
        <Badge
          className="gap-1 border-2 border-primary px-3 py-[0.375rem] text-center text-base uppercase"
          variant={"outline"}
        >
          <CategoryIcon category={category} products={undefined} />
          {params.slug}
        </Badge>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
