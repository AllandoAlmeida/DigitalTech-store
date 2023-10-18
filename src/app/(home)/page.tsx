import { prismaClient } from "@/lib/prisma";
import { Banner } from "./components/banner";
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
      <Banner src="/banner-01.png" discount={50} text={"esse mês"} />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8 px-5">
        <p className="my-2 mb-2 font-bold  uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>
      <div className="mt-8 px-5">
        <p className="my-2 mb-2 font-bold uppercase">Novidades</p>
        <Banner src="/banner-02.png" discount={50} text={"em Mouses"} />
      </div>
      <div className="mt-8 px-5">
        <p className="my-2 mb-2 font-bold uppercase">Novidades</p>
        <Banner src="/banner-03.png" discount={50} text={"em Fones"} />
      </div>
    </div>
  );
}
