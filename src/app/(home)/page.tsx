import { prismaClient } from "@/lib/prisma";
import { Banner } from "./components/banner";
import { Categories } from "./components/catogories";
import ProductList from "../../components/ui/product-list";
import { SectionTitle } from "./components/section-title";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    
    <div className="flex flex-col gap-8 px-5 py-8">
      <Banner src="/banner-01.png" discount={50} text={"esse mês"} />
      <div>
        <Categories />
      </div>
      <div>
        <SectionTitle text={"oferta"} />
        <ProductList products={deals} />
      </div>
      <div className="">
        <Banner src="/banner-02.png" discount={50} text={"em Mouses"} />
      </div>
      <div>
        <SectionTitle text={"teclado"} />
        <ProductList products={keyboards} />
      </div>
      <div>
        <Banner src="/banner-03.png" discount={50} text={"em fones"} />
      </div>
      <div>
        <SectionTitle text={"Mouses"} />
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
