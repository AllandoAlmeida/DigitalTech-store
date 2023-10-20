import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { CartDetails } from "./cart-details";

export const Cart = () => {
  const { products, subTotal, total, totalDiscount, count } =
    useContext(CartContext);
  return (
    <section className="flex flex-col gap-8">
      <Badge
        className="w-32 gap-1 border-2 border-primary px-3 py-[0.375rem] text-center text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>
      {/* renderizar os produtos */}
      <div className="flex flex-col gap-5">
        {products.length > 0 ? (
          products?.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <div className="mt-[50px] flex items-center justify-center ">
            <span>Carrinho vazio</span>
          </div>
        )}
      </div>
      <section className="flex flex-col gap-3">
        <CartDetails label={"SubTotal"} value={subTotal.toFixed(2)} />
        <CartDetails label={"Frete"} value={"Grátis"} />
        <CartDetails label={"Desconto"} value={totalDiscount.toFixed(2)} />
        <CartDetails label={"Total"} value={total.toFixed(2)} />
      </section>
    </section>
  );
};
