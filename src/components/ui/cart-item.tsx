import Image from "next/image";
import { CartContext, CartProduct } from "@/providers/cart";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext, useState } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity, removeProductFromCart } =
    useContext(CartContext);

  const handleDecreaseProductQuantity = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveProductFromCart= () => {
    removeProductFromCart(product.id);
  };

  return (
    <div className="rounded-md mt-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* direito */}
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>
          <div className="flex items-center gap-4">
            <p className="text-sm font-bold">
              R$ {product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>
          <div className="mt-4 flex items-center gap-1">
            <Button
              size="icon"
              variant={"outline"}
              className="h-6 w-6"
              onClick={handleDecreaseProductQuantity}
            >
              <ArrowLeftIcon size={16} />
            </Button>
            <span className="flex h-5 w-5 items-center justify-center text-xs">
              {product.quantity}
            </span>
            <Button
              size="icon"
              variant={"outline"}
              className="h-6 w-6"
              onClick={handleIncreaseQuantityClick}
            >
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button size="icon" variant={"outline"} onClick={handleRemoveProductFromCart}>
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
