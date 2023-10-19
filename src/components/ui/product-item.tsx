import { ProductWithTotalPrice } from "@/helpers/product";
import { Badge } from "@/components/ui/badge";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex h-[170px] w-full  items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="max-h[70%] h-auto w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
          alt={`imagem do produto ${product.name}`}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-2 py-[2px]">
            <ArrowDownIcon size={12} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
        {product.discountPercentage > 0 ? (
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <p className="font-semibold">R$ {product.totalPrice.toFixed(2)}</p>
            <p className="text-xs line-through opacity-75 overflow-hidden text-ellipsis whitespace-nowrap">
              R$ {Number(product.basePrice).toFixed(2)}
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <p className="opacity-75">
              R$ {Number(product.basePrice).toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
