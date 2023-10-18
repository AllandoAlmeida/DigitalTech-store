import { prismaClient } from "@/lib/prisma";
import { BannerHm01 } from "./components/banner01";
import { Categories } from "./components/catogories";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div className="">
      <BannerHm01 />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8 px-5">
        <ProductList products={deals}/>
      </div>
    </div>
  );
}
